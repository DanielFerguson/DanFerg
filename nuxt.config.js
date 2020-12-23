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
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content"],
  content: {},
  build: {},
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
