<script setup lang="ts">
import { siteTheme } from '~/config/theme';

defineProps<{
  hover?: boolean;
}>();
</script>

<template>
  <div :class="[siteTheme.components.card.base, hover && siteTheme.components.card.hover]">
    <slot />
  </div>
</template>
