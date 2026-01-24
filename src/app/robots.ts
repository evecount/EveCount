import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/ventures/',
    },
    sitemap: 'https://www.evecount.com/sitemap.xml',
  }
}
