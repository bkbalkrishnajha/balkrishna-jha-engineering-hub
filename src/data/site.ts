export const site = {
  name: 'Balkrishna Jha',
  title: 'Civil Engineering Portfolio',
  profession: 'Civil Engineer',
  description:
    'The personal website of Balkrishna Jha, Civil Engineer, showcasing professional works, technical insights, and engineering resources.',
  url: 'https://balkrishnajha.com.np',
  email: 'contact@balkrishnajha.com.np',
  phone: '+977 9844994437',
  location: 'Ramnagar–6, Sarlahi',
  linkedin: 'https://www.linkedin.com/in/bkbalkrishnajha/',
  github: 'https://github.com/bkbalkrishnajha',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Nepali Calendar', href: '/calendar/' },
] as const;
