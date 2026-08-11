<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { manifestoContent } from '~/config/content/manifesto';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

useSeoMeta({
  title: `Manifesto | ${branding.name}`,
  description: t('manifesto.description'),
});
</script>

<template>
  <main
    :class="['min-h-screen', siteTheme.colors.background.surface, siteTheme.colors.text.primary]"
  >
    <!-- ===================================================== -->
    <!-- COMMITMENT                                            -->
    <!-- ===================================================== -->

    <section class="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <!-- Header -->
        <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <div class="mb-5 flex items-center gap-4">
              <span :class="['h-px w-10', siteTheme.colors.accent.background]" />

              <p
                :class="[
                  'text-xs font-bold tracking-[0.25em] uppercase',
                  siteTheme.colors.accent.text,
                ]"
              >
                {{ t('manifesto.commitment.eyebrow') }}
              </p>
            </div>

            <h1
              :class="[
                'max-w-xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl',
                siteTheme.colors.text.primary,
              ]"
            >
              {{ t('manifesto.commitment.title') }}
            </h1>
          </div>

          <p :class="['max-w-3xl text-base leading-8 sm:text-lg', siteTheme.colors.text.secondary]">
            {{ t('manifesto.commitment.introduction') }}
          </p>
        </div>

        <!-- Priorities -->
        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          <article
            v-for="(priority, index) in manifestoContent.priorities"
            :key="priority.id"
            :class="[siteTheme.components.card.base, 'group relative overflow-hidden']"
          >
            <!-- Number -->
            <div :class="['text-xs font-bold tracking-[0.2em]', siteTheme.colors.accent.text]">
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <!-- Content -->
            <h2 :class="['mt-4 text-xl leading-tight font-bold', siteTheme.colors.text.primary]">
              {{ t(`manifesto.priorities.${priority.id}.title`) }}
            </h2>

            <p :class="['mt-3 text-sm leading-7', siteTheme.colors.text.secondary]">
              {{ t(`manifesto.priorities.${priority.id}.description`) }}
            </p>

            <!-- Bottom accent -->
            <span
              :class="[
                'absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full',
                siteTheme.colors.accent.background,
              ]"
            />
          </article>
        </div>
      </div>
    </section>

    <!-- ===================================================== -->
    <!-- PARTICIPATION                                         -->
    <!-- ===================================================== -->

    <section class="pb-20 sm:pb-24 lg:pb-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          class="relative overflow-hidden rounded-[1.75rem] border border-slate-200 px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          <!-- Ambient Accent -->
          <div
            :class="[
              'pointer-events-none absolute -right-32 -bottom-32 h-80 w-80 rounded-full opacity-[0.06] blur-3xl',
              siteTheme.colors.accent.background,
            ]"
          />

          <div class="relative z-10 mx-auto max-w-3xl text-center">
            <p
              :class="[
                'text-xs font-bold tracking-[0.25em] uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              {{ t('manifesto.participation.eyebrow') }}
            </p>

            <h2
              :class="[
                'mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl',
                siteTheme.colors.text.primary,
              ]"
            >
              {{ t('manifesto.participation.title') }}
            </h2>

            <p
              :class="[
                'mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg',
                siteTheme.colors.text.secondary,
              ]"
            >
              {{ t('manifesto.participation.description') }}
            </p>

            <!-- Action -->
            <div class="mt-8 flex justify-center">
              <a
                v-if="manifestoContent.document.path"
                :href="manifestoContent.document.path"
                download
                :class="[siteTheme.components.button.base, siteTheme.components.button.primary]"
              >
                {{ t('manifesto.participation.download') }}
              </a>

              <NuxtLink
                v-else
                to="/contact"
                :class="[siteTheme.components.button.base, siteTheme.components.button.primary]"
              >
                {{ t('manifesto.participation.share') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
