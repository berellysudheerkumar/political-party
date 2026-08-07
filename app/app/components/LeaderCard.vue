<script setup lang="ts">
import { computed, ref } from 'vue';

import { siteTheme } from '~/config/theme';

type Leader = {
  id: number;
  name: string;
  designation: string;
  image?: string;
  shortBio: string;
};

const props = withDefaults(
  defineProps<{
    member: Leader;
    featured?: boolean;
  }>(),
  {
    featured: false,
  },
);

const imageFailed = ref(false);

const initials = computed(() =>
  props.member.name
    .split(' ')
    .filter(Boolean)
    .map((name) => name[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
);

const showImage = computed(() => Boolean(props.member.image) && !imageFailed.value);
</script>

<template>
  <article
    :class="[
      siteTheme.components.card.base,
      siteTheme.components.card.background,
      siteTheme.components.card.border,
      siteTheme.components.card.shadow,
      siteTheme.components.card.hover,
      'group overflow-hidden',
      featured && 'sm:grid sm:grid-cols-[minmax(220px,0.75fr)_1fr] sm:items-stretch',
    ]"
  >
    <div
      class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
      :class="featured ? 'aspect-[4/3] sm:aspect-auto' : 'aspect-[4/5]'"
    >
      <img
        v-if="showImage"
        :src="props.member.image"
        :alt="props.member.name"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        @error="imageFailed = true"
      />

      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
        aria-hidden="true"
      >
        <span class="text-6xl font-extrabold text-white/90">{{ initials }}</span>
      </div>
    </div>

    <div :class="siteTheme.components.card.padding">
      <p
        class="text-sm font-semibold tracking-widest uppercase"
        :class="siteTheme.colors.primary.text"
      >
        {{ props.member.designation }}
      </p>

      <h3 class="mt-3 text-2xl font-bold" :class="siteTheme.colors.text.primary">
        {{ props.member.name }}
      </h3>

      <p class="mt-4 leading-7" :class="siteTheme.colors.text.secondary">
        {{ props.member.shortBio }}
      </p>
    </div>
  </article>
</template>
