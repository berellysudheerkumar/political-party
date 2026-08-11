type ManifestoPriority = {
  id: string;
};

export const manifestoContent = {
  priorities: [
    {
      id: 'education',
    },
    {
      id: 'healthcare',
    },
    {
      id: 'employment',
    },
    {
      id: 'agriculture',
    },
    {
      id: 'infrastructure',
    },
    {
      id: 'womensWelfare',
    },
    {
      id: 'youthPrograms',
    },
  ] satisfies ManifestoPriority[],

  document: {
    path: '',
  },
};
