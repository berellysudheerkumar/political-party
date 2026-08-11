<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { achievementsContent } from '~/config/content/achievements';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

useSeoMeta({
  title: `${t('achievements.title')} | ${branding.name}`,
  description: t('achievements.description'),
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section :class="['py-20 sm:py-24', siteTheme.colors.background.surface]">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            :class="[
              'text-sm font-semibold tracking-widest uppercase',
              siteTheme.colors.accent.text,
            ]"
          >
            {{ t('achievements.eyebrow') }}
          </p>
          <h1 :class="['mt-4', siteTheme.typography.heading.large, siteTheme.colors.text.primary]">
            {{ t('achievements.title') }}
          </h1>
          <p
            :class="[
              'mt-6 max-w-2xl',
              siteTheme.typography.body.large,
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('achievements.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Impact by the Numbers -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <p
            :class="[
              'text-sm font-semibold tracking-widest uppercase',
              siteTheme.colors.accent.text,
            ]"
          >
            Impact by the Numbers
          </p>
          <h2 :class="['mt-4', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
            Progress that can be measured
          </h2>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="achievement in achievementsContent.achievements"
            :key="achievement.id"
            :class="[siteTheme.components.card.base, siteTheme.components.card.hover]"
          >
            <p :class="['text-4xl font-extrabold lg:text-5xl', siteTheme.colors.accent.text]">
              {{ achievement.value }}
            </p>
            <h3 :class="['mt-5 text-xl font-bold', siteTheme.colors.text.primary]">
              {{ t(`achievements.achievements.${achievement.id}.label`) }}
            </h3>
            <p :class="['mt-3', siteTheme.typography.body.small, siteTheme.colors.text.secondary]">
              {{ t(`achievements.achievements.${achievement.id}.description`) }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- How We Create Impact -->
    <section :class="['py-20 sm:py-24', siteTheme.colors.background.surface]">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p
              :class="[
                'text-sm font-semibold tracking-widest uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              How We Create Impact
            </p>
            <h2
              :class="['mt-4', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]"
            >
              Public service with people at its centre
            </h2>
          </div>

          <p :class="[siteTheme.typography.body.large, siteTheme.colors.text.secondary]">
            {{ t('achievements.closing') }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="(area, index) in achievementsContent.impactAreas"
            :key="area.id"
            :class="siteTheme.components.card.base"
          >
            <p :class="['text-sm font-bold tracking-widest', siteTheme.colors.accent.text]">
              0{{ index + 1 }}
            </p>
            <h3 :class="['mt-4 text-xl font-bold', siteTheme.colors.text.primary]">
              {{ t(`achievements.impactAreas.${area.id}.title`) }}
            </h3>
            <p :class="['mt-3', siteTheme.typography.body.normal, siteTheme.colors.text.secondary]">
              {{ t(`achievements.impactAreas.${area.id}.description`) }}
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
