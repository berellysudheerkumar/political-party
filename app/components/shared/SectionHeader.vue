<script setup lang="ts">
import { siteTheme } from '~/config/theme';

defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}>();
</script>

<template>
  <div :class="[align === 'center' ? 'mx-auto text-center' : 'text-left', 'max-w-3xl']">
    <!-- Eyebrow -->
    <p
      v-if="eyebrow"
      :class="['text-sm font-semibold tracking-widest uppercase', siteTheme.colors.accent.text]"
    >
      {{ eyebrow }}
    </p>

    <!-- Title -->
    <h2 :class="['mt-4', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
      {{ title }}
    </h2>

    <!-- Description -->
    <p
      v-if="description"
      :class="[
        'mt-6 max-w-2xl',
        align === 'center' ? 'mx-auto' : '',
        siteTheme.typography.body.large,
        siteTheme.colors.text.secondary,
      ]"
    >
      {{ description }}
    </p>
  </div>
</template>
