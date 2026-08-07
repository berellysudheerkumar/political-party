<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { siteTheme } from '~/config/theme';
import { navigation } from '~/config/content/navigation';
import { branding } from '~/config/content/brand';

const mobileOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80;
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out"
    :class="[
      isScrolled
        ? [
            siteTheme.components.navbar.scrolled.background,
            siteTheme.components.navbar.scrolled.shadow,
          ]
        : siteTheme.components.navbar.background,
    ]"
  >
    <nav class="mx-auto max-w-7xl px-6">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-full text-lg"
            :class="[
              siteTheme.colors.primary.background,
              siteTheme.colors.text.inverse,
              siteTheme.typography.heading.small,
            ]"
          >
            {{ branding.logo.text }}
          </div>

          <div>
            <h1 :class="[siteTheme.typography.heading.small, siteTheme.colors.text.primary]">
              {{ branding.name }}
            </h1>

            <p :class="[siteTheme.typography.body.small, siteTheme.colors.text.secondary]">
              {{ branding.tagline }}
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-8 lg:flex">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="transition-colors"
            :class="[
              siteTheme.typography.navigation,
              siteTheme.components.navbar.text.default,
              siteTheme.components.navbar.text.hover,
            ]"
          >
            {{ item.name }}
          </NuxtLink>

          <!-- Join Button -->
          <NuxtLink
            to="/contact"
            class="rounded-lg px-5 py-2.5 shadow transition-all"
            :class="[
              siteTheme.components.navbar.button.background,
              siteTheme.components.navbar.button.hover,
              siteTheme.components.navbar.button.text,
              siteTheme.typography.button,
            ]"
          >
            Join Us
          </NuxtLink>
        </div>

        <!-- Mobile Button -->
        <button
          class="rounded-md p-2 transition lg:hidden"
          :class="siteTheme.components.navbar.text.default"
          @click="mobileOpen = !mobileOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="border-t backdrop-blur-md lg:hidden"
        :class="[
          siteTheme.components.navbar.mobileMenu.background,
          siteTheme.components.navbar.mobileMenu.border,
        ]"
      >
        <div class="flex flex-col gap-4 px-6 py-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="transition-colors"
            :class="[
              siteTheme.typography.navigation,
              siteTheme.components.navbar.text.default,
              siteTheme.components.navbar.text.hover,
            ]"
            @click="mobileOpen = false"
          >
            {{ item.name }}
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="mt-2 rounded-lg px-4 py-3 text-center"
            :class="[
              siteTheme.components.navbar.button.background,
              siteTheme.components.navbar.button.text,
              siteTheme.typography.button,
            ]"
            @click="mobileOpen = false"
          >
            Join Us
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>
