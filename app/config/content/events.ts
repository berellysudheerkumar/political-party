export type PartyEvent = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  link: string;
  body?: string[];
};

export const eventsContent = {
  eyebrow: 'Upcoming Events',

  title: 'Join Us',

  description:
    'Stay connected with our activities and take part in events happening across our communities.',

  button: {
    text: 'View All Events',
    link: '/events',
  },

  events: [
    {
      id: 1,
      title: 'Community Outreach Programme',
      date: 'August 15, 2026',
      time: '10:00 AM',
      location: 'Hyderabad',
      description:
        'Meet our representatives and community members to discuss local priorities and development initiatives.',
      image:'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
      link: '/events/community-outreach',
    },
    {
      id: 2,
      title: 'Youth Leadership Programme',
      date: 'August 22, 2026',
      time: '11:00 AM',
      location: 'Warangal',
      description:
        'An initiative focused on youth leadership, skills development, education, and future opportunities.',
     image:'https://images.unsplash.com/photo-1511578314322-379afb476865',
      link: '/events/youth-leadership',
    },
    {
      id: 3,
      title: 'Public Meeting',
      date: 'August 30, 2026',
      time: '4:00 PM',
      location: 'Mahabubnagar',
      description:
        'An opportunity for citizens to interact with party representatives and share their views and concerns.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      link: '/events/public-meeting',
    },
  ] satisfies PartyEvent[],
};
