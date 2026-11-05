import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Atlas',
  description: 'A practical field guide to emerging roles in the AI economy.',
  base: '/ai-career-atlas/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Explore roles', link: '/roles/' },
      { text: 'Research notes', link: '/research/' },
      { text: 'GitHub', link: 'https://github.com/mfnu906-ship-it/ai-career-atlas' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/mfnu906-ship-it/ai-career-atlas' }],
    footer: {
      message: 'Independent career research · Roles and postings change quickly.',
      copyright: 'Built as an open, evolving field guide.',
    },
  },
})
