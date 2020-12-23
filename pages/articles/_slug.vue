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
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://danferg.com" + article.path
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: article.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: article.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://danferg.com/images/" + article.featured_image
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "https://danferg.com/images/" + article.featured_image
        },
        {
          hid: "twitter:domain",
          property: "twitter:domain",
          content: "https://danferg.com"
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "https://danferg.com" + article.path
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: article.title
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: article.description
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "https://danferg.com/images/" + article.featured_image
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
