import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.evecount.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ventures`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/research`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/pricing`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/privacy`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/terms`,
        lastModified: new Date(),
    }
  ]
}
