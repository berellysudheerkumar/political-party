<script setup lang="ts">
import Navbar from '../app/components/Navbar.vue';
import Footer from '../app/components/Footer.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />

    <main class="flex-1 pt-20">
      <slot />
    </main>

    <Footer />
  </div>
</template>
