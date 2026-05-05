const env = import.meta.env

export const siteConfig = {
  name: 'BrandView India',
  url: env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : ''),
  description: 'Creative design solutions for brands, websites, and digital products.',
  email: env.VITE_SITE_EMAIL || 'hello@brandview.in',
  social: {
    twitter: env.VITE_SOCIAL_TWITTER || '',
    linkedin: env.VITE_SOCIAL_LINKEDIN || '',
    instagram: env.VITE_SOCIAL_INSTAGRAM || '',
    youtube: env.VITE_SOCIAL_YOUTUBE || '',
    github: env.VITE_SOCIAL_GITHUB || '',
  },
  navItems: [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      path: '/services',
      children: [
        { label: 'Branding & Identity', path: '/services/branding', icon: 'penTool', description: 'Logo, identity, visual systems' },
        { label: 'UI/UX Design', path: '/services/ui-ux', icon: 'layoutGrid', description: 'Interfaces, flows, prototypes' },
        { label: 'Web Design & Development', path: '/services/web', icon: 'code2', description: 'Responsive websites that convert' },
        { label: 'Mobile App Development', path: '/services/app', icon: 'smartphone', description: 'Product design and app builds' },
        { label: 'Creative & Social Media', path: '/services/creative', icon: 'palette', description: 'Campaign and content creatives' },
      ],
    },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/aboutus' },
    { label: 'Contact', path: '/contactus' },
  ],
}
