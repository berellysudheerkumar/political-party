<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

const route = useRoute();
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
const article = newsContent.articles.find((item) => item.link === `/news/${slug}`);

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News article not found',
  });
}

useSeoMeta({
  title: `${article.title} | ${branding.name}`,
  description: article.excerpt,
});
</script>

<template>
  <article>
    <header class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <NuxtLink
          to="/news"
          class="inline-flex items-center text-sm font-semibold transition-colors hover:text-blue-800"
          :class="siteTheme.colors.primary.text"
        >
          <span class="mr-2">←</span>
          All News
        </NuxtLink>

        <div class="mt-10 flex items-center gap-4 text-sm" :class="siteTheme.colors.text.muted">
          <span class="font-semibold" :class="siteTheme.colors.primary.text">{{
            article.category
          }}</span>
          <span aria-hidden="true">•</span>
          <time>{{ article.date }}</time>
        </div>

        <h1
          class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl"
          :class="siteTheme.colors.text.primary"
        >
          {{ article.title }}
        </h1>
      </div>
    </header>

    <div class="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
      <p class="text-xl leading-9" :class="siteTheme.colors.text.secondary">
        {{ article.excerpt }}
      </p>

      <div v-if="article.body?.length" class="mt-8 space-y-6">
        <p
          v-for="paragraph in article.body"
          :key="paragraph"
          class="leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          {{ paragraph }}
        </p>
      </div>

      <div class="mt-12 border-t pt-8" :class="siteTheme.colors.border.default">
        <p class="font-semibold" :class="siteTheme.colors.text.primary">Want to know more?</p>
        <NuxtLink
          to="/contact"
          class="mt-3 inline-flex items-center font-semibold transition-colors hover:text-blue-800"
          :class="siteTheme.colors.primary.text"
        >
          Contact our team
          <span class="ml-2">→</span>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
