<script setup lang="ts">
import EventCard from '~/app/components/EventCard.vue';
import { eventsContent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

import BaseButton from '../../components/shared/BaseButton.vue';
import SectionHeader from '../../components/shared/SectionHeader.vue';
</script>

<template>
  <section class="py-24" :class="siteTheme.colors.background.default">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        :eyebrow="eventsContent.eyebrow"
        :title="eventsContent.title"
        :description="eventsContent.description"
      />

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <EventCard v-for="event in eventsContent.events" :key="event.id" :event="event" />
      </div>

      <div class="mt-14 text-center">
        <BaseButton :text="eventsContent.button.text" :to="eventsContent.button.link" />
      </div>
    </div>
  </section>
</template>
