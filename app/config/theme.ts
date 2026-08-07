export const siteTheme = {
  /**
   * Global reusable colors
   */
  colors: {
    primary: {
      background: 'bg-blue-700',
      hover: 'hover:bg-blue-800',
      text: 'text-blue-700',
    },

    secondary: {
      background: 'bg-gray-100',
      hover: 'hover:bg-gray-200',
      text: 'text-gray-700',
    },

    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
      inverse: 'text-white',
      paragraph: 'text-blue-200',
    },

    background: {
      default: 'bg-white',
      surface: 'bg-gray-50',
      dark: 'bg-gray-900',
    },

    border: {
      default: 'border-gray-200',
    },
  },

  /**
   * Global typography
   */
  typography: {
    heading: {
      large: 'text-5xl lg:text-7xl font-extrabold',
      medium: 'text-3xl lg:text-4xl font-bold',
      small: 'text-xl font-bold',
    },

    body: {
      large: 'text-xl leading-8',
      normal: 'text-base leading-7',
      small: 'text-sm',
    },

    navigation: 'font-medium',

    button: 'font-semibold',

    text: 'text-gray-700',
  },

  /**
   * Component specific styling
   */
  components: {
    button: {
      primary: {
        background: 'bg-blue-700',
        hover: 'hover:bg-blue-800',
        text: 'text-white',
      },

      secondary: {
        background: 'bg-white',
        hover: 'hover:bg-gray-100',
        text: 'text-blue-700',
      },

      outline: {
        background: 'bg-transparent',
        border: 'border border-white',
        hover: 'hover:bg-white hover:text-blue-700',
        text: 'text-white',
      },

      base: 'rounded-xl px-6 py-3.5 transition-all duration-300 font-semibold',
    },

    navbar: {
      background: 'bg-white',

      scrolled: {
        shadow: 'shadow-lg',
        background: 'bg-white/95 backdrop-blur-md',
      },

      text: {
        default: 'text-gray-800',
        hover: 'hover:text-blue-600',
        muted: 'text-gray-600',
      },

      button: {
        background: 'bg-blue-700',
        hover: 'hover:bg-blue-800',
        text: 'text-white',
      },

      mobileMenu: {
        background: 'bg-white',
        border: 'border-gray-200',
      },
    },

    hero: {
      background: 'bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600',

      badge: {
        text: 'text-blue-200',
      },

      title: {
        text: 'text-white',
      },

      description: {
        text: 'text-blue-100',
      },

      buttons: {
        primary: {
          background: 'bg-white',
          text: 'text-blue-700',
          hover: 'hover:bg-gray-100',
        },

        secondary: {
          background: 'border-white',
          text: 'text-white',
          hover: 'hover:bg-white hover:text-blue-700',
        },
      },
    },

    card: {
      base: 'rounded-2xl transition-all duration-300',
      background: 'bg-white',
      border: 'border border-gray-200',
      shadow: 'shadow-lg',
      hover: 'hover:-translate-y-2 hover:shadow-xl',
      padding: 'p-6',
    },

    footer: {
      background: 'bg-gray-900',

      title: 'text-white font-bold',

      text: 'text-gray-400',

      link: 'text-gray-300 hover:text-white',
    },

    visionMission: {
      title: 'text-3xl font-bold tracking-tight text-slate-900',

      description: 'mt-4 text-lg leading-relaxed text-slate-600',

      missionIcon: 'bg-blue-50 text-blue-700',

      visionIcon: 'bg-amber-50 text-amber-600',
    },

    forms: {
      input: {
        background: 'bg-white',

        border: 'border border-gray-300',

        text: 'text-gray-900',

        focus: 'focus:ring-2 focus:ring-blue-600',
      },

      label: 'text-gray-700 font-medium',

      error: 'text-red-600 text-sm',
    },
  },
};
