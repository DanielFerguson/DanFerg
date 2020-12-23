<template>
  <div>
    <nav-bar />

    <article class="px-4 mx-auto mb-24">
      <h1
        class="text-5xl font-bold mt-8 text-center"
        style="line-height: 4rem;"
      >
        {{ article.title }}
      </h1>

      <nuxt-content
        class="prose prose-sm sm:prose lg:prose-lg mx-auto mt-12"
        :document="article"
      />
    </article>
  </div>
</template>

<script>
export default {
  head() {
    let article = this.article;

    return {
      title: article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: article.description
        }
      ]
    };
  },

  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
};
</script>
