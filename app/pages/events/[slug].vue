<script setup lang="ts">
import { branding } from '~/config/content/brand';
import { eventsContent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

const route = useRoute();
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
const event = eventsContent.events.find((item) => item.link === `/events/${slug}`);

if (!event) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Event not found',
  });
}

useSeoMeta({
  title: `${event.title} | ${branding.name}`,
  description: event.description,
});
</script>

<template>
  <article>
    <header class="py-20 sm:py-24" :class="siteTheme.colors.background.surface">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <NuxtLink
          to="/events"
          class="inline-flex items-center text-sm font-semibold transition-colors hover:text-blue-800"
          :class="siteTheme.colors.primary.text"
        >
          <span class="mr-2">←</span>
          All Events
        </NuxtLink>

        <p class="mt-10 text-sm font-semibold" :class="siteTheme.colors.primary.text">
          {{ event.date }}
        </p>
        <h1
          class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl"
          :class="siteTheme.colors.text.primary"
        >
          {{ event.title }}
        </h1>
      </div>
    </header>

    <div
      class="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8"
    >
      <div>
        <p class="text-xl leading-9" :class="siteTheme.colors.text.secondary">
          {{ event.description }}
        </p>

        <div v-if="event.body?.length" class="mt-8 space-y-6">
          <p
            v-for="paragraph in event.body"
            :key="paragraph"
            class="leading-8"
            :class="siteTheme.colors.text.secondary"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>

      <aside
        class="h-fit rounded-2xl"
        :class="[
          siteTheme.components.card.background,
          siteTheme.components.card.border,
          siteTheme.components.card.shadow,
          siteTheme.components.card.padding,
        ]"
      >
        <h2 class="text-xl font-bold" :class="siteTheme.colors.text.primary">Event Details</h2>
        <dl class="mt-6 space-y-5 text-sm" :class="siteTheme.colors.text.secondary">
          <div>
            <dt class="font-semibold" :class="siteTheme.colors.text.primary">Date</dt>
            <dd class="mt-1">{{ event.date }}</dd>
          </div>
          <div>
            <dt class="font-semibold" :class="siteTheme.colors.text.primary">Time</dt>
            <dd class="mt-1">{{ event.time }}</dd>
          </div>
          <div>
            <dt class="font-semibold" :class="siteTheme.colors.text.primary">Location</dt>
            <dd class="mt-1">{{ event.location }}</dd>
          </div>
        </dl>

        <NuxtLink
          to="/contact"
          class="mt-8 inline-flex w-full justify-center rounded-xl px-5 py-3 font-semibold transition-colors"
          :class="[
            siteTheme.colors.primary.background,
            siteTheme.colors.primary.hover,
            siteTheme.colors.text.inverse,
          ]"
        >
          Contact Us to Attend
        </NuxtLink>
      </aside>
    </div>
  </article>
</template>
