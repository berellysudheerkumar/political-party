<script setup lang="ts">
import { newsContent } from '~/config/content/news';

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

  const key = `news.articles.${props.article.id}`;

  return {
    category: t(`${key}.category`),
    title: t(`${key}.title`),
    date: t(`${key}.date`),
    description: t(`${key}.description`),
    content: t(`${key}.content`),
  };
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.article && articleText"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      @click.self="emit('close')"
    >
      <div
        class="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <!-- Close -->
        <button
          type="button"
          class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white"
          @click="emit('close')"
        >
          ×
        </button>

        <!-- Image -->
        <img
          :src="props.article.image"
          :alt="articleText.title"
          class="h-64 w-full object-cover sm:h-80"
        />

        <!-- Content -->
        <div class="p-6 sm:p-8 lg:p-10">
          <span
            class="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold tracking-wider text-blue-700 uppercase"
          >
            {{ articleText.category }}
          </span>

          <p class="mt-5 text-sm text-gray-500">
            {{ articleText.date }}
          </p>

          <h2 class="mt-3 text-3xl leading-tight font-black text-gray-900">
            {{ articleText.title }}
          </h2>

          <p class="mt-5 text-lg leading-8 text-gray-600">
            {{ articleText.description }}
          </p>

          <div class="my-7 h-px bg-gray-200" />

          <p class="leading-8 text-gray-700">
            {{ articleText.content }}
          </p>

          <button
            type="button"
            class="mt-8 rounded-full bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
            @click="emit('close')"
          >
            {{ t('news.buttons.close') }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
