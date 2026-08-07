<script setup lang="ts">
import { siteTheme } from '~/config/theme';

defineProps<{
  hover?: boolean;
}>();
</script>

<template>
  <div
    :class="[
      siteTheme.components.card.base,
      siteTheme.components.card.background,
      siteTheme.components.card.border,
      siteTheme.components.card.shadow,
      siteTheme.components.card.padding,
      hover && siteTheme.components.card.hover,
    ]"
  >
    <slot />
  </div>
</template>
