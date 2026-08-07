<script setup lang="ts">
import { contactContent } from '~/config/content/contact';

import SectionHeader from '../app/components/shared/SectionHeader.vue';
import { siteTheme } from '~/config/theme';
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          :eyebrow="contactContent.eyebrow"
          :title="contactContent.title"
          :description="contactContent.description"
        />

        <!-- Contact Cards -->
        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in contactContent.contactInfo"
            :key="item.id"
            :class="[
              siteTheme.components.card.base,
              siteTheme.components.card.background,
              siteTheme.components.card.border,
              siteTheme.components.card.shadow,
              siteTheme.components.card.padding,
            ]"
          >
            <h3 class="text-xl font-bold" :class="siteTheme.colors.text.primary">
              {{ item.title }}
            </h3>

            <p class="mt-3" :class="siteTheme.colors.text.secondary">
              {{ item.value }}
            </p>
          </article>
        </div>

        <!-- Social Media -->

        <div class="mt-20 text-center">
          <h2 class="text-3xl font-bold" :class="siteTheme.colors.text.primary">Follow Us</h2>

          <div class="mt-8 flex flex-wrap justify-center gap-5">
            <a
              v-for="social in contactContent.socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="rounded-full border px-6 py-3 font-semibold transition hover:-translate-y-1"
              :class="[siteTheme.components.card.border, siteTheme.colors.text.primary]"
            >
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Placeholder -->
    <section class="bg-gray-50 py-24">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center text-3xl font-bold">Send Us A Message</h2>

        <form class="mt-10 space-y-6">
          <input class="w-full rounded-xl border p-4" :placeholder="contactContent.form.name" />

          <input class="w-full rounded-xl border p-4" :placeholder="contactContent.form.email" />

          <input class="w-full rounded-xl border p-4" :placeholder="contactContent.form.phone" />

          <textarea
            rows="5"
            class="w-full rounded-xl border p-4"
            :placeholder="contactContent.form.message"
          />

          <button
            class="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
          >
            {{ contactContent.form.button }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>
