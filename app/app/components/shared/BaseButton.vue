<script setup lang="ts">
import { siteTheme } from '~/config/theme';
import type { ButtonVariant } from '~/types/ui';

withDefaults(
  defineProps<{
    text: string;
    to?: string;
    variant?: ButtonVariant;
  }>(),
  {
    variant: 'primary',
  },
);
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center"
    :class="[
      siteTheme.components.button.base,

      variant === 'primary'
        ? [
            siteTheme.components.button.primary.background,
            siteTheme.components.button.primary.hover,
            siteTheme.components.button.primary.text,
          ]
        : variant === 'secondary'
          ? [
              siteTheme.components.button.secondary.background,
              siteTheme.components.button.secondary.hover,
              siteTheme.components.button.secondary.text,
            ]
          : [
              siteTheme.components.button.outline.background,
              siteTheme.components.button.outline.border,
              siteTheme.components.button.outline.hover,
              siteTheme.components.button.outline.text,
            ],
    ]"
  >
    {{ text }}
  </NuxtLink>

  <button
    v-else
    class="inline-flex items-center justify-center"
    :class="[
      siteTheme.components.button.base,
      siteTheme.components.button.primary.background,
      siteTheme.components.button.primary.hover,
      siteTheme.components.button.primary.text,
    ]"
  >
    {{ text }}
  </button>
</template>
