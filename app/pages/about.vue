<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { aboutContent } from '~/config/content/about';
import { siteTheme } from '~/config/theme';
import MovementTimeline from '~/components/MovementTimeline.vue';

const { t } = useI18n();

useSeoMeta({
  title: `About ${t('branding.name')}`,
  description: t('about.description'),
});

/* ========================================================= */
/* IDEOLOGY CAROUSEL                                         */
/* ========================================================= */

const activeSlide = ref(0);

const totalSlides = aboutContent.foundationalVision.points.length;

let carouselInterval: ReturnType<typeof setInterval> | null = null;

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % totalSlides;
};

const previousSlide = () => {
  activeSlide.value = activeSlide.value === 0 ? totalSlides - 1 : activeSlide.value - 1;
};

const selectSlide = (index: number) => {
  activeSlide.value = index;
};

/* ========================================================= */
/* AUTOPLAY                                                  */
/* ========================================================= */

onMounted(() => {
  carouselInterval = setInterval(nextSlide, 6500);
});

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
});
</script>

<template>
  <!-- ======================================================= -->
  <!-- ONE UNIFORM BACKGROUND                                  -->
  <!-- ======================================================= -->

  <main
    :class="['min-h-screen', siteTheme.colors.background.surface, siteTheme.colors.text.primary]"
  >
    <!-- ===================================================== -->
    <!-- FOUNDATIONAL VISION                                   -->
    <!-- ===================================================== -->

    <section class="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <!-- ================================================= -->
        <!-- SECTION HEADER                                    -->
        <!-- ================================================= -->

        <div class="max-w-3xl">
          <div class="mb-6 flex items-center gap-4">
            <span :class="['h-px w-10', siteTheme.colors.accent.background]" />

            <p
              :class="[
                'text-xs font-bold tracking-[0.25em] uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              {{ t('about.foundationalVision.eyebrow') }}
            </p>
          </div>

          <h2
            :class="[
              'text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl',
              siteTheme.colors.text.primary,
            ]"
          >
            {{ t('about.foundationalVision.title') }}
          </h2>

          <p
            :class="[
              'mt-5 max-w-2xl text-base leading-8 sm:text-lg',
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('about.foundationalVision.description') }}
          </p>
        </div>

        <!-- ================================================= -->
        <!-- MOVEMENT TIMELINE                                 -->
        <!-- ================================================= -->

        <MovementTimeline />

        <!-- ================================================= -->
        <!-- PREMIUM IMAGE + CONTENT CAROUSEL                  -->
        <!-- ================================================= -->

        <div class="relative mt-14">
          <Transition name="ideology" mode="out-in">
            <article
              :key="activeSlide"
              class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
            >
              <!-- ================================================= -->
              <!-- IMAGE                                              -->
              <!-- ================================================= -->

              <div
                v-if="aboutContent.foundationalVision.points[activeSlide].image"
                class="group relative h-[360px] w-full overflow-hidden rounded-[1.75rem] bg-slate-100 sm:h-[440px] lg:h-[520px]"
              >
                <!-- Soft premium background -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100"
                />

                <!-- Full image -->
                <img
                  :src="aboutContent.foundationalVision.points[activeSlide].image"
                  :alt="t(`about.foundationalVision.points[${activeSlide}].title`)"
                  class="relative z-10 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <!-- Subtle border -->
                <div
                  class="pointer-events-none absolute inset-0 z-20 rounded-[1.75rem] border border-slate-200/80"
                />

                <!-- Bottom subtle gradient -->
                <div
                  class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/[0.06] to-transparent"
                />
              </div>

              <!-- ================================================= -->
              <!-- IMAGE PLACEHOLDER                                 -->
              <!-- ================================================= -->

              <div
                v-else
                class="flex h-[360px] w-full items-center justify-center rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 sm:h-[440px] lg:h-[520px]"
              >
                <div class="text-center">
                  <svg
                    class="mx-auto h-10 w-10 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16l4-4 4 4 4-6 4 6"
                    />

                    <rect width="18" height="18" x="3" y="3" rx="2" />
                  </svg>

                  <p class="mt-3 text-sm text-slate-400">Image can be added here</p>
                </div>
              </div>

              <!-- ================================================= -->
              <!-- CONTENT                                            -->
              <!-- ================================================= -->

              <div class="relative">
                <!-- Slide indicator -->

                <div class="mb-6 flex items-center gap-4">
                  <span :class="['h-px w-8', siteTheme.colors.accent.background]" />

                  <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {{ String(activeSlide + 1).padStart(2, '0') }}
                  </span>

                  <span class="text-xs tracking-widest text-slate-300 uppercase">
                    /
                    {{ String(totalSlides).padStart(2, '0') }}
                  </span>
                </div>

                <!-- Title -->

                <h3
                  :class="[
                    'max-w-xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl',
                    siteTheme.colors.text.primary,
                  ]"
                >
                  {{ t(`about.foundationalVision.points[${activeSlide}].title`) }}
                </h3>

                <!-- Description -->

                <p
                  :class="[
                    'mt-6 max-w-xl text-base leading-8 sm:text-lg',
                    siteTheme.colors.text.secondary,
                  ]"
                >
                  {{ t(`about.foundationalVision.points[${activeSlide}].description`) }}
                </p>
              </div>
            </article>
          </Transition>

          <!-- ================================================= -->
          <!-- DESKTOP PREVIOUS ARROW                             -->
          <!-- ================================================= -->

          <button
            type="button"
            aria-label="Previous principle"
            class="group absolute top-1/2 left-0 z-30 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:shadow-xl lg:flex"
            @click="previousSlide"
          >
            <svg
              class="h-5 w-5 text-slate-700 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <!-- ================================================= -->
          <!-- DESKTOP NEXT ARROW                                -->
          <!-- ================================================= -->

          <button
            type="button"
            aria-label="Next principle"
            class="group absolute top-1/2 right-0 z-30 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:shadow-xl lg:flex"
            @click="nextSlide"
          >
            <svg
              class="h-5 w-5 text-slate-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6 6-6" />
            </svg>
          </button>

          <!-- ================================================= -->
          <!-- PROGRESS + MOBILE CONTROLS                        -->
          <!-- ================================================= -->

          <div class="mt-10 flex items-center justify-between">
            <!-- Progress -->

            <div class="flex items-center gap-2">
              <button
                v-for="(_, index) in aboutContent.foundationalVision.points"
                :key="index"
                type="button"
                :aria-label="`Show principle ${index + 1}`"
                class="h-1 transition-all duration-500"
                :class="
                  activeSlide === index
                    ? 'w-14 bg-amber-500'
                    : 'w-7 bg-slate-300 hover:bg-slate-400'
                "
                @click="selectSlide(index)"
              />
            </div>

            <!-- Mobile arrows -->

            <div class="flex gap-2 lg:hidden">
              <!-- Previous -->

              <button
                type="button"
                aria-label="Previous principle"
                class="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white transition-all duration-300 hover:border-slate-900 hover:bg-slate-900"
                @click="previousSlide"
              >
                <svg
                  class="h-4 w-4 text-slate-700 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <!-- Next -->

              <button
                type="button"
                aria-label="Next principle"
                class="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white transition-all duration-300 hover:border-slate-900 hover:bg-slate-900"
                @click="nextSlide"
              >
                <svg
                  class="h-4 w-4 text-slate-700 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================== -->
    <!-- WHAT DRIVES US                                        -->
    <!-- ===================================================== -->

    <section class="pb-24 sm:pb-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <!-- Heading -->

          <div>
            <div class="mb-5 flex items-center gap-4">
              <span :class="['h-px w-10', siteTheme.colors.accent.background]" />

              <p
                :class="[
                  'text-xs font-bold tracking-[0.25em] uppercase',
                  siteTheme.colors.accent.text,
                ]"
              >
                {{ t('about.whatDrivesUs') }}
              </p>
            </div>

            <h2
              :class="[
                'max-w-xl text-3xl leading-tight font-bold sm:text-4xl',
                siteTheme.colors.text.primary,
              ]"
            >
              {{ t('about.driveText1') }}
            </h2>
          </div>

          <!-- Description -->

          <p :class="['max-w-3xl text-lg leading-9 sm:text-xl', siteTheme.colors.text.secondary]">
            {{ t('about.driveText2') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ===================================================== -->
    <!-- VISION                                                -->
    <!-- ===================================================== -->

    <section class="pb-24 sm:pb-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          class="relative overflow-hidden rounded-[1.75rem] border border-slate-200 px-7 py-14 sm:px-12 sm:py-18 lg:px-20"
        >
          <!-- Decorative accent -->

          <div
            :class="[
              'absolute -right-32 -bottom-32 h-80 w-80 rounded-full opacity-[0.06] blur-3xl',
              siteTheme.colors.accent.background,
            ]"
          />

          <div class="relative max-w-4xl">
            <p
              :class="[
                'mb-5 text-xs font-bold tracking-[0.25em] uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              {{ t('about.vision.eyebrow') }}
            </p>

            <h2
              :class="[
                'text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl',
                siteTheme.colors.text.primary,
              ]"
            >
              {{ t('about.vision.title') }}
            </h2>

            <p
              :class="[
                'mt-6 max-w-3xl text-base leading-8 sm:text-lg',
                siteTheme.colors.text.secondary,
              ]"
            >
              {{ t('about.vision.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ========================================================= */
/* IDEOLOGY CAROUSEL TRANSITION                              */
/* ========================================================= */

.ideology-enter-active,
.ideology-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.ideology-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.ideology-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
