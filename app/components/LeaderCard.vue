<script setup lang="ts">
import { siteTheme } from '~/config/theme';

const { t } = useI18n();

const props = defineProps<{
  member: {
    id: string;
    image?: string;
  };
}>();
</script>

<template>
  <article
    :class="[
      siteTheme.components.card.base,
      siteTheme.components.card.hover, // If you separated hover effects as discussed
      'group overflow-hidden !p-0',
    ]"
  >
    <NuxtLink :to="`/leadership/${member.id}`">
      <div class="aspect-[4/3] overflow-hidden">
        <img
          v-if="member.image"
          :src="member.image"
          :alt="t(`leadership.members.${member.id}.name`)"
          class="h-full w-full object-cover"
        />
      </div>
    </NuxtLink>

    <!-- Content -->
    <div class="p-6">
      <h3 :class="['text-xl font-bold', siteTheme.colors.text.primary]">
        {{ t(`leadership.members.${member.id}.name`) }}
      </h3>

      <p :class="['mt-2 text-sm font-semibold', siteTheme.colors.accent.text]">
        {{ t(`leadership.members.${member.id}.designation`) }}
      </p>

      <p :class="['mt-4 leading-7', siteTheme.colors.text.secondary]">
        {{ t(`leadership.members.${member.id}.shortBio`) }}
      </p>
    </div>
  </article>
</template>
