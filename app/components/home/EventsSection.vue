<script setup lang="ts">
import EventCard from '~/components/EventCard.vue';
import { eventsContent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

import BaseButton from '~/components/shared/BaseButton.vue';
import SectionHeader from '~/components/shared/SectionHeader.vue';

const { t } = useI18n();
</script>

<template>
  <section class="py-24" :class="siteTheme.colors.background.default">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        :eyebrow="t('events.eyebrow')"
        :title="t('events.title')"
        :description="t('events.description')"
      />

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <EventCard v-for="event in eventsContent.events" :key="event.id" :event="event" />
      </div>

      <div class="mt-14 text-center">
        <BaseButton :text="t('events.buttons.viewAll')" :to="t('events.buttons.link')" />
      </div>
    </div>
  </section>
</template>
