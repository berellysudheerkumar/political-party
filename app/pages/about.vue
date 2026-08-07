<script setup lang="ts">
import { aboutContent } from '~/config/content/about';
import { branding } from '~/config/content/brand';
import { visionMissionContent } from '~/config/content/vision';
import { siteTheme } from '~/config/theme';

useSeoMeta({
  title: `About ${branding.name}`,
  description: aboutContent.description,
});
</script>

<template>
  <div>
    <section class="bg-gray-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            {{ aboutContent.eyebrow }}
          </p>

          <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {{ aboutContent.title }}
          </h1>

          <p class="mt-6 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ aboutContent.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p
              class="text-sm font-semibold tracking-widest uppercase"
              :class="siteTheme.colors.primary.text"
            >
              What drives us
            </p>
            <h2
              class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              :class="siteTheme.colors.text.primary"
            >
              A people-centred commitment to progress
            </h2>
            <p class="mt-6 leading-8" :class="siteTheme.colors.text.secondary">
              We believe that lasting progress starts by listening to citizens, acting responsibly,
              and ensuring opportunity reaches every community.
            </p>
          </div>

          <div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <article
              v-for="item in aboutContent.highlights"
              :key="item.title"
              :class="[
                siteTheme.components.card.base,
                siteTheme.components.card.background,
                siteTheme.components.card.border,
                siteTheme.components.card.shadow,
                siteTheme.components.card.padding,
              ]"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
                :class="[siteTheme.colors.primary.background, siteTheme.colors.text.inverse]"
              >
                ✓
              </div>
              <h3 class="mt-5 text-xl font-bold" :class="siteTheme.colors.text.primary">
                {{ item.title }}
              </h3>
              <p class="mt-3 leading-7" :class="siteTheme.colors.text.secondary">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            {{ visionMissionContent.eyebrow }}
          </p>
          <h2
            class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            :class="siteTheme.colors.text.primary"
          >
            {{ visionMissionContent.title }}
          </h2>
          <p class="mt-5 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ visionMissionContent.description }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-4">
          <article
            class="rounded-2xl p-8 lg:col-span-1"
            :class="[siteTheme.colors.primary.background, siteTheme.colors.text.inverse]"
          >
            <p class="text-sm font-semibold tracking-widest text-blue-100 uppercase">Vision</p>
            <h3 class="mt-4 text-2xl font-bold">{{ visionMissionContent.vision.title }}</h3>
            <p class="mt-4 leading-7 text-blue-100">
              {{ visionMissionContent.vision.description }}
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
          Be part of the change
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          Join us in building stronger communities and a future with opportunity for everyone.
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
          Join Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
