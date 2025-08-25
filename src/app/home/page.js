import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Home() {
  const { data } = await fetchData();
  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  const version = process.env.NODE_ENV !== "production" ? "draft" : "published"
  return await storyblokApi.get("cdn/stories/home", {
    version,
  });
}
