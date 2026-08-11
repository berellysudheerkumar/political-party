<script setup lang="ts">
import { computed } from 'vue';
import { siteTheme } from '~/config/theme';
import type { ButtonVariant } from '~/types/ui';

const props = withDefaults(
  defineProps<{
    text: string;
    to?: string;
    variant?: ButtonVariant; // 'primary' | 'secondary' | 'outline'
  }>(),
  {
    variant: 'primary',
  },
);

// Dynamically grab the correct variant string from our simplified theme config
const buttonClasses = computed(() => {
  return [siteTheme.components.button.base, siteTheme.components.button[props.variant]];
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center"
    :class="buttonClasses"
  >
    {{ text }}
  </NuxtLink>

  <button v-else class="inline-flex items-center justify-center" :class="buttonClasses">
    {{ text }}
  </button>
</template>
