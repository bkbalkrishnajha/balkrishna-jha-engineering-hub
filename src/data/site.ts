export const site = {
  name: 'Balkrishna Jha',
  title: 'Civil Engineering Portfolio',
  profession: 'Civil Engineer',
  description:
    'The professional portfolio of Balkrishna Jha, Civil Engineer — featuring verified experience, infrastructure projects, civil engineering knowledge, technical resources and practical tools.',
  url: 'https://balkrishnajha.com.np',
  email: 'bkbalkrishnajha@gmail.com',
  phone: '+977 9844994437',
  location: 'Ramnagar–6, Sarlahi',
  linkedin: 'https://www.linkedin.com/in/bkbalkrishnajha/',
  github: 'https://github.com/bkbalkrishnajha',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Engineering Blog', href: '/blog/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Engineering Tools', href: '/tools/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const featuredAreas = [
  {
    number: '01',
    icon: 'ruler',
    title: 'Engineering practice',
    description:
      'Practical perspectives on planning, surveying, estimation, construction, technical verification and project delivery.',
    href: '/experience/',
    linkLabel: 'Explore professional experience',
  },
  {
    number: '02',
    icon: 'building-2',
    title: 'Infrastructure projects',
    description:
      'A carefully documented portfolio of civil engineering projects, personal responsibilities and verified outcomes.',
    href: '/projects/',
    linkLabel: 'Explore project portfolio',
  },
  {
    number: '03',
    icon: 'calculator',
    title: 'Engineering tools',
    description:
      'Useful browser-based calculators, unit conversions and other small utilities for everyday engineering work.',
    href: '/tools/',
    linkLabel: 'Explore engineering tools',
  },
] as const;

export const quickLinks = [
  { label: 'Project portfolio', href: '/projects/', icon: 'layers' },
  { label: 'Technical articles', href: '/blog/', icon: 'notebook' },
  { label: 'Resources library', href: '/resources/', icon: 'library' },
  { label: 'Engineering tools', href: '/tools/', icon: 'calculator' },
] as const;
