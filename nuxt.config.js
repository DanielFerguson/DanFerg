export default {
  target: "static",
  head: {
    titleTemplate: titleChunk => {
      return titleChunk
        ? `${titleChunk} | Dan Ferguson - social entrepreneur seeking to create change for good.`
        : "Dan Ferguson - social entrepreneur seeking to create change for good.";
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
  build: {}
};
