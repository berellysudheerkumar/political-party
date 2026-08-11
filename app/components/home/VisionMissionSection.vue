<template>
  <section :class="['py-24', siteTheme.colors.background.default]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <SectionHeader
        :eyebrow="visionMissionContent.eyebrow"
        :title="visionMissionContent.title"
        :description="visionMissionContent.description"
        align="center"
      />

      <!-- Mission & Vision Cards -->
      <div class="mt-16 grid gap-8 lg:grid-cols-2">
        <!-- Mission Card -->
        <article
          :class="[
            siteTheme.components.card.base,
            '!rounded-3xl !p-8 sm:!p-10', // Overriding the default card padding/radius for a larger featured look
          ]"
        >
          <!-- Icon -->
          <div
            :class="[
              'mb-8 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm',
              siteTheme.colors.accent.background,
              siteTheme.colors.text.inverse,
            ]"
          >
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6l1 1h8l-3 6 3 6h-8l-1-1H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>

          <h3 :class="['text-2xl font-bold', siteTheme.colors.text.primary]">
            {{ visionMissionContent.mission.title }}
          </h3>

          <p :class="['mt-4 text-lg leading-relaxed', siteTheme.colors.text.secondary]">
            {{ visionMissionContent.mission.description }}
          </p>
        </article>

        <!-- Vision Card -->
        <article :class="[siteTheme.components.card.base, '!rounded-3xl !p-8 sm:!p-10']">
          <!-- Icon -->
          <div
            :class="[
              'mb-8 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm',
              siteTheme.colors.accent.background,
              siteTheme.colors.text.inverse,
            ]"
          >
            <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87
                1.18 6.88L12 17.77l-6.18 3.25L7
                14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>

          <h3 :class="['text-2xl font-bold', siteTheme.colors.text.primary]">
            {{ visionMissionContent.vision.title }}
          </h3>

          <p :class="['mt-4 text-lg leading-relaxed', siteTheme.colors.text.secondary]">
            {{ visionMissionContent.vision.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { visionMissionContent } from '~/config/content/vision';
import { siteTheme } from '~/config/theme';
</script>
