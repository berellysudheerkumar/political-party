<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { siteTheme } from '~/config/theme';
import { navigation } from '~/config/content/navigation';

const dropdownOpen = ref(false);
const dropdownContainer = ref<HTMLElement | null>(null);
const mobileMenuContainer = ref<HTMLElement | null>(null);
const isScrolled = ref(false);

const { t, locale, setLocale } = useI18n();

/* ========================================================= */
/* NAVIGATION                                                */
/* ========================================================= */

const visibleNav = computed(() => navigation.slice(0, 3));
const dropdownNav = computed(() => navigation.slice(3));

/* ========================================================= */
/* LANGUAGE SWITCHER                                         */
/* ========================================================= */

const currentLanguage = computed(() => locale.value);

const toggleLanguage = async () => {
  const nextLocale = locale.value === 'en' ? 'te' : 'en';

  await setLocale(nextLocale);

  dropdownOpen.value = false;
};

/* ========================================================= */
/* SCROLL                                                   */
/* ========================================================= */

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80;
};

/* ========================================================= */
/* CLICK OUTSIDE                                             */
/* ========================================================= */

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;

  const clickedDesktopDropdown = dropdownContainer.value?.contains(target);

  const clickedMobileMenu = mobileMenuContainer.value?.contains(target);

  if (!clickedDesktopDropdown && !clickedMobileMenu) {
    dropdownOpen.value = false;
  }
};

/* ========================================================= */
/* ESCAPE                                                    */
/* ========================================================= */

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    dropdownOpen.value = false;
  }
};

/* ========================================================= */
/* LIFECYCLE                                                 */
/* ========================================================= */

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
        <!-- ================================================= -->
        <!-- LOGO                                               -->
        <!-- ================================================= -->

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

        <!-- ================================================= -->
        <!-- DESKTOP NAVIGATION                                -->
        <!-- ================================================= -->

        <div class="hidden items-center gap-5 lg:flex">
          <!-- Primary Links -->

          <NuxtLink
            v-for="item in visibleNav"
            :key="item.id"
            :to="item.path"
            class="text-sm font-medium transition-colors hover:opacity-70"
            :class="[siteTheme.colors.text.primary]"
          >
            {{ t(item.labelKey) }}
          </NuxtLink>

          <!-- More Dropdown -->

          <div v-if="dropdownNav.length > 0" ref="dropdownContainer" class="relative">
            <button
              type="button"
              class="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70 focus:outline-none"
              :class="[siteTheme.colors.text.primary]"
              @click.stop="dropdownOpen = !dropdownOpen"
            >
              <span>{{ t('navigation.more') || 'More' }}</span>

              <svg
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

            <!-- Dropdown -->

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-2 scale-95 opacity-0"
              enter-to-class="translate-y-0 scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 scale-100 opacity-100"
              leave-to-class="translate-y-2 scale-95 opacity-0"
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

          <!-- ================================================= -->
          <!-- CORPORATE LANGUAGE SWITCHER                        -->
          <!-- ================================================= -->

          <div class="ml-1">
            <button
              type="button"
              class="group flex items-center rounded-xl border p-1 shadow-sm transition-all duration-200 hover:border-amber-500/50"
              :class="[siteTheme.colors.border, siteTheme.colors.background.surface]"
              :aria-label="currentLanguage === 'en' ? 'Switch to Telugu' : 'Switch to English'"
              @click="toggleLanguage"
            >
              <!-- English Button Segment -->
              <span
                class="flex h-8 px-3 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200"
                :class="
                  currentLanguage === 'en'
                    ? [siteTheme.components.button.primary, 'shadow-sm']
                    : [siteTheme.colors.text.secondary, 'hover:opacity-100 opacity-75']
                "
              >
                EN
              </span>

              <!-- Telugu Button Segment -->
              <span
                class="flex h-8 px-3 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200"
                :class="
                  currentLanguage === 'te'
                    ? [siteTheme.components.button.primary, 'shadow-sm']
                    : [siteTheme.colors.text.secondary, 'hover:opacity-100 opacity-75']
                "
              >
                తెలుగు
              </span>
            </button>
          </div>

          <!-- ================================================= -->
          <!-- JOIN BUTTON                                       -->
          <!-- ================================================= -->

          <NuxtLink
            to="/contact"
            class="ml-1 rounded-xl px-6 py-2.5 text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            :class="[siteTheme.components.button.primary]"
          >
            {{ t('buttons.joinUs') }}
          </NuxtLink>
        </div>

        <!-- ================================================= -->
        <!-- MOBILE CONTROLS                                    -->
        <!-- ================================================= -->

        <div ref="mobileMenuContainer" class="flex items-center gap-2 lg:hidden">
          <!-- Mobile Language -->

          <button
            type="button"
            class="flex h-10 items-center justify-center rounded-xl border px-3 text-xs font-bold transition-all"
            :class="[
              siteTheme.colors.border,
              siteTheme.colors.text.primary,
              siteTheme.colors.background.surface,
            ]"
            :aria-label="locale === 'en' ? 'Switch to Telugu' : 'Switch to English'"
            @click="toggleLanguage"
          >
            {{ currentLanguage === 'en' ? 'తెలుగు' : 'English' }}
          </button>

          <!-- Mobile Join -->

          <NuxtLink
            to="/contact"
            class="hidden rounded-xl px-4 py-2 text-xs font-semibold shadow sm:inline-flex"
            :class="[siteTheme.components.button.primary]"
          >
            {{ t('buttons.joinUs') }}
          </NuxtLink>

          <!-- Mobile Menu -->

          <button
            type="button"
            class="rounded-xl border p-2.5 shadow-sm transition"
            :class="[
              siteTheme.colors.border,
              siteTheme.colors.text.primary,
              siteTheme.colors.background.surface,
            ]"
            aria-label="Toggle Menu"
            :aria-expanded="dropdownOpen"
            @click.stop="dropdownOpen = !dropdownOpen"
          >
            <svg
              v-if="!dropdownOpen"
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

            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- ===================================================== -->
    <!-- MOBILE EXPANDED MENU                                  -->
    <!-- ===================================================== -->

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="dropdownOpen"
        class="border-t backdrop-blur-xl lg:hidden"
        :class="[siteTheme.colors.background.default, siteTheme.colors.border]"
      >
        <div class="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
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

          <!-- Mobile Join -->

          <NuxtLink
            to="/contact"
            class="mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold sm:hidden"
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