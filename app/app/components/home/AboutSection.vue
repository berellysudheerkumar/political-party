<script setup lang="ts">
import { aboutContent } from '~/config/content/about';
import { siteTheme } from '~/config/theme';
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Image -->

        <div class="relative">
          <div class="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-blue-100 blur-2xl" />

          <img
            :src="aboutContent.image"
            alt="About"
            class="relative z-10 rounded-2xl object-cover shadow-xl"
          />
        </div>

        <!-- Content -->

        <div>
          <p
            class="mb-4 text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            {{ aboutContent.eyebrow }}
          </p>

          <h2
            class="text-3xl leading-tight font-bold lg:text-5xl"
            :class="siteTheme.colors.text.primary"
          >
            {{ aboutContent.title }}
          </h2>

          <p class="mt-6 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ aboutContent.description }}
          </p>

          <!-- Highlights -->

          <div class="mt-8 space-y-5">
            <div v-for="item in aboutContent.highlights" :key="item.title" class="flex gap-4">
              <div
                class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                :class="[siteTheme.colors.primary.background, siteTheme.colors.text.inverse]"
              >
                ✓
              </div>

              <div>
                <h3 class="font-semibold" :class="siteTheme.colors.text.primary">
                  {{ item.title }}
                </h3>

                <p class="text-sm leading-6" :class="siteTheme.colors.text.secondary">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- CTA -->

          <NuxtLink
            :to="aboutContent.button.link"
            class="mt-10 inline-flex rounded-lg px-6 py-3 transition"
            :class="[
              siteTheme.colors.primary.background,
              siteTheme.colors.text.inverse,
              siteTheme.colors.primary.hover,
              siteTheme.typography.button,
            ]"
          >
            {{ aboutContent.button.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
