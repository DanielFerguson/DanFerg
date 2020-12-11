<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  head: {
    title: "project name"
  },

  async asyncData({ $content, params }) {
    const article = await $content("projects", params.name).fetch();

    return { article };
  }
};
</script>
