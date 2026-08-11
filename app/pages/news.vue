<script setup>
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';
const selectedArticle = ref(null);
const { t } = useI18n();

function openArticle(article) {
  selectedArticle.value = article;
}

function closeArticle() {
  selectedArticle.value = null;
}
</script>

<template>
  <section class="py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="max-w-3xl">
        <p
          class="text-sm font-semibold tracking-widest uppercase"
          :class="siteTheme.colors.text.primary"
        >
          {{ t('news.eyebrow') }}
        </p>

        <h2
          class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          :class="siteTheme.colors.text.primary"
        >
          {{ t('news.title') }}
        </h2>

        <p class="mt-5 text-lg leading-8" :class="siteTheme.colors.text.secondary">
          {{ t('news.description') }}
        </p>
      </div>

      <!-- Featured News Articles -->
      <div class="mt-14 space-y-12 sm:mt-16 sm:space-y-16">
        <article
          v-for="(article, index) in newsContent.articles"
          :key="article.id"
          class="grid items-center gap-8 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-8"
        >
          <!-- IMAGE -->
          <div :class="[index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1']">
            <div class="overflow-hidden rounded-2xl">
              <img
                :src="article.image"
                :alt="t(`news.articles.${article.id}.title`)"
                class="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[360px]"
              />
            </div>
          </div>

          <!-- CONTENT -->
          <div
            :class="[
              index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2',
              'px-2 py-6 sm:px-4 sm:py-8 lg:px-8 lg:py-10',
            ]"
          >
            <!-- CATEGORY -->
            <span
              class="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold tracking-[0.15em] text-blue-700 uppercase"
            >
              {{ t(`news.articles.${article.id}.category`) }}
            </span>

            <!-- DATE -->
            <p class="mt-5 text-sm font-medium text-gray-500">
              {{ t(`news.articles.${article.id}.date`) }}
            </p>

            <!-- TITLE -->
            <h3
              class="mt-4 max-w-2xl text-2xl leading-[1.15] font-black tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
            >
              {{ t(`news.articles.${article.id}.title`) }}
            </h3>

            <!-- DESCRIPTION -->
            <p class="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              {{ t(`news.articles.${article.id}.description`) }}
            </p>

            <!-- READ FULL STORY -->
            <button
              type="button"
              @click="openArticle(article)"
              :class="[
                siteTheme.components.button.base,
                siteTheme.components.button.primary.background,
                siteTheme.components.button.primary.hover,
                'mt-7 rounded-full px-7 py-3.5 font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md',
              ]"
            >
              {{ t('news.buttons.featured') }}

              <span class="ml-2">→</span>
            </button>
          </div>
        </article>
      </div>

      <!-- View All News -->
      <div class="mt-14 text-center">
        <BaseButton :text="t('news.buttons.text')" to="/news" :variant="'primary'" />
      </div>
    </div>

    <!-- Modal -->
    <NewsModal :article="selectedArticle" @close="closeArticle" />
  </section>
</template>
