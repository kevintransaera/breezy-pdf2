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

    let priority = 0.5;
    if (path === '/') priority = 1.0;
    else if (toolPages.includes(path)) priority = 0.9;
    else if (path.startsWith('/blog')) priority = 0.7;

    return {
      loc: path,
      changefreq: path.startsWith('/blog') ? 'monthly' : config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
