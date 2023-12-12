// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/color-mode"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "c-primary": {
              500: "#FF0000",
            },
            secondary: "#0000ff",
          },
        },
      },
    },
  },
});
