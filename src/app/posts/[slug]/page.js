import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const { data } = await fetchBlogPostData(slug);
  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchBlogPostData(slug) {
  const storyblokApi = getStoryblokApi();
  const path = `cdn/stories/posts/${slug}`
  return await storyblokApi.get(path, {
    version: "draft",
  });
}
