export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: 'bg-zinc-950 font-secondary',
      }
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Raleway: true,
      'Open+Sans': true,
    },
    useStylesheet: true,
  }
})
