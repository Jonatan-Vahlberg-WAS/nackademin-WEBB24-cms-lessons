import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }) {
  const { lang, path } = await params;

  try {
  if (["en", "sv"].includes(lang) === false) {
    throw new Error("Language not found")
  }
    const { data } = await fetchData(lang, path);
    return (
      <div className="page">
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (error) {
    return notFound({
      params: {
        lang,
        path,
      },
    });
  }
}

export async function fetchData(lang = "en", path = "") {
  const storyblokApi = getStoryblokApi();
  const version = process.env.NODE_ENV !== "production" ? "draft" : "published";
  const baseUrl = lang === "sv" ? `cdn/stories/sv` : "cdn/stories";
  return await storyblokApi.get(`${baseUrl}/${path.join("/")}`, {
    version,
  });
}
