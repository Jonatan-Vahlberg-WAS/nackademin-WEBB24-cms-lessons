

export default function robots() {
    const domain = 'nackademin-webb-24-cms-lessons.vercel.app'
    const baseUrl = `https://${domain}`
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}