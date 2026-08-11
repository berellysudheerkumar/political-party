<script setup lang="ts">
import LeaderCard from '~/components/LeaderCard.vue';
import { leadershipContent } from '~/config/content/leadership';

import BaseButton from '~/components/shared/BaseButton.vue';
const { t } = useI18n();
</script>

<template>
  <section class="py-24">
    <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <LeaderCard v-for="member in leadershipContent.members" :key="member.id" :member="member" />
    </div>

    <div class="mt-14 text-center">
      <BaseButton :text="t('leadership.button.text')" to="/leadership" />
    </div>
  </section>
</template>
