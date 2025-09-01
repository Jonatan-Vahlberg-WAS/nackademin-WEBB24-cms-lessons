export default function robots() {
    const baseUrl = 'https://nackademin-webb-24-cms-lessons.vercel.app'
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/global/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }