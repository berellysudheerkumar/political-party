<script setup lang="ts">
import EventCard from '~/app/components/EventCard.vue';
import { branding } from '~/config/content/brand';
import { eventsContent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

useSeoMeta({
  title: `Events | ${branding.name}`,
  description: eventsContent.description,
});
</script>

<template>
  <div>
    <section class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            {{ eventsContent.eyebrow }}
          </p>
          <h1
            class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            :class="siteTheme.colors.text.primary"
          >
            {{ eventsContent.title }}
          </h1>
          <p class="mt-6 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ eventsContent.description }}
          </p>
        </div>
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
        <NuxtLink
          to="/contact"
          class="mt-8 inline-flex rounded-xl px-6 py-3.5 font-semibold transition-colors"
          :class="[
            siteTheme.colors.primary.background,
            siteTheme.colors.primary.hover,
            siteTheme.colors.text.inverse,
          ]"
        >
          Contact Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
