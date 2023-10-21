// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: false,
  css: ["normalize.css/normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/common.scss";',
        },
      },
    },
  },
});
