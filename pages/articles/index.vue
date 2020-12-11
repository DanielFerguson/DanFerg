<template>
  <div>
    <nav-bar />

    <div class="xl:w-4/5 2xl:w-3/5 px-16 mx-auto">
      <h1 class="mt-8 text-center" style="line-height: 5rem;">
        Every now and then I write<br />
        about what I’m up too.
      </h1>

      <div class="flex flex-col gap-6 my-16">
        <nuxt-link
          :to="article.path"
          class="grid grid-cols-5 space-x-6"
          v-for="article in articles"
          :key="article.title"
        >
          <img
            :src="'/images/' + article.featured_image"
            :alt="article.featured_image"
            class="col-span-2 w-full h-64 object-cover rounded-xl"
          />
          <div class="col-span-3 flex flex-col justify-center h-64 rounded-xl">
            <h2 style="line-height: 3rem;">{{ article.title }}</h2>
            <p class="mt-2">{{ article.description }}</p>
            <p class="mt-2">
              <em class="text-sm">{{ dateFormat(article.createdAt) }}</em>
            </p>
          </div>
        </nuxt-link>
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
    const articles = await $content("articles").fetch();

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
