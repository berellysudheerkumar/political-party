<script setup lang="ts">
defineProps<{
  article: any | null;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <div
    v-if="article"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
    @click.self="emit('close')"
  >
    <article class="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
      <img :src="article.image" :alt="article.title" class="h-72 w-full object-cover" />

      <div class="p-8">
        <p class="text-sm text-gray-500">
          {{ article.date }}
        </p>

        <h2 class="mt-3 text-3xl font-bold text-gray-900">
          {{ article.title }}
        </h2>

        <p class="mt-6 leading-8 text-gray-600">
          {{ article.content }}
        </p>

        <button
          class="mt-8 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          @click="emit('close')"
        >
          Close
        </button>
      </div>
    </article>
  </div>
</template>
