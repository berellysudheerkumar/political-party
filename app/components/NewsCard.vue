<script setup lang="ts">
import { ref, computed } from 'vue';
import { siteTheme } from '~/config/theme';
import { newsContent } from '~/config/content/news';

const { t } = useI18n();

const props = defineProps<{
  article: (typeof newsContent.articles)[number];
}>();

const imageFailed = ref(false);

const showImage = computed(() => Boolean(props.article.image) && !imageFailed.value);

const articleText = computed(() => {
  const key = `news.articles.${props.article.translationKey}`;

  return {
    category: t(`${key}.category`),
    title: t(`${key}.title`),
    date: t(`${key}.date`),
    description: t(`${key}.description`),
  };
});
</script>

<template>
  <article
    :class="[
      siteTheme.components.card.base,
      siteTheme.components.card.hover,
      'group flex h-full min-h-[460px] flex-col overflow-hidden !p-0',
    ]"
  >
    <!-- ================================================ -->
    <!-- IMAGE                                             -->
    <!-- ================================================ -->

    <div class="relative h-64 w-full shrink-0 overflow-hidden">
      <!-- Actual Image -->

      <img
        v-if="showImage"
        :src="props.article.image"
        :alt="articleText.title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        @error="imageFailed = true"
      />

      <!-- Fallback -->

      <div
        v-else
        :class="[
          'absolute inset-0 flex items-center justify-center',
          siteTheme.colors.background.dark,
        ]"
        aria-hidden="true"
      >
        <span
          :class="[
            'px-6 text-center text-sm font-semibold tracking-[0.2em] uppercase',
            siteTheme.colors.accent.text,
          ]"
        >
          {{ articleText.category }}
        </span>
      </div>

      <!-- Image Overlay -->

      <div
        v-if="showImage"
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
        aria-hidden="true"
      />
    </div>

    <!-- ================================================ -->
    <!-- CONTENT                                           -->
    <!-- ================================================ -->

    <div class="flex flex-1 flex-col p-6">
      <!-- Category + Date -->

      <div
        :class="[
          'flex items-center justify-between gap-4 text-xs',
          siteTheme.colors.text.secondary,
        ]"
      >
        <span :class="['font-bold tracking-wide', siteTheme.colors.accent.text]">
          {{ articleText.category }}
        </span>

        <time class="whitespace-nowrap">
          {{ articleText.date }}
        </time>
      </div>

      <!-- Title -->

      <h3 :class="['mt-4 text-xl leading-snug font-bold', siteTheme.colors.text.primary]">
        <NuxtLink :to="props.article.link" class="transition-opacity hover:opacity-75">
          {{ articleText.title }}
        </NuxtLink>
      </h3>

      <!-- Description -->

      <p :class="['mt-3 line-clamp-4 text-sm leading-7', siteTheme.colors.text.secondary]">
        {{ articleText.description }}
      </p>

      <!-- Read More -->

      <NuxtLink
        :to="props.article.link"
        :class="[
          'mt-auto inline-flex items-center pt-6 text-sm font-bold transition-all duration-300 hover:gap-3',
          siteTheme.colors.accent.text,
        ]"
      >
        {{ t('news.buttons.card') }}

        <svg
          class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />

          <path stroke-linecap="round" stroke-linejoin="round" d="m13 6 6 6-6 6" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>
