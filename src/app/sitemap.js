import { getStoryblokApi } from "@/lib/storyblok";

export default async function sitemap() {
  try {
    const domain = "nackademin-webb-24-cms-lessons.vercel.app";
    const baseUrl = `https://${domain}/`;
    const staticPaths = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];

    const blogPages = getStoryblokApi().get(`cdn/stories`, {
      version: "published",
      starts_with: "posts",
    });

    const blogPaths = blogPages.data.stories.map((story) => {
      return {
        url: `${baseUrl}/posts/${story.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      };
    });
    const paths = [...staticPaths, ...blogPaths];
    return paths;
  } catch (error) {
    return [];
  }
}
