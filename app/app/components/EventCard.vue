<script setup lang="ts">
import { computed, ref } from 'vue';

import type { PartyEvent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

const props = defineProps<{
  event: PartyEvent;
}>();

const imageFailed = ref(false);
const showImage = computed(() => Boolean(props.event.image) && !imageFailed.value);
</script>

<template>
  <article
    :class="[
      siteTheme.components.card.base,
      siteTheme.components.card.background,
      siteTheme.components.card.border,
      siteTheme.components.card.shadow,
      siteTheme.components.card.hover,
      'group flex h-full flex-col overflow-hidden',
    ]"
  >
    <div
      class="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
    >
      <img
        v-if="showImage"
        :src="props.event.image"
        :alt="props.event.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        @error="imageFailed = true"
      />

      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
        aria-hidden="true"
      >
        <span class="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">Event</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col" :class="siteTheme.components.card.padding">
      <p class="text-sm font-semibold" :class="siteTheme.colors.primary.text">
        {{ props.event.date }}
      </p>

      <h3 class="mt-3 text-xl font-bold" :class="siteTheme.colors.text.primary">
        <NuxtLink :to="props.event.link" class="transition-colors hover:text-blue-800">
          {{ props.event.title }}
        </NuxtLink>
      </h3>

      <div class="mt-4 space-y-2 text-sm" :class="siteTheme.colors.text.secondary">
        <p>
          <span class="font-semibold">Time:</span>
          {{ props.event.time }}
        </p>
        <p>
          <span class="font-semibold">Location:</span>
          {{ props.event.location }}
        </p>
      </div>

      <p class="mt-4 leading-7" :class="siteTheme.colors.text.secondary">
        {{ props.event.description }}
      </p>

      <NuxtLink
        :to="props.event.link"
        class="mt-6 inline-flex items-center font-semibold transition-colors hover:text-blue-800"
        :class="siteTheme.colors.primary.text"
      >
        Event Details
        <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </NuxtLink>
    </div>
  </article>
</template>
