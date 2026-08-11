<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

const route = useRoute();
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
const article = newsContent.articles.find((item) => item.link === `/news/${slug}`);

const { t } = useI18n();

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News article not found',
  });
}

useSeoMeta({
  title: `${t('news.title')} | ${branding.name}`,
  description: t(`news.articles.${article.id}.excerpt`),
});
</script>

<template>
  <article>
    <header :class="['py-20 sm:py-24', siteTheme.colors.background.surface]">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <!-- Back Link -->
        <NuxtLink
          to="/news"
          :class="[
            'inline-flex items-center text-sm font-semibold transition-opacity hover:opacity-80',
            siteTheme.colors.accent.text,
          ]"
        >
          <span class="mr-2">←</span>
          All News
        </NuxtLink>

        <!-- Metadata -->
        <div :class="['mt-10 flex items-center gap-4 text-sm', siteTheme.colors.text.secondary]">
          <span :class="['font-semibold', siteTheme.colors.accent.text]">
            {{ t(`news.articles.${article.id}.category`) }}
          </span>
          <span aria-hidden="true">•</span>
          <time>{{ t(`news.articles.${article.id}.date`) }}</time>
        </div>

        <!-- Title -->
        <h1 :class="['mt-5', siteTheme.typography.heading.large, siteTheme.colors.text.primary]">
          {{ t(`news.articles.${article.id}.title`) }}
        </h1>
      </div>
    </header>

    <div class="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
      <!-- Excerpt -->
      <p :class="[siteTheme.typography.body.large, siteTheme.colors.text.secondary]">
        {{ t(`news.articles.${article.id}.excerpt`) }}
      </p>

      <!-- Body -->
      <div v-if="t(`news.articles.${article.id}.body`)" class="mt-8 space-y-6">
        <p
          v-for="paragraph in t(`news.articles.${article.id}.body`)"
          :key="paragraph"
          :class="[siteTheme.typography.body.normal, siteTheme.colors.text.secondary]"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Footer CTA -->
      <div :class="['mt-12 border-t pt-8', siteTheme.colors.border]">
        <p :class="['font-semibold', siteTheme.colors.text.primary]">Want to know more?</p>
        <NuxtLink
          to="/contact"
          :class="[
            'mt-3 inline-flex items-center font-semibold transition-opacity hover:opacity-80',
            siteTheme.colors.accent.text,
          ]"
        >
          Contact our team
          <span class="ml-2">→</span>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
