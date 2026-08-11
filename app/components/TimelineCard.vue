<script setup lang="ts">
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

defineProps<{
  eventKey: string;
}>();
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8"
  >
    <!-- Decorative glow -->
    <div
      class="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:scale-125"
    />

    <div class="relative">
      <!-- Date -->
      <p
        :class="[
          'text-sm font-extrabold tracking-[0.18em] uppercase',
          siteTheme.colors.accent.text,
        ]"
      >
        {{ t(`about.timeline.events.${eventKey}.date`) }}
      </p>

      <!-- Title -->
      <h3
        :class="['mt-4 text-xl leading-snug font-bold sm:text-2xl', siteTheme.colors.text.primary]"
      >
        {{ t(`about.timeline.events.${eventKey}.title`) }}
      </h3>

      <!-- Description -->
      <p :class="['mt-4 text-sm leading-7 sm:text-base', siteTheme.colors.text.secondary]">
        {{ t(`about.timeline.events.${eventKey}.description`) }}
      </p>
    </div>

    <!-- Bottom accent -->
    <div
      :class="[
        'absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full',
        siteTheme.colors.accent.background,
      ]"
    />
  </article>
</template>
