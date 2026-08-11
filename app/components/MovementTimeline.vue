<script setup lang="ts">
import { siteTheme } from '~/config/theme';
import TimelineCard from './TimelineCard.vue';

const { t } = useI18n();

const events = [
  {
    key: 'april2025',
    side: 'left',
  },
  {
    key: 'november2025',
    side: 'right',
  },
  {
    key: 'februaryMarch2026',
    side: 'left',
  },
  {
    key: 'may2026',
    side: 'right',
  },
];
</script>

<template>
  <section class="relative mt-28 overflow-hidden">
    <!-- Ambient background -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        :class="[
          'absolute top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-[0.05] blur-3xl',
          siteTheme.colors.accent.background,
        ]"
      />
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <p
          :class="[
            'mb-4 text-sm font-bold tracking-[0.22em] uppercase',
            siteTheme.colors.accent.text,
          ]"
        >
          {{ t('about.timeline.eyebrow') }}
        </p>

        <h2
          :class="[
            'text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl',
            siteTheme.colors.text.primary,
          ]"
        >
          {{ t('about.timeline.title') }}
        </h2>

        <p
          :class="[
            'mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg',
            siteTheme.colors.text.secondary,
          ]"
        >
          {{ t('about.timeline.description') }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative mt-20">
        <!-- Center line -->
        <div
          class="absolute top-0 bottom-0 left-5 w-px sm:left-1/2 sm:-translate-x-1/2"
          :class="siteTheme.colors.accent.background"
          aria-hidden="true"
        />

        <div class="space-y-14 sm:space-y-20">
          <div
            v-for="event in events"
            :key="event.key"
            class="relative grid sm:grid-cols-2 sm:gap-16"
          >
            <!-- Timeline Node -->
            <div
              class="absolute top-8 left-5 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white shadow-md sm:left-1/2"
              :class="siteTheme.colors.accent.background"
            />

            <!-- LEFT -->
            <div v-if="event.side === 'left'" class="pl-12 sm:pr-8 sm:pl-0">
              <TimelineCard :event-key="event.key" />
            </div>

            <div v-else class="hidden sm:block" />

            <!-- RIGHT -->
            <div v-if="event.side === 'right'" class="pl-12 sm:pl-8">
              <TimelineCard :event-key="event.key" />
            </div>

            <div v-else class="hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
