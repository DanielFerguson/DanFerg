export default {
  target: "static",
  head: {
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} | Dan Ferguson` : "Dan Ferguson";
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
