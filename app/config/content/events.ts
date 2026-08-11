export type PartyEvent = {
  id: string;
  image?: string;
  link: string;
};

export const eventsContent = {
  events: [
    {
      id: 'communityOutreach',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
      link: '/events/community-outreach',
    },
    {
      id: 'youthLeadership',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      link: '/events/youth-leadership',
    },
    {
      id: 'publicMeeting',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      link: '/events/public-meeting',
    },
  ],
} satisfies {
  events: PartyEvent[];
};
