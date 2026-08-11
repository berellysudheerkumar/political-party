<script setup lang="ts">
import { achievementsContent } from '~/config/content/achievements';
import { siteTheme } from '~/config/theme';
import SectionHeader from '../shared/SectionHeader.vue';

const { t } = useI18n();
</script>

<template>
  <section :class="[siteTheme.colors.background.default, 'py-24']">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <SectionHeader
        :eyebrow="t('achievements.eyebrow')"
        :title="t('achievements.title')"
        :description="t('achievements.description')"
      />

      <!-- Achievement Cards -->
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="achievement in achievementsContent.achievements"
          :key="achievement.id"
          :class="[siteTheme.components.card.base, 'text-center']"
        >
          <!-- Value -->
          <p :class="['text-4xl font-extrabold lg:text-5xl', siteTheme.colors.accent.text]">
            {{ achievement.value }}
          </p>

          <!-- Label -->
          <h3 :class="['mt-4 text-xl font-bold', siteTheme.colors.text.primary]">
            {{ t(`achievements.achievements.${achievement.id}.label`) }}
          </h3>

          <!-- Description -->
          <p :class="['mt-3 text-sm leading-6', siteTheme.colors.text.secondary]">
            {{ t(`achievements.achievements.${achievement.id}.description`) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
