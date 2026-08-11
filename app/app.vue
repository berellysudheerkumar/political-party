<script setup lang="ts">
const { locale } = useI18n();

const appFontClass = computed(() => {
  return locale.value === 'te' ? 'font-telugu' : 'font-english';
});
</script>

<template>
  <div :class="appFontClass">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
