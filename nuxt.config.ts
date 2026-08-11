import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: ['@nuxt/icon', '@nuxtjs/i18n'],

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },

  i18n: {
    defaultLocale: 'te',

    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'te',
        name: 'తెలుగు',
        file: 'te.json',
      },
    ],

    langDir: 'locales/',
  },
});
