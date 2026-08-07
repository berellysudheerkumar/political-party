<script setup lang="ts">
import { contactContent } from '~/config/content/contact';
import { siteTheme } from '~/config/theme';
</script>

<template>
  <main class="overflow-hidden">
    <!-- ========================================================= -->
    <!-- HERO -->
    <!-- ========================================================= -->

    <section
      :class="[
        'relative overflow-hidden pt-28 pb-36 lg:pt-36 lg:pb-44',
        siteTheme.colors.background.dark,
      ]"
    >
      <!-- Background glow -->
      <div class="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div class="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <!-- Noise -->
      <div
        class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"
      />

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-4xl">
          <!-- Eyebrow -->
          <div class="mb-8 flex items-center gap-4">
            <span :class="['h-px w-12', siteTheme.components.contact.eyebrow.line]" />

            <span :class="siteTheme.components.contact.eyebrow.text">
              {{ contactContent.hero.eyebrow }}
            </span>
          </div>

          <!-- Title -->
          <h1
            :class="[
              'max-w-4xl',
              siteTheme.typography.heading.large,
              siteTheme.components.hero.title.text,
            ]"
          >
            {{ contactContent.hero.title }}
          </h1>

          <!-- Description -->
          <p
            :class="[
              'mt-8 max-w-2xl',
              siteTheme.typography.body.large,
              siteTheme.components.hero.description.text,
            ]"
          >
            {{ contactContent.hero.description }}
          </p>

          <!-- Buttons -->
          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#message"
              :class="[
                siteTheme.components.button.base,
                siteTheme.components.button.primary.background,
                siteTheme.components.button.primary.hover,
                siteTheme.components.button.primary.text,
                'inline-flex items-center justify-center rounded-full px-8 py-4',
              ]"
            >
              {{ contactContent.hero.primaryButton }}

              <Icon name="lucide:arrow-down" class="ml-2 h-5 w-5" />
            </a>

            <a
              href="#connect"
              :class="[
                siteTheme.components.button.base,
                siteTheme.components.button.outline.border,
                siteTheme.components.button.outline.hover,
                siteTheme.components.button.outline.text,
                'inline-flex items-center justify-center rounded-full px-8 py-4',
              ]"
            >
              {{ contactContent.hero.secondaryButton }}

              <Icon name="lucide:arrow-right" class="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- CONTACT INFORMATION -->
    <!-- ========================================================= -->

    <section
      :class="[
        'relative overflow-hidden py-24 lg:py-32',
        siteTheme.components.contact.section.background,
      ]"
    >
      <!-- Subtle background glow -->
      <div
        :class="[
          'absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl',
          siteTheme.components.contact.section.glow,
        ]"
      />

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <!-- LEFT -->
          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-4">
              <span :class="['h-px w-10', siteTheme.components.contact.eyebrow.line]" />

              <span :class="siteTheme.components.contact.eyebrow.text"> CONTACT </span>
            </div>

            <h2
              :class="[
                'mt-7 max-w-xl text-5xl leading-tight font-black tracking-tight sm:text-6xl',
                siteTheme.components.contact.title.text,
              ]"
            >
              We're here
              <span class="text-blue-500"> to listen. </span>
            </h2>

            <p
              :class="[
                'mt-6 max-w-lg text-lg leading-8',
                siteTheme.components.contact.description.text,
              ]"
            >
              Have a question, suggestion, or simply want to connect? Reach out to us. We'd love to
              hear from you.
            </p>
          </div>

          <!-- RIGHT -->
          <div class="flex flex-col justify-center">
            <div
              v-for="item in contactContent.contactInfo"
              :key="item.id"
              :class="[
                'group flex items-center gap-5 border-b py-6 first:pt-0 last:border-b-0',
                siteTheme.components.contact.item.border,
              ]"
            >
              <!-- Icon -->
              <div
                :class="[
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                  siteTheme.components.contact.item.icon.base,
                  siteTheme.components.contact.item.icon.text,
                  siteTheme.components.contact.item.icon.hover,
                ]"
              >
                <Icon :name="item.icon" class="h-5 w-5" />
              </div>

              <!-- Details -->
              <div class="min-w-0">
                <p :class="siteTheme.components.contact.item.label">
                  {{ item.label }}
                </p>

                <h3 :class="['mt-1', siteTheme.components.contact.item.title]">
                  {{ item.title }}
                </h3>

                <p :class="['mt-1', siteTheme.components.contact.item.value]">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- MESSAGE SECTION -->
    <!-- ========================================================= -->

    <section id="message" class="scroll-mt-24 py-28 lg:py-36">
      <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <!-- LEFT -->
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-4">
            <span :class="['h-px w-10', siteTheme.components.contact.eyebrow.line]" />

            <span :class="siteTheme.components.contact.eyebrow.text">
              {{ contactContent.messageSection.eyebrow }}
            </span>
          </div>

          <h2 :class="['mt-6', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
            {{ contactContent.messageSection.title }}
          </h2>

          <p
            :class="[
              'mt-6 max-w-lg',
              siteTheme.typography.body.large,
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ contactContent.messageSection.description }}
          </p>

          <div
            :class="[
              'mt-10 flex items-center gap-4 rounded-2xl p-5',
              siteTheme.colors.background.surface,
            ]"
          >
            <div
              :class="[
                'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                siteTheme.colors.primary.background,
                siteTheme.colors.text.inverse,
              ]"
            >
              <Icon name="lucide:message-circle" class="h-5 w-5" />
            </div>

            <div>
              <p :class="[siteTheme.typography.button, siteTheme.colors.text.primary]">
                Every message matters.
              </p>

              <p :class="[siteTheme.typography.body.small, siteTheme.colors.text.muted]">
                Your voice helps shape our priorities.
              </p>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div
          :class="[
            siteTheme.components.card.base,
            siteTheme.components.card.background,
            siteTheme.components.card.border,
            siteTheme.components.card.shadow,
            'rounded-3xl p-7 sm:p-10',
          ]"
        >
          <form class="space-y-6">
            <!-- Name -->
            <div>
              <label :class="siteTheme.components.forms.label"> Name </label>

              <input
                type="text"
                :placeholder="contactContent.messageSection.form.name"
                :class="[
                  'mt-2 w-full rounded-xl px-5 py-4 transition outline-none',
                  siteTheme.components.forms.input.background,
                  siteTheme.components.forms.input.border,
                  siteTheme.components.forms.input.text,
                  siteTheme.components.forms.input.focus,
                ]"
              />
            </div>

            <!-- Email -->
            <div>
              <label :class="siteTheme.components.forms.label"> Email </label>

              <input
                type="email"
                :placeholder="contactContent.messageSection.form.email"
                :class="[
                  'mt-2 w-full rounded-xl px-5 py-4 transition outline-none',
                  siteTheme.components.forms.input.background,
                  siteTheme.components.forms.input.border,
                  siteTheme.components.forms.input.text,
                  siteTheme.components.forms.input.focus,
                ]"
              />
            </div>

            <!-- Phone -->
            <div>
              <label :class="siteTheme.components.forms.label"> Phone </label>

              <input
                type="tel"
                :placeholder="contactContent.messageSection.form.phone"
                :class="[
                  'mt-2 w-full rounded-xl px-5 py-4 transition outline-none',
                  siteTheme.components.forms.input.background,
                  siteTheme.components.forms.input.border,
                  siteTheme.components.forms.input.text,
                  siteTheme.components.forms.input.focus,
                ]"
              />
            </div>

            <!-- Message -->
            <div>
              <label :class="siteTheme.components.forms.label"> Message </label>

              <textarea
                rows="5"
                :placeholder="contactContent.messageSection.form.message"
                :class="[
                  'mt-2 w-full resize-none rounded-xl px-5 py-4 transition outline-none',
                  siteTheme.components.forms.input.background,
                  siteTheme.components.forms.input.border,
                  siteTheme.components.forms.input.text,
                  siteTheme.components.forms.input.focus,
                ]"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :class="[
                siteTheme.components.button.base,
                siteTheme.components.button.primary.background,
                siteTheme.components.button.primary.hover,
                siteTheme.components.button.primary.text,
                'flex w-full items-center justify-center rounded-xl px-6 py-4',
              ]"
            >
              {{ contactContent.messageSection.form.button }}

              <Icon name="lucide:arrow-right" class="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SOCIAL / CONNECT -->
    <!-- ========================================================= -->

    <section
      id="connect"
      :class="['scroll-mt-24 py-28 lg:py-36', siteTheme.colors.background.surface]"
    >
      <div class="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <!-- LEFT -->
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-4">
            <span :class="['h-px w-10', siteTheme.components.contact.eyebrow.line]" />

            <span :class="siteTheme.components.contact.eyebrow.text">
              {{ contactContent.connectSection.eyebrow }}
            </span>
          </div>

          <h2 :class="['mt-6', siteTheme.typography.heading.medium, siteTheme.colors.text.primary]">
            {{ contactContent.connectSection.title }}
          </h2>

          <p
            :class="[
              'mt-6 max-w-xl',
              siteTheme.typography.body.large,
              siteTheme.colors.text.secondary,
            ]"
          >
            {{ contactContent.connectSection.description }}
          </p>

          <!-- Location -->
          <div class="mt-10 flex items-center gap-4">
            <div
              :class="[
                'flex h-12 w-12 items-center justify-center rounded-full shadow-sm',
                siteTheme.colors.background.default,
              ]"
            >
              <Icon name="lucide:map-pin" :class="['h-5 w-5', siteTheme.colors.primary.text]" />
            </div>

            <div>
              <p :class="[siteTheme.typography.button, siteTheme.colors.text.primary]">
                {{ contactContent.connectSection.location.title }}
              </p>

              <p :class="[siteTheme.typography.body.small, siteTheme.colors.text.muted]">
                {{ contactContent.connectSection.location.value }}
              </p>
            </div>
          </div>
        </div>

        <!-- SOCIAL -->
        <div
          :class="[
            'flex flex-col justify-center rounded-3xl p-8 sm:p-12',
            siteTheme.colors.background.dark,
          ]"
        >
          <p
            :class="[
              'text-xs font-black tracking-[0.25em]',
              siteTheme.components.contact.eyebrow.text,
            ]"
          >
            FOLLOW THE JOURNEY
          </p>

          <h3 :class="['mt-4', siteTheme.typography.heading.small, siteTheme.colors.text.inverse]">
            Stay connected with us.
          </h3>

          <p
            :class="[
              'mt-4 max-w-md',
              siteTheme.typography.body.normal,
              siteTheme.colors.text.muted,
            ]"
          >
            Follow our latest updates, initiatives, conversations, and community work.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <a
              v-for="social in contactContent.socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              <Icon :name="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- FINAL CTA -->
    <!-- ========================================================= -->

    <section :class="['relative overflow-hidden', siteTheme.colors.primary.background]">
      <div class="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div class="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-950/20 blur-3xl" />

      <div class="relative mx-auto max-w-5xl px-6 py-28 text-center lg:py-36">
        <p class="text-xs font-black tracking-[0.3em] text-blue-200">
          {{ contactContent.finalCta.eyebrow }}
        </p>

        <h2
          :class="[
            'mx-auto mt-6 max-w-4xl',
            siteTheme.typography.heading.medium,
            siteTheme.colors.text.inverse,
          ]"
        >
          {{ contactContent.finalCta.title }}
        </h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          {{ contactContent.finalCta.description }}
        </p>

        <a
          href="#message"
          :class="[
            siteTheme.components.button.base,
            siteTheme.components.button.secondary.background,
            siteTheme.components.button.secondary.hover,
            siteTheme.components.button.secondary.text,
            'mt-10 inline-flex items-center rounded-full px-8 py-4 shadow-xl',
          ]"
        >
          {{ contactContent.finalCta.button }}

          <Icon name="lucide:arrow-right" class="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  </main>
</template>
