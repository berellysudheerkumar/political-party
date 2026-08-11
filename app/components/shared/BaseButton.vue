<script setup lang="ts">
import { computed } from 'vue';
import { siteTheme } from '~/config/theme';
import type { ButtonVariant } from '~/types/ui';

const props = withDefaults(
  defineProps<{
    text: string;
    to?: string;
    variant?: ButtonVariant;
  }>(),
  {
    variant: 'primary',
  },
);

const buttonClasses = computed(() => [
  siteTheme.components.button.base,
  siteTheme.components.button[props.variant],
]);
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    {{ text }}
  </NuxtLink>

  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    {{ text }}
  </button>
</template>
