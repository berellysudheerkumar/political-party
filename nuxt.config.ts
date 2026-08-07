import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/icon'],

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/app/components',
      pathPrefix: true,
    },
  ],
});
