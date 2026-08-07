<script setup lang="ts">
import { ref, computed } from 'vue';
import { siteTheme } from '~/config/theme';
import { galleryContent } from '~/config/content/gallery'; 

// Track the current active slide
const activeIndex = ref(0);

const next = () => {
  if (galleryContent?.items) {
    activeIndex.value = (activeIndex.value + 1) % galleryContent.items.length;
  }
};

const prev = () => {
  if (galleryContent?.items) {
    activeIndex.value = (activeIndex.value - 1 + galleryContent.items.length) % galleryContent.items.length;
  }
};

// Get the currently active image to use as a dynamic ambient background
const activeImage = computed(() => {
  if (!galleryContent?.items?.length) return '';
  return galleryContent.items[activeIndex.value].image;
});
</script>

<template>
  <section class="relative py-24 md:py-32 overflow-hidden bg-slate-950">
    
    <!-- Dynamic Ambient Background (Fills the section with a glowing, blurred version of the active image) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Transition name="bg-fade">
        <img 
          :key="activeImage"
          :src="activeImage" 
          class="absolute inset-0 w-full h-full object-cover opacity-20 blur-[100px] scale-125 saturate-200 transition-all duration-1000"
          alt=""
        />
      </Transition>
      <!-- Dark gradient overlay to ensure the background isn't too distracting -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
    </div>

    <!-- Section Header (Optional, keeps context) -->
    <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
      <h2 class="text-xs font-black tracking-[0.2em] uppercase text-white/50 mb-3">
        {{ galleryContent?.eyebrow || 'Campaign Gallery' }}
      </h2>
      <p class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Moments in Motion
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="relative z-10 mx-auto max-w-[100vw] px-4">
      
      <!-- 
        3D Perspective Track
        Height is explicitly set to give the cards room to breathe and scale 
      -->
      <div class="relative w-full h-[500px] md:h-[650px] flex items-center justify-center [perspective:1200px]">
        
        <template v-for="(item, index) in galleryContent?.items" :key="item.id">
          <!-- 
            Cinematic Card Wrapper
            Uses math to calculate distance from center (diff) and applies 
            scale, opacity, and blur dynamically based on that distance.
          -->
          <div 
            class="absolute top-0 bottom-0 w-[80vw] sm:w-[400px] md:w-[500px] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            :class="index === activeIndex ? 'z-30 cursor-default' : 'z-10 cursor-pointer'"
            @click="index !== activeIndex && (activeIndex = index)"
            :style="{
              left: '50%',
              /* 
                Math breakdown:
                - Center horizontally
                - Shift left/right based on distance from active
                - Scale down inactive items
              */
              transform: `
                translateX(calc(-50% + ${(index - activeIndex) * 110}%))
                scale(${1 - Math.min(Math.abs(index - activeIndex) * 0.15, 0.4)})
              `,
              opacity: Math.abs(index - activeIndex) > 1 ? 0 : 1,
              /* Blur items that are not active for depth of field */
              filter: `blur(${Math.min(Math.abs(index - activeIndex) * 8, 12)}px) brightness(${index === activeIndex ? '1' : '0.5'})`,
              pointerEvents: Math.abs(index - activeIndex) > 1 ? 'none' : 'auto'
            }"
          >
            <!-- Premium Card Styling -->
            <div 
              class="group relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-900"
              :class="{ 'ring-2 ring-blue-500/50 shadow-blue-900/20': index === activeIndex }"
            >
              <!-- Main Image -->
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-[2000ms] ease-out"
                :class="{ 'scale-105': index === activeIndex }"
              />

              <!-- Rich Gradient Overlay (Only solidifies on the active card) -->
              <div 
                class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent transition-opacity duration-700"
                :class="index === activeIndex ? 'opacity-90' : 'opacity-0'"
              />

              <!-- Floating Title (Only reveals on active card) -->
              <div class="absolute bottom-0 left-0 right-0 p-8 md:p-10 overflow-hidden">
                <div 
                  class="transition-all duration-700 delay-100"
                  :class="index === activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
                >
                  <!-- Accent Line -->
                  <div class="w-12 h-1 mb-4 rounded-full bg-blue-500" :class="siteTheme.colors.primary.background" />
                  
                  <h3 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
                    {{ item.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </template>

      </div>

      <!-- Glassmorphic Floating Controls -->
      <div class="relative z-40 mt-12 flex justify-center items-center gap-6">
        <button 
          @click="prev" 
          class="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] focus:outline-none"
          aria-label="Previous image"
        >
          <svg class="h-6 w-6 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        
        <!-- Elegant Indicator Dots -->
        <div class="flex gap-2">
          <div 
            v-for="(_, index) in galleryContent?.items" 
            :key="'dot-'+index"
            class="h-1.5 rounded-full transition-all duration-500"
            :class="index === activeIndex ? 'w-8 bg-blue-500' : 'w-1.5 bg-white/20'"
          />
        </div>

        <button 
          @click="next" 
          class="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] focus:outline-none"
          aria-label="Next image"
        >
          <svg class="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Crossfade transition for the ambient background image */
.bg-fade-enter-active,
.bg-fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.bg-fade-enter-from,
.bg-fade-leave-to {
  opacity: 0;
}
</style>