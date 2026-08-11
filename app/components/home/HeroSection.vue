<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { heroContent } from '~/config/content/hero';
import { siteTheme } from '~/config/theme';
import BaseButton from '~/components/shared/BaseButton.vue';

const isLoaded = ref(false);
const activeBackground = ref(0);

const { t } = useI18n();

const backgroundImages = [
  heroContent.campaignImages.background,
  heroContent.campaignImages.primary,
  heroContent.campaignImages.secondary,
];

let carouselInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);

  carouselInterval = setInterval(() => {
    activeBackground.value = (activeBackground.value + 1) % backgroundImages.length;
  }, 6000);
});

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
});
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden pt-24 text-white"
    :class="siteTheme.colors.background"
  >
    <!-- ========================================================= -->
    <!-- FULL-SCREEN BACKGROUND CAROUSEL -->
    <!-- ========================================================= -->
    <div class="absolute inset-0 z-0">
      <TransitionGroup name="hero-background">
        <img
          v-for="(image, index) in backgroundImages"
          v-show="activeBackground === index"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          class="absolute inset-0 h-full w-full object-cover object-center"
        />
      </TransitionGroup>

      <!-- Strong cinematic overlay -->
      <div class="absolute inset-0 bg-slate-950/65" />

      <!-- Slight horizontal depth -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/40 to-slate-950/20"
      />

      <!-- Bottom depth -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20"
      />

      <!-- Very subtle amber atmosphere -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.08),transparent_55%)]"
      />
    </div>

    <!-- ========================================================= -->
    <!-- MAIN CONTENT -->
    <!-- ========================================================= -->
    <div
      class="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12"
    >
      <div
        class="w-full transition-all duration-1000 ease-out"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <!-- ===================================================== -->
        <!-- BADGE -->
        <!-- ===================================================== -->
        <div
          class="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-slate-950/70 px-5 py-2.5 shadow-lg backdrop-blur-md"
        >
          <span class="relative flex h-3 w-3">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60"
            />
            <span class="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
          </span>

          <span class="text-xs font-extrabold tracking-[0.2em] text-amber-300 uppercase">
            {{ t('heroSection.badge') }}
          </span>
        </div>

        <!-- ===================================================== -->
        <!-- HERO HEADING -->
        <!-- ===================================================== -->
        <h1
          class="font-telugu max-w-6xl text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          {{ t('heroSection.sloganLine1') }}

          <br />

          <span
            class="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent"
          >
            {{ t('heroSection.sloganHighlight') }}
          </span>
        </h1>

        <!-- ===================================================== -->
        <!-- LEADER SUBTITLE -->
        <!-- ===================================================== -->
        <p
          class="font-telugu mt-7 max-w-4xl text-lg font-bold tracking-wide text-amber-300 sm:text-xl lg:text-2xl"
        >
          {{ t('heroSection.leaderSubtitle') }}
        </p>

        <!-- ===================================================== -->
        <!-- DESCRIPTION -->
        <!-- ===================================================== -->
        <p
          class="font-telugu mt-5 max-w-4xl text-base leading-8 font-medium text-slate-200 sm:text-lg lg:text-xl"
        >
          {{ t('heroSection.description') }}
        </p>

        <!-- ===================================================== -->
        <!-- ACTIONS -->
        <!-- ===================================================== -->
        <div class="mt-10 flex flex-wrap gap-5">
          <BaseButton
            :text="t('buttons.joinMovement')"
            to="/contact"
            variant="primary"
            class="rounded-full border-none bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-3 font-bold text-slate-950 shadow-[0_0_40px_rgba(217,119,6,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(217,119,6,0.5)]"
          />

          <BaseButton
            :text="t('buttons.aboutGoals')"
            to="/about"
            variant="secondary"
            class="rounded-full border border-white/25 bg-slate-950/70 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-slate-800/80"
          />
        </div>

        <!-- ===================================================== -->
        <!-- CAROUSEL INDICATORS -->
        <!-- ===================================================== -->
        <div class="mt-12 flex items-center gap-2">
          <button
            v-for="(_, index) in backgroundImages"
            :key="index"
            type="button"
            :aria-label="`Show background ${index + 1}`"
            class="h-1.5 rounded-full transition-all duration-500"
            :class="
              activeBackground === index ? 'w-10 bg-amber-400' : 'w-5 bg-white/30 hover:bg-white/50'
            "
            @click="activeBackground = index"
          />
        </div>
      </div>
    </div>

    <!-- ========================================================= -->
    <!-- BOTTOM WAVE -->
    <!-- ========================================================= -->
    <div class="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
      <svg
        class="relative block h-[70px] w-full"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0V120H1200V0C1000,100,500,100,0,0Z" class="fill-amber-50" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
/* ========================================================= */
/* NATURAL CROSSFADE CAROUSEL                                */
/* ========================================================= */

.hero-background-enter-active,
.hero-background-leave-active {
  transition:
    opacity 2s ease-in-out,
    transform 7s ease-out;
}

.hero-background-enter-from {
  opacity: 0;
  transform: scale(1.04);
}

.hero-background-leave-to {
  opacity: 0;
  transform: scale(1);
}

.hero-background-enter-to,
.hero-background-leave-from {
  opacity: 1;
}
</style>
