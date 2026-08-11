<script setup lang="ts">
import { aboutContent } from '~/config/content/about';
import { branding } from '~/config/content/brand';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

useSeoMeta({
  title: `About ${t('branding.name')}`,
  description: t('about.description'),
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
            {{ t('about.eyebrow') }}
          </p>

          <h1 :class="['mt-4', siteTheme.typography.heading.large, siteTheme.colors.text.primary]">
            {{ t('about.title') }}
          </h1>

          <p
            :class="[
              'mt-6 max-w-2xl',
              siteTheme.typography.body.large,
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('about.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Drive & Highlights Section -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <!-- Text Content -->
          <div>
            <p
              :class="[
                'text-sm font-semibold tracking-widest uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              {{ t('about.whatDrivesUs') }}
            </p>
            <h2
              :class="['mt-4', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]"
            >
              {{ t('about.driveText1') }}
            </h2>
            <p :class="['mt-6', siteTheme.typography.body.normal, siteTheme.colors.text.secondary]">
              {{ t('about.driveText2') }}
            </p>
          </div>

          <!-- Highlight Cards -->
          <div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <article
              v-for="(item, index) in aboutContent.highlights"
              :key="item.title"
              :class="siteTheme.components.card.base"
            >
              <div
                :class="[
                  'flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold shadow-sm',
                  siteTheme.colors.accent.background,
                  siteTheme.colors.text.inverse,
                ]"
              >
                ✓
              </div>
              <h3 :class="['mt-5 text-xl font-bold', siteTheme.colors.text.primary]">
                {{ t(`about.highlights[${index}].title`) }}
              </h3>
              <p
                :class="['mt-3', siteTheme.typography.body.normal, siteTheme.colors.text.secondary]"
              >
                {{ t(`about.highlights[${index}].description`) }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 :class="[siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
          {{ t('about.cta.title') }}
        </h2>
        <p
          :class="[
            'mx-auto mt-5 max-w-2xl',
            siteTheme.typography.body.large,
            siteTheme.colors.text.secondary,
          ]"
        >
          {{ t('about.cta.description') }}
        </p>
        <NuxtLink
          to="/contact"
          :class="[
            'mt-8 inline-flex',
            siteTheme.components.button.base,
            siteTheme.components.button.primary,
          ]"
        >
          {{ t('buttons.joinUs') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
