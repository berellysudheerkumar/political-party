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
  <div>
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <EventCard v-for="event in eventsContent.events" :key="event.id" :event="event" />
        </div>
      </div>
    </section>

    <!-- Community CTA -->
    <section class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :class="siteTheme.colors.text.primary"
        >
          {{ t('events.cta.title') }}
        </h2>

        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          {{ t('events.cta.description') }}
        </p>

        <NuxtLink
          to="/contact"
          :class="[siteTheme.components.button.base, siteTheme.components.button.primary]"
        >
          {{ t('events.cta.button') }}
        </NuxtLink>
      </div>
    </section>

    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <EventCard v-for="event in eventsContent.events" :key="event.id" :event="event" />
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :class="siteTheme.colors.text.primary"
        >
          Bring your ideas to the conversation
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          Attend an upcoming event or contact us to find out how you can take part in your
          community.
        </p>
        <!-- CONTACT BUTTON -->
        <NuxtLink
          to="/contact"
          class="mt-8 inline-flex rounded-xl px-6 py-3.5 font-semibold transition-colors"
          :class="[siteTheme.components.button.base, siteTheme.components.button.primary]"
        >
          {{ t('events.details.contact') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
