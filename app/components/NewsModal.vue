<script setup lang="ts">
import { computed } from 'vue';
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

const props = defineProps<{
  article: (typeof newsContent.articles)[number] | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const articleText = computed(() => {
  if (!props.article) {
    return null;
  }

  const key = `news.articles.${props.article.translationKey}`;

  return {
    category: t(`${key}.category`),
    title: t(`${key}.title`),
    date: t(`${key}.date`),
    description: t(`${key}.description`),
    content: t(`${key}.content`),
    location: t(`${key}.location`),
  };
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="props.article && articleText"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-6"
        @click.self="emit('close')"
      >
        <!-- MODAL -->
        <div
          :class="[
            'relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] border shadow-2xl',
            siteTheme.colors.background.surface,
            siteTheme.colors.border,
          ]"
        >
          <!-- CLOSE BUTTON -->
          <button
            type="button"
            aria-label="Close article"
            class="group absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/70"
            @click="emit('close')"
          >
            <svg
              class="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <!-- IMAGE -->
          <div class="relative h-64 w-full shrink-0 overflow-hidden sm:h-80">
            <img
              :src="props.article.image"
              :alt="articleText.title"
              class="h-full w-full object-cover"
            />

            <!-- Image gradient -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            />

            <!-- Category over image -->
            <div class="absolute bottom-5 left-6 sm:left-8">
              <span
                :class="[
                  'inline-flex rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-md',
                  siteTheme.colors.accent.background,
                  siteTheme.colors.text.inverse,
                ]"
              >
                {{ articleText.category }}
              </span>
            </div>
          </div>

          <!-- SCROLLABLE CONTENT -->
          <div class="overflow-y-auto" :class="siteTheme.colors.background.surface">
            <div class="p-6 sm:p-8 lg:p-10">
              <!-- DATE + LOCATION -->
              <div
                :class="[
                  'flex flex-wrap items-center gap-x-5 gap-y-2 text-sm',
                  siteTheme.colors.text.muted,
                ]"
              >
                <time>
                  {{ articleText.date }}
                </time>

                <span
                  v-if="
                    articleText.location &&
                    articleText.location !==
                      `news.articles.${props.article?.translationKey}.location`
                  "
                  class="flex items-center gap-2"
                >
                  <span :class="['h-1 w-1 rounded-full', siteTheme.colors.accent.background]" />
                  {{ articleText.location }}
                </span>
              </div>

              <!-- TITLE -->
              <h2
                :class="[
                  'mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl',
                  siteTheme.colors.text.primary,
                ]"
              >
                {{ articleText.title }}
              </h2>

              <!-- DESCRIPTION -->
              <p :class="['mt-5 text-base leading-8 sm:text-lg', siteTheme.colors.text.secondary]">
                {{ articleText.description }}
              </p>

              <!-- DIVIDER -->
              <div :class="['my-7 h-px w-full', siteTheme.colors.border]" />

              <!-- FULL CONTENT -->
              <p
                v-if="
                  articleText.content &&
                  articleText.content !== `news.articles.${props.article?.translationKey}.content`
                "
                :class="['text-base leading-8 sm:text-lg', siteTheme.colors.text.secondary]"
              >
                {{ articleText.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
