import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from '@storyblok/react/rsc';
import { notFound } from "next/navigation";

export default async function Home({params}) {

  const { lang } = await params

  if(["en", "sv"].includes(lang) === false) {
    return  notFound()
  }
  
  const { data } = await fetchData(lang);
  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData(lang) {
  const storyblokApi = getStoryblokApi();
  const version = process.env.NODE_ENV !== "production" ? "draft" : "published"
  const homeUrl = lang === "sv" ? "cdn/stories/sv/hem" : "cdn/stories/home"
  return await storyblokApi.get(homeUrl, {
    version,
  });
}
