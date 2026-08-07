<script setup lang="ts">
import NewsCard from '~/app/components/NewsCard.vue';
import { branding } from '~/config/content/brand';
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

useSeoMeta({
  title: `News | ${branding.name}`,
  description: newsContent.description,
});
</script>

<template>
  <div>
    <section class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            {{ newsContent.eyebrow }}
          </p>
          <h1
            class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            :class="siteTheme.colors.text.primary"
          >
            {{ newsContent.title }}
          </h1>
          <p class="mt-6 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ newsContent.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard v-for="article in newsContent.articles" :key="article.id" :article="article" />
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :class="siteTheme.colors.text.primary"
        >
          Stay connected with our work
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          Have a question about an update or want to share news from your community? Get in touch
          with us.
        </p>
        <NuxtLink
          to="/contact"
          class="mt-8 inline-flex rounded-xl px-6 py-3.5 font-semibold transition-colors"
          :class="[
            siteTheme.colors.primary.background,
            siteTheme.colors.primary.hover,
            siteTheme.colors.text.inverse,
          ]"
        >
          Contact Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
