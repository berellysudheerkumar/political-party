<script setup lang="ts">
import { computed, ref } from 'vue';

import type { NewsArticle } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

const props = defineProps<{
  article: NewsArticle;
}>();

const imageFailed = ref(false);
const showImage = computed(() => Boolean(props.article.image) && !imageFailed.value);
</script>

<template>
  <article
    :class="[
      siteTheme.components.card.base,
      siteTheme.components.card.background,
      siteTheme.components.card.border,
      siteTheme.components.card.shadow,
      siteTheme.components.card.hover,
      'group flex h-full flex-col overflow-hidden',
    ]"
  >
    <div
      class="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
    >
      <img
        v-if="showImage"
        :src="props.article.image"
        :alt="props.article.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        @error="imageFailed = true"
      />

      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
        aria-hidden="true"
      >
        <span class="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">
          {{ props.article.category }}
        </span>
      </div>
    </div>

    <div class="flex flex-1 flex-col" :class="siteTheme.components.card.padding">
      <div
        class="flex items-center justify-between gap-4 text-sm"
        :class="siteTheme.colors.text.muted"
      >
        <span class="font-semibold" :class="siteTheme.colors.primary.text">
          {{ props.article.category }}
        </span>
        <time>{{ props.article.date }}</time>
      </div>

      <h3 class="mt-4 text-xl font-bold" :class="siteTheme.colors.text.primary">
        <NuxtLink :to="props.article.link" class="transition-colors hover:text-blue-800">
          {{ props.article.title }}
        </NuxtLink>
      </h3>

      <p class="mt-3 leading-7" :class="siteTheme.colors.text.secondary">
        {{ props.article.excerpt }}
      </p>

      <NuxtLink
        :to="props.article.link"
        class="mt-6 inline-flex items-center font-semibold transition-colors hover:text-blue-800"
        :class="siteTheme.colors.primary.text"
      >
        Read More
        <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </NuxtLink>
    </div>
  </article>
</template>
