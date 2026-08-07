<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { achievementsContent } from '~/config/content/achievements';
import { siteTheme } from '~/config/theme';

useSeoMeta({
  title: `Achievements | ${branding.name}`,
  description: achievementsContent.description,
});
</script>

<template>
  <div>
    <section class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            {{ achievementsContent.eyebrow }}
          </p>
          <h1
            class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            :class="siteTheme.colors.text.primary"
          >
            {{ achievementsContent.title }}
          </h1>
          <p class="mt-6 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ achievementsContent.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            Impact by the Numbers
          </p>
          <h2
            class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            :class="siteTheme.colors.text.primary"
          >
            Progress that can be measured
          </h2>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            ]"
          >
            <p class="text-4xl font-extrabold lg:text-5xl" :class="siteTheme.colors.primary.text">
              {{ achievement.value }}
            </p>
            <h3 class="mt-5 text-xl font-bold" :class="siteTheme.colors.text.primary">
              {{ achievement.label }}
            </h3>
            <p class="mt-3 text-sm leading-6" :class="siteTheme.colors.text.secondary">
              {{ achievement.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p
              class="text-sm font-semibold tracking-widest uppercase"
              :class="siteTheme.colors.primary.text"
            >
              How We Create Impact
            </p>
            <h2
              class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              :class="siteTheme.colors.text.primary"
            >
              Public service with people at its centre
            </h2>
          </div>

          <p class="text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ achievementsContent.closing }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="(area, index) in achievementsContent.impactAreas"
            :key="area.title"
            :class="[
              siteTheme.components.card.base,
              siteTheme.components.card.background,
              siteTheme.components.card.border,
              siteTheme.components.card.padding,
            ]"
          >
            <p class="text-sm font-bold tracking-widest" :class="siteTheme.colors.primary.text">
              0{{ index + 1 }}
            </p>
            <h3 class="mt-4 text-xl font-bold" :class="siteTheme.colors.text.primary">
              {{ area.title }}
            </h3>
            <p class="mt-3 leading-7" :class="siteTheme.colors.text.secondary">
              {{ area.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :class="siteTheme.colors.text.primary"
        >
          Help shape what comes next
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          Share the changes you want to see in your community and take part in creating a better
          future.
        </p>
        <NuxtLink
          to="/contact"
          class="mt-8 inline-flex rounded-xl px-6 py-3.5 font-semibold transition-colors"
          :class="[
            siteTheme.colors.primary.background,
            siteTheme.colors.primary.hover,
            siteTheme.colors.text.inverse,
          ]"
        >
          Get Involved
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
