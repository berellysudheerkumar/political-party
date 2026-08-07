import { markRaw } from 'vue';

import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next';

export const contactContent = {
  hero: {
    eyebrow: 'CONNECT WITH US',
    title: 'Your Voice Matters.',
    description:
      'Every meaningful change begins with a conversation. Share your ideas, concerns, suggestions, or simply connect with us.',
    primaryButton: 'Share Your Voice',
    secondaryButton: 'Join the Movement',
  },

  contactInfo: [
    {
      id: 1,
      number: '01',
      icon: 'lucide:map-pin',
      label: 'VISIT',
      title: 'Our Headquarters',
      value: 'Party Headquarters, Hyderabad, Telangana',
    },
    {
      id: 2,
      number: '02',
      icon: 'lucide:phone',
      label: 'CALL',
      title: 'Talk To Us',
      value: '+91 98765 43210',
    },
    {
      id: 3,
      number: '03',
      icon: 'lucide:mail',
      label: 'WRITE',
      title: 'Send An Email',
      value: 'info@exampleparty.org',
    },
    {
      id: 4,
      number: '04',
      icon: 'lucide:clock-3',
      label: 'HOURS',
      title: 'Office Hours',
      value: 'Mon – Sat, 9:00 AM – 6:00 PM',
    },
  ],

  messageSection: {
    eyebrow: 'WE ARE LISTENING',
    title: 'Tell Us What Matters.',
    description:
      'Have an idea for your community? A concern that deserves attention? Or want to help create change? We want to hear from you.',
    form: {
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Tell us what is on your mind...',
      button: 'Send Your Message',
    },
  },

  connectSection: {
    eyebrow: 'STAY CONNECTED',
    title: "We're Listening.",
    description:
      'Follow our work, stay informed, and be part of the conversation wherever you are.',
    location: {
      title: 'Based in Telangana',
      value: 'Hyderabad, Telangana, India',
    },
  },

  socialLinks: [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'simple-icons:facebook',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'simple-icons:instagram',
    },
    {
      name: 'X',
      url: 'https://x.com',
      icon: 'simple-icons:x',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: 'simple-icons:youtube',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'simple-icons:linkedin',
    },
  ],

  finalCta: {
    eyebrow: 'TOGETHER',
    title: 'Change begins when people come together.',
    description: 'Be part of the conversation. Be part of the movement. Be part of the change.',
    button: 'Join the Movement',
  },
};
