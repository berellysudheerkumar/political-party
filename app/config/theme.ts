/**
 * 1. Design Tokens
 * Change these base classes to re-theme the entire application instantly.
 */
const tokens = {
  primary: {
    bg: 'bg-amber-600',
    hover: 'hover:bg-amber-700',
    text: 'text-amber-600',
    focus: 'focus:ring-amber-600',
  },
  dark: {
    bg: 'bg-blue-950',
    hover: 'hover:bg-blue-900',
    text: 'text-blue-950',
    border: 'border-blue-900',
  },
  light: { bg: 'bg-amber-50', text: 'text-white', border: 'border-amber-200' },
  surface: { bg: 'bg-amber-100/60' },
  text: { main: 'text-stone-900', muted: 'text-stone-700', alt: 'text-blue-200' },
  border: { default: 'border-amber-200' },
};

/**
 * 2. Reusable Theme Configuration
 */
export const siteTheme = {
  colors: {
    text: {
      primary: tokens.text.main,
      secondary: tokens.text.muted,
      inverse: tokens.light.text,
    },
    background: {
      default: tokens.light.bg,
      surface: tokens.surface.bg,
      dark: tokens.dark.bg,
    },
    accent: {
      background: tokens.primary.bg,
      hover: tokens.primary.hover,
      text: tokens.primary.text,
    },
    border: tokens.border.default,
  },

  typography: {
    font: { english: 'font-english', telugu: 'font-telugu' },

    heading: {
      large: 'text-5xl lg:text-7xl font-extrabold tracking-tight',
      medium: 'text-3xl lg:text-4xl font-bold tracking-tight',
      small: 'text-xl font-bold',
    },

    body: {
      large: 'text-xl leading-8',
      normal: 'text-base leading-7',
      small: 'text-sm',
    },
    navigation: 'font-medium',
    button: 'font-semibold',
  },
  components: {
    button: {
      base: 'rounded-xl px-6 py-3.5 transition-all duration-300 font-semibold shadow-sm',
      primary: `${tokens.primary.bg} ${tokens.primary.hover} text-white`,
      secondary: `${tokens.dark.bg} ${tokens.dark.hover} text-white`,
      outline: `bg-transparent border ${tokens.dark.border} ${tokens.dark.text} ${tokens.dark.hover} hover:text-white`,
    },

    // Grouped layout sections to reduce repetition
    layout: {
      navbar: {
        base: 'bg-amber-50/90 backdrop-blur-md border-b border-amber-200',
        scrolled: 'bg-amber-50/95 backdrop-blur-md shadow-lg border-b border-amber-200',
        link: `${tokens.text.main} hover:${tokens.primary.text}`,
      },
      hero: {
        wrapper: tokens.dark.bg,
        title: 'text-white',
        subtitle: tokens.text.alt,
      },
      footer: {
        wrapper: tokens.dark.bg,
        text: tokens.text.alt,
        link: `${tokens.text.alt} hover:text-white`,
      },
    },

    card: {
      base: 'bg-amber-50/80 border border-amber-200 rounded-2xl p-6 shadow-sm transition-all duration-300',
      hover: 'hover:-translate-y-1 hover:shadow-lg',
    },

    forms: {
      input: `bg-amber-50 border border-amber-200 ${tokens.text.main} focus:ring-2 ${tokens.primary.focus}`,
      label: `${tokens.text.main} font-medium`,
      error: 'text-red-600 text-sm',
    },

    // Abstracted icons/accents
    iconBox: {
      base: `border border-amber-200 bg-amber-100/60 ${tokens.primary.text}`,
      hover: `group-hover:border-amber-600 group-hover:${tokens.primary.bg} group-hover:text-white`,
    },
  },
};
