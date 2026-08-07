<script setup lang="ts">
import { ref } from 'vue';
import NewsCard from '~/app/components/NewsCard.vue';
import { newsContent } from '~/config/content/news';
import { siteTheme } from '~/config/theme';

import BaseButton from '../../components/shared/BaseButton.vue';
import SectionHeader from '../../components/shared/SectionHeader.vue';

const carouselRef = ref<HTMLElement | null>(null);

// Updated scroll logic: reads the exact width of the container
// so it seamlessly snaps exactly one full-width card over.
const scroll = (direction: 'left' | 'right') => {
  if (carouselRef.value) {
    const scrollAmount = carouselRef.value.clientWidth;
    carouselRef.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
};
</script>

<template>
  <section class="relative overflow-hidden py-24" :class="siteTheme.colors.background.surface">
    <!-- Top Header & Desktop Controls -->
    <div
      class="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between lg:px-8"
    >
      <div class="max-w-2xl">
        <SectionHeader
          :eyebrow="newsContent.eyebrow"
          :title="newsContent.title"
          :description="newsContent.description"
        />
      </div>

      <!-- Navigation Arrows -->
      <div class="mb-2 hidden items-center gap-3 md:flex">
        <button
          @click="scroll('left')"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/50 text-gray-600 backdrop-blur-sm transition-all hover:bg-white hover:text-blue-600 hover:shadow-md focus:outline-none"
          aria-label="Previous article"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="scroll('right')"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/50 text-gray-600 backdrop-blur-sm transition-all hover:bg-white hover:text-blue-600 hover:shadow-md focus:outline-none"
          aria-label="Next article"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Full Width Carousel Area -->
    <div class="relative mt-12 w-full">
      <!-- Light Semi-Transparent Background Strip (Edge-to-Edge) -->
      <div
        class="pointer-events-none absolute inset-0 z-0 border-y border-black/[0.05] bg-black/[0.02] backdrop-blur-xl"
      />

      <!-- Centered Container for the Track -->
      <div class="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <!-- Scrollable Track -->
        <div
          ref="carouselRef"
          class="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
        >
          <!-- Card Wrapper set to w-full to take up 100% of the container width -->
          <div
            v-for="article in newsContent?.articles"
            :key="article.id"
            class="w-full shrink-0 snap-center transition-transform duration-300"
          >
            <!-- Your existing card component -->
            <NewsCard :article="article" />
          </div>
        </div>
      </div>
    </div>

    <!-- Centered CTA Button -->
    <div class="relative z-10 mx-auto mt-8 max-w-7xl px-6 text-center lg:px-8">
      <BaseButton :text="newsContent.button.text" :to="newsContent.button.link" />
    </div>
  </section>
</template>

<style scoped>
/* Utility to hide the scrollbar while keeping native swipe/scroll functionality */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
