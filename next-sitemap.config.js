/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://breezy-pdf.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Boost priority for tool pages (high-value SEO targets)
    const toolPages = [
      '/merge-pdf', '/split-pdf', '/compress-pdf', '/pdf-to-images',
      '/images-to-pdf', '/rotate-pdf', '/add-page-numbers', '/reorder-pages',
    ];

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : toolPages.includes(path) ? 0.9 : 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
