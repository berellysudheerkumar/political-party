import type { ButtonVariant } from '~/types/ui';

type HeroContent = {
  slogan: string;

  message: string;

  campaignImages: {
    background: {
      src: string;
      alt: string;
    };

    primary: {
      src: string;
      alt: string;
    };

    secondary: {
      src: string;
      alt: string;
    };
  };

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

  campaignImages: {
    background: {
      src: '/images/gallery/visharadan-rally-bg.jpeg',
      alt: 'Public rally and community gathering',
    },
    primary: {
      src: '/images/gallery/bg-part-1.jpg',
      alt: 'Public rally and community gathering',
    },

    secondary: {
      src: '/images/gallery/bg-part-1.jpg',
      alt: 'Community volunteers working together',
    },
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
