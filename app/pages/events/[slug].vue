<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { eventsContent } from '~/config/content/events';
import { siteTheme } from '~/config/theme';

const { t } = useI18n();
const route = useRoute();

const event = computed(() => {
  return eventsContent.events.find((item) => item.link === `/events/${route.params.slug}`);
});

const eventKey = computed(() => {
  return event.value ? `events.articles.${event.value.id}` : '';
});
</script>

<template>
  <div v-if="event">
    <!-- HERO -->
    <header :class="['border-b', siteTheme.colors.border]">
      <div class="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
        <!-- Event Category Badge -->
        <span
          :class="[
            'inline-flex rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase',
            siteTheme.colors.background.surface,
            siteTheme.colors.accent.text,
          ]"
        >
          {{ t('events.eyebrow') }}
        </span>

        <!-- Date -->
        <p :class="['mt-6 text-sm font-semibold', siteTheme.colors.accent.text]">
          {{ t(`${eventKey}.date`) }}
        </p>

        <!-- Title -->
        <h1
          :class="[
            'mt-4 max-w-4xl',
            siteTheme.typography.heading.large,
            siteTheme.colors.text.primary,
          ]"
        >
          {{ t(`${eventKey}.title`) }}
        </h1>
      </div>
    </header>

    <!-- CONTENT -->
    <div
      class="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8"
    >
      <!-- MAIN CONTENT -->
      <div>
        <!-- Description -->
        <p :class="[siteTheme.typography.body.large, siteTheme.colors.text.secondary]">
          {{ t(`${eventKey}.description`) }}
        </p>

        <!-- Full Event Content -->
        <div class="mt-8">
          <p :class="[siteTheme.typography.body.normal, siteTheme.colors.text.secondary]">
            {{ t(`${eventKey}.content`) }}
          </p>
        </div>
      </div>

      <!-- EVENT DETAILS (Aside Card) -->
      <aside :class="['h-fit', siteTheme.components.card.base]">
        <h2 :class="['text-xl font-bold', siteTheme.colors.text.primary]">
          {{ t('events.details.title') }}
        </h2>

        <dl :class="['mt-6 space-y-5 text-sm', siteTheme.colors.text.secondary]">
          <!-- DATE -->
          <div>
            <dt :class="['font-semibold', siteTheme.colors.text.primary]">
              {{ t('events.details.date') }}
            </dt>
            <dd class="mt-1">
              {{ t(`${eventKey}.date`) }}
            </dd>
          </div>

          <!-- TIME -->
          <div>
            <dt :class="['font-semibold', siteTheme.colors.text.primary]">
              {{ t('events.details.time') }}
            </dt>
            <dd class="mt-1">
              {{ t(`${eventKey}.time`) }}
            </dd>
          </div>

          <!-- LOCATION -->
          <div>
            <dt :class="['font-semibold', siteTheme.colors.text.primary]">
              {{ t('events.details.location') }}
            </dt>
            <dd class="mt-1">
              {{ t(`${eventKey}.location`) }}
            </dd>
          </div>
        </dl>

        <!-- CONTACT BUTTON -->
        <NuxtLink
          to="/contact"
          :class="[
            'mt-8 flex w-full justify-center',
            siteTheme.components.button.base,
            siteTheme.components.button.primary,
          ]"
        >
          {{ t('events.details.contact') }}
        </NuxtLink>
      </aside>
    </div>
  </div>

  <!-- EVENT NOT FOUND -->
  <div v-else class="mx-auto max-w-3xl px-6 py-24 text-center">
    <h1 :class="[siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
      {{ t('events.notFound') }}
    </h1>

    <NuxtLink
      to="/events"
      :class="[
        'mt-6 inline-flex',
        siteTheme.components.button.base,
        siteTheme.components.button.primary,
      ]"
    >
      {{ t('events.buttons.viewAll') }}
    </NuxtLink>
  </div>
</template>
