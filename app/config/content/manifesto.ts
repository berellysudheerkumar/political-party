type ManifestoPriority = {
  id: number;
  title: string;
  description: string;
};

export const manifestoContent = {
  eyebrow: 'Our Manifesto',

  title: 'A practical plan for shared progress',

  description:
    'Our commitments focus on the everyday priorities of citizens and on building stronger, more inclusive communities.',

  introduction:
    'This manifesto sets out the areas where we believe focused action can create lasting opportunity, strengthen public services, and improve quality of life.',

  priorities: [
    {
      id: 1,
      title: 'Education',
      description:
        'Support quality learning environments, accessible education, and skills that prepare every learner for the future.',
    },
    {
      id: 2,
      title: 'Healthcare',
      description:
        'Work toward accessible, affordable, and reliable healthcare for every family and community.',
    },
    {
      id: 3,
      title: 'Employment',
      description:
        'Create conditions for local enterprise, fair opportunity, and meaningful work for people at every stage of life.',
    },
    {
      id: 4,
      title: 'Agriculture',
      description:
        'Stand with farmers through practical support, sustainable practices, and stronger access to markets.',
    },
    {
      id: 5,
      title: 'Infrastructure',
      description:
        'Develop dependable roads, public services, digital connectivity, and essential infrastructure for growing communities.',
    },
    {
      id: 6,
      title: "Women's Welfare",
      description:
        'Champion safety, equal opportunity, health, and economic participation for women in every community.',
    },
    {
      id: 7,
      title: 'Youth Programs',
      description:
        'Expand pathways to education, skills, entrepreneurship, and civic participation for the next generation.',
    },
  ] satisfies ManifestoPriority[],

  document: {
    label: 'Download the Full Manifesto',
    path: '',
  },
};
