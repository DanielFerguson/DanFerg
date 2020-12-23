<template>
  <div>
    <NavBar />

    <div class="xl:w-1/2 px-16 mx-auto">
      <h1
        class="text-5xl font-bold mt-8 text-center"
        style="line-height: 4rem;"
      >
        Every now and then I like to write<br />
        about what I’m up too.
      </h1>

      <div class="flex flex-col gap-8 my-16">
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
            <p class="mt-2">{{ article.description }}</p>
            <p class="mt-2">
              <em class="text-sm">{{ dateFormat(article.createdAt) }}</em>
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
    title: "Articles"
  },

  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .where({ published: true })
      .only(["title", "description", "createdAt", "featured_image", "path"])
      .fetch();

    return { articles };
  },

  methods: {
    dateFormat(dateString) {
      const date = new Date(dateString);

      return `${days[date.getDay()]} ${date.getDate()}, ${
        months[date.getMonth()]
      } ${date.getUTCFullYear()}`;
    }
  }
};
</script>
