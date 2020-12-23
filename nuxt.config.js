import axios from "axios";

export default {
  target: "static",
  head: {
    titleTemplate: titleChunk => {
      return titleChunk
        ? `${titleChunk} | Dan Ferguson`
        : "Dan Ferguson - Social entrepreneur seeking to create change for good.";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],
  content: {},
  build: {
    cssSourceMap: true,
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  },
  sitemap: {
    hostname: "https://danferg.com",
    gzip: true,
    exclude: [],
    async routes() {
      const { $content } = require("@nuxt/content");

      const files = await $content({ deep: true })
        .only(["path"])
        .fetch();

      return files.map(file => (file.path === "/index" ? "/" : file.path));
    }
  },
  plugins: ["~/plugins/vue-lazysizes.client.js"],
  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");

      const files = await $content({ deep: true })
        .only(["path"])
        .fetch();

      return files.map(file => (file.path === "/index" ? "/" : file.path));
    }
  }
};
