<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { manifestoContent } from '~/config/content/manifesto';
import { siteTheme } from '~/config/theme';

useSeoMeta({
  title: `Manifesto | ${branding.name}`,
  description: manifestoContent.description,
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
            {{ manifestoContent.eyebrow }}
          </p>
          <h1
            class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            :class="siteTheme.colors.text.primary"
          >
            {{ manifestoContent.title }}
          </h1>
          <p class="mt-6 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ manifestoContent.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p
              class="text-sm font-semibold tracking-widest uppercase"
              :class="siteTheme.colors.primary.text"
            >
              Our Commitment
            </p>
            <h2
              class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              :class="siteTheme.colors.text.primary"
            >
              Priorities shaped around people
            </h2>
          </div>

          <p class="text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ manifestoContent.introduction }}
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="priority in manifestoContent.priorities"
            :key="priority.id"
            :class="[
              siteTheme.components.card.base,
              siteTheme.components.card.background,
              siteTheme.components.card.border,
              siteTheme.components.card.shadow,
              siteTheme.components.card.hover,
              siteTheme.components.card.padding,
            ]"
          >
            <p class="text-sm font-bold tracking-widest" :class="siteTheme.colors.primary.text">
              {{ String(priority.id).padStart(2, '0') }}
            </p>
            <h3 class="mt-4 text-xl font-bold" :class="siteTheme.colors.text.primary">
              {{ priority.title }}
            </h3>
            <p class="mt-3 leading-7" :class="siteTheme.colors.text.secondary">
              {{ priority.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20 sm:py-24">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p
          class="text-sm font-semibold tracking-widest uppercase"
          :class="siteTheme.colors.primary.text"
        >
          Read and Participate
        </p>
        <h2
          class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          :class="siteTheme.colors.text.primary"
        >
          A plan that grows with public participation
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          Your perspective matters. Read our commitments and share the priorities that matter most
          to your community.
        </p>

        <a
          v-if="manifestoContent.document.path"
          :href="manifestoContent.document.path"
          class="mt-8 inline-flex rounded-xl px-6 py-3.5 font-semibold transition-colors"
          :class="[
            siteTheme.colors.primary.background,
            siteTheme.colors.primary.hover,
            siteTheme.colors.text.inverse,
          ]"
          download
        >
          {{ manifestoContent.document.label }}
        </a>

        <NuxtLink
          v-else
          to="/contact"
          class="mt-8 inline-flex rounded-xl px-6 py-3.5 font-semibold transition-colors"
          :class="[
            siteTheme.colors.primary.background,
            siteTheme.colors.primary.hover,
            siteTheme.colors.text.inverse,
          ]"
        >
          Share Your Priorities
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
