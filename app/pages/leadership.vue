<script setup lang="ts">
import LeaderCard from '~/app/components/LeaderCard.vue';
import { branding } from '~/config/content/brand';
import { leadershipContent } from '~/config/content/leadership';
import { siteTheme } from '~/config/theme';

const [president, ...executiveMembers] = leadershipContent.members;

useSeoMeta({
  title: `Leadership | ${branding.name}`,
  description: leadershipContent.description,
});
</script>

<template>
  <div>
    <section class="bg-gray-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            {{ leadershipContent.eyebrow }}
          </p>
          <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {{ leadershipContent.title }}
          </h1>
          <p class="mt-6 text-lg leading-8" :class="siteTheme.colors.text.secondary">
            {{ leadershipContent.description }}
          </p>
        </div>
      </div>
    </section>

    <section v-if="president" class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            Party President
          </p>
          <h2
            class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            :class="siteTheme.colors.text.primary"
          >
            Leading with purpose and responsibility
          </h2>
        </div>

        <div class="mt-10 max-w-5xl">
          <LeaderCard :member="president" featured />
        </div>
      </div>
    </section>

    <section v-if="executiveMembers.length" class="bg-gray-50 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <p
            class="text-sm font-semibold tracking-widest uppercase"
            :class="siteTheme.colors.primary.text"
          >
            Executive Team
          </p>
          <h2
            class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            :class="siteTheme.colors.text.primary"
          >
            Serving communities with dedication
          </h2>
        </div>

        <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <LeaderCard v-for="member in executiveMembers" :key="member.id" :member="member" />
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :class="siteTheme.colors.text.primary"
        >
          Work with our leadership team
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-lg leading-8"
          :class="siteTheme.colors.text.secondary"
        >
          Connect with us to share your ideas, support community initiatives, and help shape a
          better future.
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
