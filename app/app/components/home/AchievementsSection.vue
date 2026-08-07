<script setup lang="ts">
import { achievementsContent } from '~/config/content/achievements';
import { siteTheme } from '~/config/theme';

import SectionHeader from '../../components/shared/SectionHeader.vue';
</script>

<template>
  <section :class="siteTheme.colors.background.default" class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <SectionHeader
        :eyebrow="achievementsContent.eyebrow"
        :title="achievementsContent.title"
        :description="achievementsContent.description"
      />

      <!-- Achievement Cards -->
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="achievement in achievementsContent.achievements"
          :key="achievement.id"
          :class="[
            siteTheme.components.card.base,
            siteTheme.components.card.background,
            siteTheme.components.card.border,
            siteTheme.components.card.shadow,
            siteTheme.components.card.hover,
            siteTheme.components.card.padding,
            'text-center',
          ]"
        >
          <!-- Value -->
          <p class="text-4xl font-extrabold lg:text-5xl" :class="siteTheme.colors.primary.text">
            {{ achievement.value }}
          </p>

          <!-- Label -->
          <h3 class="mt-4 text-xl font-bold" :class="siteTheme.colors.text.primary">
            {{ achievement.label }}
          </h3>

          <!-- Description -->
          <p class="mt-3 text-sm leading-6" :class="siteTheme.colors.text.secondary">
            {{ achievement.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
