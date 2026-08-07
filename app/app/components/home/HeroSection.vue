<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { heroContent } from '~/config/content/hero';
import { siteTheme } from '~/config/theme';
import BaseButton from '~/app/components/shared/BaseButton.vue';

// Dynamic imagery curated for a political/campaign aesthetic
const campaignImages = {
  // Large rally / engaged crowd / inspiring moment
  primary:
    'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2000&auto=format&fit=crop',
  // Grassroots / community working together
  secondary:
    'https://images.unsplash.com/photo-1593115057322-e94bfa3a4eb1?q=80&w=1000&auto=format&fit=crop',
};

// Subtle entry animation trigger
const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden bg-slate-950 pt-24 text-white"
    :class="siteTheme.components.hero.background"
  >
    <!-- Animated Ambient Background ("New Dawn" Lighting) -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <!-- Amber/Gold glow symbolizing sunrise and hope -->
      <div
        class="animate-blob absolute -top-[10%] -left-[10%] h-[70vh] w-[70vw] rounded-full bg-amber-600/15 mix-blend-screen blur-[130px]"
      />
      <!-- Deep Blue glow symbolizing trust and stability -->
      <div
        class="animate-blob animation-delay-2000 absolute top-[20%] -right-[10%] h-[80vh] w-[60vw] rounded-full bg-blue-700/20 mix-blend-screen blur-[140px]"
      />
      <!-- Subtle red/warm accent -->
      <div
        class="animate-blob animation-delay-4000 absolute -bottom-[20%] left-[20%] h-[60vh] w-[60vw] rounded-full bg-rose-700/10 mix-blend-screen blur-[120px]"
      />

      <!-- Subtle Noise Texture Overlay for a premium, cinematic feel -->
      <div
        class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"
      />
    </div>

    <div
      class="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-12 lg:grid-cols-12 lg:py-24"
    >
      <!-- Content (Left Column) -->
      <div
        class="max-w-2xl transition-all duration-1000 ease-out lg:col-span-5"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <!-- Campaign Tag/Badge -->
        <div
          class="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 shadow-lg shadow-black/20 backdrop-blur-md"
        >
          <span class="relative flex h-3 w-3">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"
            ></span>
            <span class="relative inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
          </span>
          <span class="text-xs font-bold tracking-widest text-white/90 uppercase"
            >A Vision For Tomorrow</span
          >
        </div>

        <!-- Monumental Typography -->
        <h1 class="text-5xl leading-[1.10] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <!-- You can bind this to heroContent.slogan -->
          United for <br />
          <span
            class="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent"
          >
            Real Progress.
          </span>
        </h1>

        <p
          class="mt-8 text-lg leading-relaxed font-medium text-slate-300"
          :class="siteTheme.components.hero.description.text"
        >
          <!-- You can bind this to heroContent.message -->
          Join a movement built on community, trust, and relentless dedication to the people.
          Together, we are writing the next great chapter of our history.
        </p>

        <!-- Actions -->
        <div class="mt-10 flex flex-wrap gap-5">
          <BaseButton
            :text="heroContent.primaryButton.text || 'Join the Movement'"
            :to="heroContent.primaryButton.link"
            :variant="heroContent.primaryButton.variant"
            class="rounded-full border-none bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(217,119,6,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(217,119,6,0.5)]"
          />

          <BaseButton
            :text="heroContent.secondaryButton.text || 'Read Our Platform'"
            :to="heroContent.secondaryButton.link"
            :variant="heroContent.secondaryButton.variant"
            class="rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-slate-700/50"
          />
        </div>

        <!-- Campaign Stats/Pillars -->
        <div class="mt-16 flex items-center gap-10 border-t border-slate-700/50 pt-8">
          <div v-for="item in heroContent.stats" :key="item.label" class="flex flex-col gap-1">
            <p class="text-3xl font-black tracking-tight text-white drop-shadow-md">
              {{ item.value }}
            </p>
            <p
              class="text-sm font-bold tracking-wide text-amber-500 uppercase"
              :class="siteTheme.components.hero.badge.text"
            >
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Floating Campaign Imagery (Right Column) -->
      <div class="perspective-1000 relative hidden h-[750px] w-full lg:col-span-7 lg:block">
        <!-- Main Rally/Crowd Image -->
        <div
          class="animate-float absolute top-[10%] left-[10%] z-10 h-[70%] w-[75%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-1000 ease-out"
          :class="isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
        >
          <!-- Gradient overlay to ensure the image feels integrated and text-safe -->
          <div
            class="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/80 via-slate-900/20 to-transparent mix-blend-multiply"
          />
          <img
            :src="campaignImages.primary"
            alt="Campaign Rally"
            class="h-full w-full object-cover transition-transform duration-[10s] ease-out hover:scale-110"
          />
        </div>

        <!-- Grassroots / Community Card -->
        <div
          class="animate-float-delayed group absolute bottom-[5%] left-0 z-20 h-[40%] w-[45%] overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-900/40 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all delay-200 duration-1000 ease-out"
          :class="isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'"
        >
          <img
            :src="campaignImages.secondary"
            alt="Community Action"
            class="h-full w-full object-cover opacity-75 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div
            class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6"
          >
            <div
              class="mb-3 h-1.5 w-12 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
            />
            <p class="text-base font-bold tracking-wide text-white">Grassroots Action</p>
            <p class="mt-1 text-xs font-medium text-slate-300">Powered by everyday people.</p>
          </div>
        </div>

        <!-- The "Pillar" Glass Card -->
        <div
          class="animate-float absolute top-[5%] right-[5%] z-20 flex h-[35%] w-[35%] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/20 bg-slate-800/60 p-6 text-center shadow-2xl backdrop-blur-2xl transition-all delay-300 duration-1000 ease-out"
          :class="isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'"
        >
          <div
            class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
          />

          <!-- Monumental Icon (Star/Shield/Handshake) -->
          <div
            class="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-slate-500 bg-slate-700/50 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <svg
              class="h-8 w-8 text-amber-400 drop-shadow-md"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
          <h3 class="relative z-10 mb-2 text-xl font-extrabold tracking-tight text-white">
            Our Promise
          </h3>
          <p class="relative z-10 text-sm font-medium text-slate-300">
            Integrity, transparency, and a commitment to all.
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Monumental Transition / Soft Wave -->
    <div
      class="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none drop-shadow-[0_-10px_20px_rgba(0,0,0,0.2)]"
    >
      <!-- A clean, strong swoosh instead of a jagged edge, giving a feeling of smooth upward momentum -->
      <svg
        class="relative block h-[80px] w-full"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0V120H1200V0C1000,100,500,100,0,0Z" class="fill-white" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

/* Cinematic background lighting blobs */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 15s infinite alternate ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Floating animations for the mosaic panels */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes float-delayed {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 9s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 11s ease-in-out infinite;
}
</style>
