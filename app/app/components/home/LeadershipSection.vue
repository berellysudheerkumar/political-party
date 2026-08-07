<script setup lang="ts">
import LeaderCard from '~/app/components/LeaderCard.vue';
import { leadershipContent } from '~/config/content/leadership';

import BaseButton from '../../components/shared/BaseButton.vue';
import SectionHeader from '../../components/shared/SectionHeader.vue';
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        :eyebrow="leadershipContent.eyebrow"
        :title="leadershipContent.title"
        :description="leadershipContent.description"
      />

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <LeaderCard v-for="member in leadershipContent.members" :key="member.id" :member="member" />
      </div>

      <div class="mt-14 text-center">
        <BaseButton :text="leadershipContent.button.text" :to="leadershipContent.button.link" />
      </div>
    </div>
  </section>
</template>
