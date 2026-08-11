<script setup lang="ts">
import { aboutContent } from '~/config/content/about';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();
</script>

<template>
  <section
    :class="[
      'py-20 sm:py-24 lg:py-28',
      siteTheme.colors.background.surface,
    ]"
  >
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <!-- ================================================= -->
        <!-- IMAGE                                              -->
        <!-- ================================================= -->

        <div class="relative">
          <!-- Theme Accent Glow -->
          <div
            :class="[
              'absolute -top-8 -left-8 h-40 w-40 rounded-full opacity-[0.12] blur-3xl',
              siteTheme.colors.accent.background,
            ]"
            aria-hidden="true"
          />

          <!-- Image Frame -->
          <div
            :class="[
              'relative overflow-hidden rounded-[1.75rem] border shadow-xl',
              siteTheme.colors.border,
            ]"
          >
            <img
              :src="aboutContent.image"
              :alt="t('about.title')"
              class="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            <!-- Subtle Image Overlay -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        <!-- ================================================= -->
        <!-- CONTENT                                             -->
        <!-- ================================================= -->

        <div>
          <!-- Eyebrow -->
          <div class="mb-5 flex items-center gap-4">
            <span
              :class="[
                'h-px w-10',
                siteTheme.colors.accent.background,
              ]"
              aria-hidden="true"
            />

            <p
              :class="[
                'text-xs font-bold tracking-[0.25em] uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              {{ t('about.eyebrow') }}
            </p>
          </div>

          <!-- Title -->
          <h1
            :class="[
              'max-w-2xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-telugu',
              siteTheme.colors.text.primary,
            ]"
          >
            {{ t('about.title') }}
          </h1>

          <!-- Description -->
          <p
            :class="[
              'mt-6 max-w-2xl text-base leading-8 sm:text-lg font-telugu',
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('about.description') }}
          </p>

          <!-- Highlights -->
          <div class="mt-8 space-y-6">
            <div
              v-for="(item, index) in aboutContent.highlights"
              :key="item.id ?? index"
              class="flex items-start gap-4"
            >
              <!-- Clean Professional Check Icon Box -->
              <div
                :class="[
                  'mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl shadow-sm',
                  siteTheme.colors.accent.background,
                  siteTheme.colors.text.inverse,
                ]"
                aria-hidden="true"
              >
                <svg
                  class="h-4 w-4 stroke-[2.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <!-- Highlight Content -->
              <div>
                <h3
                  :class="[
                    'font-bold leading-6 text-base font-telugu',
                    siteTheme.colors.text.primary,
                  ]"
                >
                  {{ t(`about.highlights[${index}].title`) }}
                </h3>

                <p
                  :class="[
                    'mt-1 text-sm leading-relaxed font-telugu opacity-90',
                    siteTheme.colors.text.secondary,
                  ]"
                >
                  {{ t(`about.highlights[${index}].description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>