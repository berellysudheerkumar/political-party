<script setup lang="ts">
import NewsCard from '~/app/components/NewsCard.vue';
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

import BaseButton from '../../components/shared/BaseButton.vue';
import SectionHeader from '../../components/shared/SectionHeader.vue';
</script>

<template>
  <section class="py-24" :class="siteTheme.colors.background.surface">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        :eyebrow="newsContent.eyebrow"
        :title="newsContent.title"
        :description="newsContent.description"
      />

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <NewsCard v-for="article in newsContent.articles" :key="article.id" :article="article" />
      </div>

      <div class="mt-14 text-center">
        <BaseButton :text="newsContent.button.text" :to="newsContent.button.link" />
      </div>
    </div>
  </section>
</template>
