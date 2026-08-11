<script setup lang="ts">
import { ref } from 'vue';
import NewsModal from '~/components/NewsModal.vue';
import BaseButton from '~/components/shared/BaseButton.vue';
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

const selectedArticle = ref<(typeof newsContent.articles)[number] | null>(null);

const openArticle = (article: (typeof newsContent.articles)[number]) => {
  selectedArticle.value = article;
};

const closeArticle = () => {
  selectedArticle.value = null;
};
</script>

<template>
  <main
    :class="['min-h-screen', siteTheme.colors.background.surface, siteTheme.colors.text.primary]"
  >
    <!-- ===================================================== -->
    <!-- NEWS                                                   -->
    <!-- ===================================================== -->

    <section class="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <!-- Header -->

        <div class="max-w-3xl">
          <div class="mb-5 flex items-center gap-4">
            <span :class="['h-px w-10', siteTheme.colors.accent.background]" />

            <p
              :class="[
                'text-xs font-bold tracking-[0.25em] uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              {{ t('news.eyebrow') }}
            </p>
          </div>

          <h1
            :class="[
              'text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl',
              siteTheme.colors.text.primary,
            ]"
          >
            {{ t('news.title') }}
          </h1>

          <p
            :class="[
              'mt-5 max-w-2xl text-base leading-8 sm:text-lg',
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('news.description') }}
          </p>
        </div>

        <!-- ================================================= -->
        <!-- FEATURED ARTICLES                                  -->
        <!-- ================================================= -->

        <div class="mt-12 space-y-8 sm:mt-14 sm:space-y-10 lg:mt-16 lg:space-y-12">
          <article
            v-for="(article, index) in newsContent.articles"
            :key="article.id"
            class="group grid items-center gap-8 overflow-hidden rounded-[1.75rem] border border-slate-200/80 p-4 transition-all duration-500 hover:border-slate-300 hover:shadow-xl sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-8"
          >
            <!-- ================================================= -->
            <!-- IMAGE                                               -->
            <!-- ================================================= -->

            <div
              :class="[
                'overflow-hidden rounded-2xl',
                index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1',
              ]"
            >
              <div class="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                  :src="article.image"
                  :alt="t(`news.articles.${article.translationKey}.title`)"
                  class="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[340px] lg:h-[400px]"
                />

                <!-- Image overlay -->

                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>

            <!-- ================================================= -->
            <!-- CONTENT                                             -->
            <!-- ================================================= -->

            <div
              :class="[
                index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2',
                'px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8',
              ]"
            >
              <!-- Category -->

              <div class="flex items-center gap-3">
                <span :class="['h-px w-8', siteTheme.colors.accent.background]" />

                <span
                  :class="[
                    'text-xs font-bold tracking-[0.18em] uppercase',
                    siteTheme.colors.accent.text,
                  ]"
                >
                  {{ t(`news.articles.${article.translationKey}.category`) }}
                </span>
              </div>

              <!-- Date -->

              <time :class="['mt-4 block text-sm font-medium', siteTheme.colors.text.muted]">
                {{ t(`news.articles.${article.translationKey}.date`) }}
              </time>

              <!-- Title -->

              <h2
                :class="[
                  'mt-4 max-w-2xl text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl lg:text-4xl',
                  siteTheme.colors.text.primary,
                ]"
              >
                {{ t(`news.articles.${article.translationKey}.title`) }}
              </h2>

              <!-- Description -->

              <p
                :class="[
                  'mt-5 max-w-2xl text-base leading-8 sm:text-lg',
                  siteTheme.colors.text.secondary,
                ]"
              >
                {{ t(`news.articles.${article.translationKey}.description`) }}
              </p>

              <!-- Location -->

              <p :class="['mt-4 text-sm font-medium', siteTheme.colors.text.muted]">
                {{ t(`news.articles.${article.translationKey}.location`) }}
              </p>

              <!-- Read Story -->

              <button
                type="button"
                :class="[
                  siteTheme.components.button.base,
                  siteTheme.components.button.primary,
                  'mt-7 rounded-full px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-0.5',
                ]"
                @click="openArticle(article)"
              >
                {{ t('news.buttons.readArticle') }}

                <span
                  class="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===================================================== -->
    <!-- ARTICLE MODAL                                         -->
    <!-- ===================================================== -->

    <NewsModal :article="selectedArticle" @close="closeArticle" />
  </main>
</template>
