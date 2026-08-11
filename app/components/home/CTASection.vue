<template>
  <section class="py-20">
    <div class="mx-auto max-w-7xl px-6">
      <h1 class="text-4xl font-bold">About Us</h1>

      <p class="mt-4" :class="[siteTheme.typography.font]">
        Learn about our history, vision and mission.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteTheme } from '~/config/theme';
</script>
