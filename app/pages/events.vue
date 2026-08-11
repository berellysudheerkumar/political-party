<script setup lang="ts">
import EventCard from '~/components/EventCard.vue';
import { branding } from '~/config/content/brand';
import { eventsContent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

useSeoMeta({
  title: `Events | ${branding.name}`,
  description: t('events.description'),
});
</script>

<template>
  <main
    :class="['min-h-screen', siteTheme.colors.background.surface, siteTheme.colors.text.primary]"
  >
    <!-- ===================================================== -->
    <!-- EVENTS                                                 -->
    <!-- ===================================================== -->

    <section class="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <!-- Page Header -->
        <div class="max-w-3xl">
          <div class="mb-5 flex items-center gap-4">
            <span :class="['h-px w-10', siteTheme.colors.accent.background]" />

            <p
              :class="[
                'text-xs font-bold tracking-[0.25em] uppercase',
                siteTheme.colors.accent.text,
              ]"
            >
              {{ t('events.eyebrow') }}
            </p>
          </div>

          <h1
            :class="[
              'text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl',
              siteTheme.colors.text.primary,
            ]"
          >
            {{ t('events.title') }}
          </h1>

          <p
            :class="[
              'mt-5 max-w-2xl text-base leading-8 sm:text-lg',
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('events.description') }}
          </p>
        </div>

        <!-- Events Grid -->
        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          <EventCard v-for="event in eventsContent.events" :key="event.id" :event="event" />
        </div>
      </div>
    </section>

    <!-- ===================================================== -->
    <!-- COMMUNITY CTA                                         -->
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
              {{ t('events.eyebrow') }}
            </p>

            <h2
              :class="[
                'mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl',
                siteTheme.colors.text.primary,
              ]"
            >
              {{ t('events.cta.title') }}
            </h2>

            <p
              :class="[
                'mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg',
                siteTheme.colors.text.secondary,
              ]"
            >
              {{ t('events.cta.description') }}
            </p>

            <div class="mt-8 flex justify-center">
              <NuxtLink
                to="/contact"
                :class="[siteTheme.components.button.base, siteTheme.components.button.primary]"
              >
                {{ t('events.cta.button') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
