<script setup lang="ts">
import { aboutContent } from '~/config/content/about';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Image -->
        <div class="relative">
          <!-- Dynamic Theme Glow -->
          <div
            :class="[
              'absolute -top-6 -left-6 h-40 w-40 rounded-full opacity-20 blur-2xl',
              siteTheme.colors.accent.background,
            ]"
          />

          <img
            :src="aboutContent.image"
            alt="About"
            class="relative z-10 rounded-2xl object-cover shadow-xl"
          />
        </div>

        <!-- Content -->
        <div>
          <p
            :class="[
              'mb-4 text-sm font-semibold tracking-widest uppercase',
              siteTheme.colors.accent.text,
            ]"
          >
            {{ t('about.eyebrow') }}
          </p>

          <h2
            :class="['text-3xl leading-tight font-bold lg:text-5xl', siteTheme.colors.text.primary]"
          >
            {{ t('about.title') }}
          </h2>

          <p
            :class="[
              'mt-6 max-w-2xl',
              siteTheme.typography.body.large,
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('about.description') }}
          </p>

          <!-- Highlights -->
          <div class="mt-8 space-y-5">
            <div
              v-for="(item, index) in aboutContent.highlights"
              :key="item.title"
              class="flex gap-4"
            >
              <div
                :class="[
                  'mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                  siteTheme.colors.accent.background,
                  siteTheme.colors.text.inverse,
                ]"
              >
                ✓
              </div>

              <div>
                <h3 :class="['font-semibold', siteTheme.colors.text.primary]">
                  {{ t(`about.highlights[${index}].title`) }}
                </h3>

                <p :class="['text-sm leading-6', siteTheme.colors.text.secondary]">
                  {{ t(`about.highlights[${index}].description`) }}
                </p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <NuxtLink
            :to="aboutContent.button.link"
            :class="[
              'mt-10 inline-flex',
              siteTheme.components.button.base,
              siteTheme.components.button.primary,
            ]"
          >
            {{ t('about.button.text') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
