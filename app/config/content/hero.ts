import type { ButtonVariant } from '~/types/ui';

type HeroContent = {
  slogan: string;

  message: string;

  leaderImage: {
    src: string;
    alt: string;
  };

  primaryButton: {
    text: string;
    link: string;
    variant: ButtonVariant;
  };

  secondaryButton: {
    text: string;
    link: string;
    variant: ButtonVariant;
  };

  stats: {
    value: string;
    label: string;
  }[];
};

export const heroContent = {
  slogan: 'Together for a Better Tomorrow',

  message: 'Working towards development, transparency, equality and prosperity for every citizen.',

  leaderImage: {
    src: '',
    alt: 'Party Leader',
  },

  primaryButton: {
    text: 'Join the Movement',
    link: '/contact',
    variant: 'secondary',
  },

  secondaryButton: {
    text: 'Read Manifesto',
    link: '/manifesto',
    variant: 'outline',
  },

  stats: [
    {
      value: '25+',
      label: 'Years Service',
    },
    {
      value: '100+',
      label: 'Initiatives',
    },
    {
      value: '1M+',
      label: 'Supporters',
    },
  ],
} satisfies HeroContent;
