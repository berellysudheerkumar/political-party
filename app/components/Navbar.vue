<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { siteTheme } from '~/config/theme';
import { navigation } from '~/config/content/navigation';

const dropdownOpen = ref(false);
const dropdownContainer = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const { t } = useI18n();

// Split navigation: First 3 visible directly, rest in the dropdown
const visibleNav = computed(() => navigation.slice(0, 3));
const dropdownNav = computed(() => navigation.slice(3));

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80;
};

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target as Node)) {
    dropdownOpen.value = false;
  }
};

// Close dropdown when pressing the Escape key
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    dropdownOpen.value = false;
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out"
    :class="
      isScrolled
        ? siteTheme.components.layout.navbar.scrolled
        : siteTheme.components.layout.navbar.base
    "
  >
    <nav class="mx-auto max-w-7xl px-6">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold shadow-sm"
            :class="[siteTheme.components.button.primary]"
          >
            {{ t('branding.shortName') }}
          </div>

          <div>
            <h1
              :class="[
                'text-base font-extrabold tracking-tight sm:text-lg',
                siteTheme.colors.text.primary,
              ]"
            >
              {{ t('branding.name') }}
            </h1>

            <p :class="['text-xs opacity-80', siteTheme.colors.text.secondary]">
              {{ t('branding.tagline') }}
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation (3 Visible + Dropdown for Rest + CTA) -->
        <div class="hidden items-center gap-6 lg:flex">
          <!-- Primary Visible Links -->
          <NuxtLink
            v-for="item in visibleNav"
            :key="item.id"
            :to="item.path"
            class="text-sm font-medium transition-colors hover:opacity-80"
            :class="[siteTheme.colors.text.primary]"
          >
            {{ t(item.labelKey) }}
          </NuxtLink>

          <!-- "More" Dropdown for Remaining Links -->
          <div class="relative" ref="dropdownContainer" v-if="dropdownNav.length > 0">
            <button
              @click.stop="dropdownOpen = !dropdownOpen"
              class="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80 focus:outline-none"
              :class="[siteTheme.colors.text.primary]"
            >
              <span>{{ t('navigation.more') || 'More' }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': dropdownOpen }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown Panel -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95 translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 translate-y-2"
            >
              <div
                v-if="dropdownOpen"
                class="absolute right-0 mt-3 w-52 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl"
                :class="[
                  siteTheme.colors.background.default,
                  siteTheme.colors.border,
                  'shadow-black/10',
                ]"
              >
                <div class="flex flex-col gap-1">
                  <NuxtLink
                    v-for="item in dropdownNav"
                    :key="item.id"
                    :to="item.path"
                    class="rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
                    :class="[
                      siteTheme.colors.text.primary,
                      'hover:bg-black/5 hover:opacity-80 dark:hover:bg-white/5',
                    ]"
                    @click="dropdownOpen = false"
                  >
                    {{ t(item.labelKey) }}
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>

          <!-- Join Button -->
          <NuxtLink
            to="/contact"
            class="ml-2 rounded-xl px-6 py-2.5 text-sm font-semibold shadow-md transition-all"
            :class="[siteTheme.components.button.primary]"
          >
            {{ t('buttons.joinUs') }}
          </NuxtLink>
        </div>

        <!-- Mobile Quick Menu Toggle -->
        <div class="flex items-center gap-3 lg:hidden" ref="dropdownContainer">
          <NuxtLink
            to="/contact"
            class="rounded-xl px-4 py-2 text-xs font-semibold shadow transition-all sm:hidden"
            :class="[siteTheme.components.button.primary]"
          >
            {{ t('buttons.joinUs') }}
          </NuxtLink>

          <button
            @click.stop="dropdownOpen = !dropdownOpen"
            class="rounded-xl border p-2.5 shadow-sm transition"
            :class="[
              siteTheme.colors.border,
              siteTheme.colors.text.primary,
              siteTheme.colors.background.surface,
            ]"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
      </div>
    </nav>

    <!-- Mobile Expanded Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="dropdownOpen"
        class="border-t backdrop-blur-xl lg:hidden"
        :class="[siteTheme.colors.background.default, siteTheme.colors.border]"
      >
        <div class="flex flex-col gap-1 px-6 py-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.id"
            :to="item.path"
            class="rounded-xl px-4 py-3 text-sm font-medium transition-colors"
            :class="[siteTheme.colors.text.primary, 'hover:bg-black/5 dark:hover:bg-white/5']"
            @click="dropdownOpen = false"
          >
            {{ t(item.labelKey) }}
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="mt-2 hidden rounded-xl px-4 py-3 text-center text-sm font-semibold sm:inline-block"
            :class="[siteTheme.components.button.primary]"
            @click="dropdownOpen = false"
          >
            {{ t('buttons.joinUs') }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>
