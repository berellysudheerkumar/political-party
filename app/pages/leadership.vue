<script setup lang="ts">
import LeaderCard from '~/components/LeaderCard.vue';
import { branding } from '~/config/content/brand';
import { leadershipContent } from '~/config/content/leadership';
import { siteTheme } from '~/config/theme';

const [president, ...executiveMembers] = leadershipContent.members;
const { t } = useI18n();

useSeoMeta({
  title: `Leadership | ${branding.name}`,
  description: t('leadership.description'),
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section :class="['py-20 sm:py-24', siteTheme.colors.background.surface]">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            :class="[
              'text-sm font-semibold tracking-widest uppercase',
              siteTheme.colors.accent.text,
            ]"
          >
            {{ t('leadership.eyebrow') }}
          </p>

          <h2 :class="['mt-4', siteTheme.typography.heading.large, siteTheme.colors.text.primary]">
            {{ t('leadership.title') }}
          </h2>

          <p
            :class="[
              'mt-5 max-w-2xl',
              siteTheme.typography.body.large,
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ t('leadership.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- President Section -->
    <section v-if="president" class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <p
            :class="[
              'text-sm font-semibold tracking-widest uppercase',
              siteTheme.colors.accent.text,
            ]"
          >
            {{ t('leadership.president.eyebrow') }}
          </p>

          <h2 :class="['mt-4', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
            {{ t('leadership.president.title') }}
          </h2>
        </div>

        <div class="mt-10 max-w-5xl">
          <LeaderCard :member="president" featured />
        </div>
      </div>
    </section>

    <!-- Executive Team Section -->
    <section
      v-if="executiveMembers.length"
      :class="['py-20 sm:py-24', siteTheme.colors.background.surface]"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <p
            :class="[
              'text-sm font-semibold tracking-widest uppercase',
              siteTheme.colors.accent.text,
            ]"
          >
            {{ t('leadership.executive.eyebrow') }}
          </p>

          <h2 :class="['mt-4', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
            {{ t('leadership.executive.title') }}
          </h2>
        </div>

        <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <LeaderCard v-for="member in executiveMembers" :key="member.id" :member="member" />
        </div>
      </div>
    </section>

    <!-- Leadership CTA -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 :class="[siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
          {{ t('leadership.cta.title') }}
        </h2>

        <p
          :class="[
            'mx-auto mt-5 max-w-2xl',
            siteTheme.typography.body.large,
            siteTheme.colors.text.secondary,
          ]"
        >
          {{ t('leadership.cta.description') }}
        </p>

        <NuxtLink
          to="/contact"
          :class="[
            'mt-8 inline-flex',
            siteTheme.components.button.base,
            siteTheme.components.button.primary,
          ]"
        >
          {{ t('leadership.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
