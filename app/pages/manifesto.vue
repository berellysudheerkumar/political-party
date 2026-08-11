<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { manifestoContent } from '~/config/content/manifesto';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

useSeoMeta({
  title: `Manifesto | ${branding.name}`,
  description: t('manifesto.description'),
});
</script>

<template>
  <div>
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p
              class="text-sm font-semibold tracking-widest uppercase"
              :class="siteTheme.colors.accent.text"
            >
              {{ t('manifesto.commitment.eyebrow') }}
            </p>

            <h2
              class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              :class="siteTheme.colors.text.primary"
            >
              {{ t('manifesto.commitment.title') }}
            </h2>
          </div>

          <p class="text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ t('manifesto.commitment.introduction') }}
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(priority, index) in manifestoContent.priorities"
            :key="priority.id"
            :class="siteTheme.components.card.base"
          >
            <p class="text-sm font-bold tracking-widest" :class="siteTheme.colors.accent.text">
              {{ String(index + 1).padStart(2, '0') }}
            </p>

            <h3 class="mt-4 text-xl font-bold" :class="siteTheme.colors.text.primary">
              {{ t(`manifesto.priorities.${priority.id}.title`) }}
            </h3>

            <p class="mt-3 leading-7" :class="siteTheme.colors.text.secondary">
              {{ t(`manifesto.priorities.${priority.id}.description`) }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section :class="['py-20 sm:py-24', siteTheme.colors.background.surface]">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p
          class="text-sm font-semibold tracking-widest uppercase"
          :class="siteTheme.colors.accent.text"
        >
          {{ t('manifesto.participation.eyebrow') }}
        </p>

        <h2
          class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          :class="siteTheme.colors.text.primary"
        >
          {{ t('manifesto.participation.title') }}
        </h2>

        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          {{ t('manifesto.participation.description') }}
        </p>

        <a
          v-if="manifestoContent.document.path"
          :href="manifestoContent.document.path"
          class="mt-8 inline-flex"
          :class="[siteTheme.components.button.base, siteTheme.components.button.primary]"
          download
        >
          {{ t('manifesto.participation.download') }}
        </a>

        <NuxtLink
          v-else
          to="/contact"
          class="mt-8 inline-flex"
          :class="[siteTheme.components.button.base, siteTheme.components.button.primary]"
        >
          {{ t('manifesto.participation.share') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
