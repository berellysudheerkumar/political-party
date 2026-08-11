<script setup lang="ts">
import { eventsContent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

type PartyEvent = (typeof eventsContent.events)[number];

defineProps<{
  event: PartyEvent;
}>();
</script>

<template>
  <article
    :class="[
      siteTheme.components.card.base,
      siteTheme.components.card.hover,
      'group overflow-hidden !p-0', // Overriding default card padding for edge-to-edge image
    ]"
  >
    <!-- IMAGE -->
    <div class="relative h-60 overflow-hidden">
      <img
        v-if="event.image"
        :src="event.image"
        :alt="t(`events.articles.${event.id}.title`)"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <!-- Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <!-- Category -->
      <div class="absolute bottom-4 left-4">
        <span
          :class="[
            'rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold tracking-wide backdrop-blur-sm',
            siteTheme.colors.accent.text,
          ]"
        >
          {{ t('events.eyebrow') }}
        </span>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="p-6">
      <!-- DATE / TIME -->
      <div :class="['flex flex-wrap gap-x-4 gap-y-2 text-sm', siteTheme.colors.text.secondary]">
        <span>
          {{ t(`events.articles.${event.id}.date`) }}
        </span>

        <span>
          {{ t(`events.articles.${event.id}.time`) }}
        </span>
      </div>

      <!-- TITLE -->
      <h3
        :class="['mt-3 text-xl leading-tight font-bold sm:text-2xl', siteTheme.colors.text.primary]"
      >
        {{ t(`events.articles.${event.id}.title`) }}
      </h3>

      <!-- LOCATION -->
      <p :class="['mt-3 text-sm font-semibold', siteTheme.colors.accent.text]">
        📍 {{ t(`events.articles.${event.id}.location`) }}
      </p>

      <!-- DESCRIPTION -->
      <p :class="['mt-4 leading-7', siteTheme.colors.text.secondary]">
        {{ t(`events.articles.${event.id}.description`) }}
      </p>

      <!-- BUTTON -->
      <NuxtLink
        :to="event.link"
        :class="[
          'mt-6 inline-flex items-center font-semibold transition-all',
          siteTheme.colors.accent.text,
          'hover:opacity-80', // Using opacity for a clean, theme-agnostic hover effect
        ]"
      >
        {{ t('events.buttons.learnMore') }}

        <span class="ml-2 transition-transform group-hover:translate-x-1"> → </span>
      </NuxtLink>
    </div>
  </article>
</template>
