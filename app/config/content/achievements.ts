type ImpactArea = {
  title: string;
  description: string;
};

export const achievementsContent = {
  eyebrow: 'Our Impact',

  title: 'Making a Difference',

  description:
    'Our commitment is reflected in the work we do and the positive change we strive to create across communities.',

  achievements: [
    {
      id: 1,
      value: '100+',
      label: 'Community Initiatives',
      description: 'Programs focused on improving the lives of people across communities.',
    },
    {
      id: 2,
      value: '50+',
      label: 'Development Projects',
      description: 'Initiatives supporting infrastructure, education, healthcare, and development.',
    },
    {
      id: 3,
      value: '25K+',
      label: 'People Reached',
      description: 'Citizens and communities reached through our various initiatives.',
    },
    {
      id: 4,
      value: '10+',
      label: 'Years of Service',
      description: 'A continued commitment to public service, progress, and inclusive development.',
    },
  ],

  impactAreas: [
    {
      title: 'Community Wellbeing',
      description:
        'Supporting practical initiatives that respond to the needs and aspirations of local communities.',
    },
    {
      title: 'Development and Opportunity',
      description:
        'Advancing work that strengthens public services, infrastructure, education, and livelihoods.',
    },
    {
      title: 'Inclusive Progress',
      description:
        'Working to ensure that progress reaches citizens and communities across every stage of life.',
    },
  ] satisfies ImpactArea[],

  closing:
    'We measure our work by the difference it makes in people’s lives and by the trust we build through consistent public service.',
};
