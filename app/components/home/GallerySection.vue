<script setup lang="ts">
import { ref, computed } from 'vue';
import { siteTheme } from '~/config/theme';
import { galleryContent } from '~/config/content/gallery.generated';

// Track the current active slide
const activeIndex = ref(0);

const next = () => {
  if (galleryContent?.items) {
    activeIndex.value = (activeIndex.value + 1) % galleryContent.items.length;
  }
};

const prev = () => {
  if (galleryContent?.items) {
    activeIndex.value =
      (activeIndex.value - 1 + galleryContent.items.length) % galleryContent.items.length;
  }
};

// Get the currently active image to use as a dynamic ambient background
// Get the currently active image to use as a dynamic ambient background
const activeImage = computed(() => {
  const items = galleryContent?.items;

  if (!items || items.length === 0) return '';

  // Safely access the index and fallback to an empty string if undefined
  return items[activeIndex.value]?.image || '';
});
</script>

<template>
  <section :class="['relative overflow-hidden py-24 md:py-32', siteTheme.colors.background.dark]">
    <!-- Dynamic Ambient Background (Fills the section with a glowing, blurred version of the active image) -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Transition name="bg-fade">
        <img
          :key="activeImage"
          :src="activeImage"
          class="absolute inset-0 h-full w-full scale-125 object-cover opacity-20 blur-[100px] saturate-200 transition-all duration-1000"
          alt=""
        />
      </Transition>
      <!-- Theme-agnostic dark gradient overlay to ensure the background isn't too distracting -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
    </div>

    <!-- Section Header -->
    <div class="relative z-20 mx-auto mb-16 max-w-7xl px-6 text-center lg:px-8">
      <h2
        :class="[
          'mb-3 text-xs font-black tracking-[0.2em] uppercase opacity-80',
          siteTheme.colors.accent.text,
        ]"
      >
        {{ galleryContent?.eyebrow || 'Campaign Gallery' }}
      </h2>
      <p
        :class="[
          'text-4xl font-extrabold tracking-tight md:text-5xl',
          siteTheme.colors.text.inverse,
        ]"
      >
        Moments in Motion
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="relative z-10 mx-auto max-w-[100vw] px-4">
      <!-- 3D Perspective Track -->
      <div
        class="relative flex h-[500px] w-full items-center justify-center [perspective:1200px] md:h-[650px]"
      >
        <template v-for="(item, index) in galleryContent?.items" :key="item.id">
          <!-- Cinematic Card Wrapper -->
          <div
            class="absolute top-0 bottom-0 w-[80vw] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] sm:w-[400px] md:w-[500px]"
            :class="index === activeIndex ? 'z-30 cursor-default' : 'z-10 cursor-pointer'"
            @click="index !== activeIndex && (activeIndex = index)"
            :style="{
              left: '50%',
              transform: `
                translateX(calc(-50% + ${(index - activeIndex) * 110}%))
                scale(${1 - Math.min(Math.abs(index - activeIndex) * 0.15, 0.4)})
              `,
              opacity: Math.abs(index - activeIndex) > 1 ? 0 : 1,
              filter: `blur(${Math.min(Math.abs(index - activeIndex) * 8, 12)}px) brightness(${index === activeIndex ? '1' : '0.5'})`,
              pointerEvents: Math.abs(index - activeIndex) > 1 ? 'none' : 'auto',
            }"
          >
            <!-- Premium Card Styling -->
            <div
              class="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
              :class="{ 'shadow-2xl ring-2 ring-white/30': index === activeIndex }"
            >
              <!-- Main Image -->
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full bg-black object-contain transition-transform duration-[2000ms] ease-out"
                :class="{ 'scale-105': index === activeIndex }"
              />

              <!-- Rich Gradient Overlay (Theme agnostic) -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700"
                :class="index === activeIndex ? 'opacity-100' : 'opacity-0'"
              />

              <!-- Floating Title -->
              <div class="absolute right-0 bottom-0 left-0 overflow-hidden p-8 md:p-10">
                <div
                  class="transition-all delay-100 duration-700"
                  :class="
                    index === activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  "
                >
                  <!-- Accent Line -->
                  <div
                    :class="['mb-4 h-1 w-12 rounded-full', siteTheme.colors.accent.background]"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- Glassmorphic Floating Controls -->
      <div class="relative z-40 mt-12 flex items-center justify-center gap-6">
        <button
          @click="prev"
          class="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] focus:outline-none"
          aria-label="Previous image"
        >
          <svg
            class="h-6 w-6 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Elegant Indicator Dots -->
        <div class="flex gap-2">
          <div
            v-for="(item, index) in galleryContent?.items"
            :key="'dot-' + index"
            :class="[
              'h-1.5 rounded-full transition-all duration-500',
              index === activeIndex
                ? ['w-8', siteTheme.colors.accent.background]
                : 'w-1.5 bg-white/20',
            ]"
          />
        </div>

        <button
          @click="next"
          class="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] focus:outline-none"
          aria-label="Next image"
        >
          <svg
            class="h-6 w-6 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
  </section>
</template>

<style scoped>
/* Crossfade transition for the ambient background image */
.bg-fade-enter-active,
.bg-fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.bg-fade-enter-from,
.bg-fade-leave-to {
  opacity: 0;
}
</style>
