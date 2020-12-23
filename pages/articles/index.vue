<template>
  <div>
    <NavBar />

    <div class="xl:w-3/5 px-4 xl:px-16 mx-auto">
      <h1
        class="text-5xl font-bold mt-8 text-center"
        style="line-height: 4rem;"
      >
        Every now and then I like to write<br />
        about what I’m up too.
      </h1>

      <div class="flex flex-col gap-4 my-16">
        <NuxtLink
          :to="article.path"
          class="grid grid-cols-5 shadow hover:shadow-lg transition-shadow duration-75 ease-in-out rounded-xl"
          v-for="article in articles"
          :key="article.title"
        >
          <img
            :src="'/images/' + article.featured_image"
            :alt="article.featured_image"
            class="col-span-2 w-full h-full object-cover rounded-l-xl"
          />
          <div class="col-span-3 flex flex-col justify-center rounded-xl p-8">
            <h2 class="text-4xl font-bold" style="line-height: 3rem;">
              {{ article.title }}
            </h2>
            <p class="mt-2" v-html="article.description"></p>
            <p class="mt-2">
              <em class="text-sm">{{ dateFormat(article.date) }}</em>
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default {
  head: {
    title: "Articles",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Every now and then I like to write about what I’m up too."
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://danferg.com/articles/"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Articles | Dan Ferguson"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Every now and then I like to write about what I’m up too."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://danferg.com/opengraph-image.png"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "https://danferg.com/twitter-meta-image.png"
      },
      {
        hid: "twitter:domain",
        property: "twitter:domain",
        content: "https://danferg.com/"
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://danferg.com/articles/"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Articles | Dan Ferguson"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: "Every now and then I like to write about what I’m up too."
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://danferg.com/twitter-meta-image.png"
      }
    ]
  },

  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .sortBy("date", "desc")
      .where({ published: true })
      .only(["title", "description", "date", "featured_image", "path"])
      .fetch();

    return { articles };
  },

  methods: {
    dateFormat(dateString) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    }
  }
};
</script>
