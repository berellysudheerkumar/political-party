type ImpactArea = {
  id: string;
};

export const achievementsContent = {
  achievements: [
    {
      id: 'communityInitiatives',
      value: '100+',
    },
    {
      id: 'developmentProjects',
      value: '50+',
    },
    {
      id: 'peopleReached',
      value: '25K+',
    },
    {
      id: 'yearsOfService',
      value: '10+',
    },
  ],

  impactAreas: [
    {
      id: 'communityWellbeing',
    },
    {
      id: 'developmentOpportunity',
    },
    {
      id: 'inclusiveProgress',
    },
  ],
} satisfies {
  achievements: {
    id: string;
    value: string;
  }[];
  impactAreas: ImpactArea[];
};
