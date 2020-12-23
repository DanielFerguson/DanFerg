import axios from "axios";

export default {
  target: "static",
  head: {
    titleTemplate: titleChunk => {
      return titleChunk
        ? `${titleChunk} | Dan Ferguson - Social entrepreneur seeking to create change for good.`
        : "Dan Ferguson - Social entrepreneur seeking to create change for good.";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Social entrepreneur and serial innovator, seeking to create change for good. Founder of the Helping Group and AIAO."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content"],
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
