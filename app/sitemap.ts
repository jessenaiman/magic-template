import { MetadataRoute } from 'next'
import { navigationItems } from '@/config/navigation'

// Generate sitemap from navigation configuration and additional pages
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webdesignworkshop.dev'

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/design`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/test-report`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Add dynamic URLs from navigation config
  const dynamicUrls: MetadataRoute.Sitemap = []
  navigationItems.forEach(item => {
    if (!item.external) {
      // Parent navigation item
      dynamicUrls.push({
        url: `${baseUrl}${item.href}`,
        lastModified: new Date(),
        changeFrequency: item.href === '/design' || item.href === '/templates' ? 'daily' : 'weekly',
        priority: item.href === '/' ? 1 : 0.8,
      })

      // Child navigation items
      if (item.children && item.children.length > 0) {
        item.children.forEach(child => {
          if (!child.external) {
            dynamicUrls.push({
              url: `${baseUrl}${child.href}`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.7,
            })
          }
        })
      }
    }
  })

  // Add specific design category pages
  const designCategories = [
    'animations',
    'backgrounds',
    'buttons',
    'effects',
    'responsive-design',
    'text',
    'transitions'
  ]

  designCategories.forEach(category => {
    dynamicUrls.push({
      url: `${baseUrl}/design/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  })

  // Add specific animation implementation pages
  const animationPages = [
    'animate-ui',
    'animatecss',
    'magicui',
    'reactbits'
  ]

  animationPages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/design/animations/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Add backgrounds implementation pages
  const backgroundPages = [
    'animate-ui',
    'html-css',
    'magicui',
    'tailwind'
  ]

  backgroundPages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/design/backgrounds/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Add button implementation pages
  const buttonPages = [
    'animate-ui',
    'animate-css',
    'customize',
    'html-css',
    'magic',
    'shadcn',
    'tailwind'
  ]

  buttonPages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/design/buttons/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Add effects implementation pages
  const effectsPages = [
    'animate-ui',
    'html-css',
    'magicui',
    'tailwind'
  ]

  effectsPages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/design/effects/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Add responsive design implementation pages
  const responsiveDesignPages = [
    'animate-ui',
    'html-css',
    'magicui',
    'nextjs',
    'tailwindcss'
  ]

  responsiveDesignPages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/design/responsive-design/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Add text implementation pages
  const textPages = [
    'animate-ui',
    'html-css',
    'magicui',
    'reactbits',
    'shadcn',
    'tailwind'
  ]

  textPages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/design/text/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Add transitions implementation pages
  const transitionsPages = [
    'animate-ui',
    'html-css',
    'magicui',
    'nextjs',
    'tailwind'
  ]

  transitionsPages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/design/transitions/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Add template pages
  const templatePages = [
    'dashboard',
    'contact',
    'login'
  ]

  templatePages.forEach(page => {
    dynamicUrls.push({
      url: `${baseUrl}/templates/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    })
  })

  // Combine all URLs and remove duplicates
  const allUrls = [...staticUrls, ...dynamicUrls]
  const uniqueUrls = allUrls.filter((url, index, self) =>
    index === self.findIndex(u => u.url === url.url)
  )

  return uniqueUrls
}