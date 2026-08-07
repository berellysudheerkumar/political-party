<script setup>
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';
const selectedArticle = ref(null);

function openArticle(article) {
  selectedArticle.value = article;
}

function closeArticle() {
  selectedArticle.value = null;
}
</script>

<template>
  <section class="py-20 sm:py-28 lg:py-36">
    <div class="space-y-16">
      <article
        v-for="(article, index) in newsContent.articles.slice(0, 4)"
        :key="article.id"
        class="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm lg:grid-cols-2 lg:p-8"
      >
        <!-- IMAGE -->

        <div :class="[index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1']">
          <img
            :src="article.image"
            :alt="article.title"
            class="h-[300px] w-full rounded-2xl object-cover lg:h-[360px]"
          />
        </div>

        <!-- CONTENT -->

        <div :class="[index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2']">
          <span class="text-xs font-bold tracking-[0.2em] text-blue-700 uppercase">
            {{ article.category }}
          </span>

          <p class="mt-3 text-sm text-gray-500">
            {{ article.date }}
          </p>

          <h3 class="mt-4 text-2xl leading-tight font-black text-gray-900 lg:text-3xl">
            {{ article.title }}
          </h3>

          <p class="mt-4 leading-7 text-gray-600">
            {{ article.description }}
          </p>

          <button
            @click="openArticle(article)"
            :class="[
              siteTheme.components.button.base,
              siteTheme.components.button.primary.background,
              siteTheme.components.button.primary.hover,
              'mt-6 rounded-full',
            ]"
          >
            {{ newsContent.buttons.featured }}
          </button>
        </div>
      </article>
    </div>
  </section>

  <NewsModal :article="selectedArticle" @close="closeArticle" />
</template>
