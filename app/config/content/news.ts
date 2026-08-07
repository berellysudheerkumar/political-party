export type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  link: string;
  body?: string[];
};

export const newsContent = {
  eyebrow: 'Latest News',

  title: 'News & Updates',

  description:
    'Stay informed about our latest activities, initiatives, announcements, and developments.',

  button: {
    text: 'View All News',
    link: '/news',
  },

  articles: [
    {
      id: 1,
      title: 'Community Development Initiative Launched',
      excerpt:
        'A new initiative focused on strengthening local communities and creating opportunities for sustainable development.',
      date: 'August 5, 2026',
      category: 'Development',
      image: '/images/news/community-development.webp',
      link: '/news/community-development-initiative',
    },
    {
      id: 2,
      title: 'Leadership Meets Local Community Representatives',
      excerpt:
        'Party leadership held discussions with community representatives to understand local priorities and development needs.',
      date: 'August 2, 2026',
      category: 'Community',
      image: '/images/news/community-meeting.webp',
      link: '/news/leadership-community-meeting',
    },
    {
      id: 3,
      title: 'New Programme for Youth Empowerment',
      excerpt:
        'A new programme has been announced to support youth development, education, skills, and employment opportunities.',
      date: 'July 28, 2026',
      category: 'Youth',
      image: '/images/news/youth-programme.webp',
      link: '/news/youth-empowerment-programme',
    },
  ] satisfies NewsArticle[],
};
