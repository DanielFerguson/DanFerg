<template>
  <div>
    <nav-bar />

    <article class="xl:w-4/5 2xl:w-3/5 px-16 mx-auto">
      <h1 class="mt-8 text-center" style="line-height: 5rem;">
        {{ article.title }}
      </h1>
      <nuxt-content class="mt-8" :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  head: {
    title: "hello"
  },

  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
};
</script>
