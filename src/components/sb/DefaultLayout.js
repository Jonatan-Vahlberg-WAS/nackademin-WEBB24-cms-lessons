import { getDictionary } from "@/app/(lang)/[lang]/dictionaries";
import { getStoryblokApi } from "@/lib/storyblok";
import { cn } from "@/utils/cn";

export default async function DefaultLayout({
  children,
  lang = "en",
  withHeader = true,
  withFooter = true,
}) {
  const {
    data: {
      story: { content: config },
    },
  } = await fetchGlobalConfig(lang);

  const dict = await getDictionary(lang)

  console.log("Dict", dict)

  const headerClasses = cn("py-2 px-4 border-b border-gray-400/50");
  const logoClasses = cn("h-14 aspect-video");

  return (
    <div>
      {withHeader && (
        <div className={headerClasses}>
          <div>
            <img className={logoClasses} src={config.logo.filename} title={dict.home.title} />
          </div>
        </div>
      )}
      {children}
      {withFooter && (
        <div>
          {dict.global.footer.title}
          <h4>{config.copyright}</h4>
        </div>
      )}
    </div>
  );
}

export async function fetchGlobalConfig(lang) {
  const storyblokApi = getStoryblokApi();
  const version = process.env.NODE_ENV !== "production" ? "draft" : "published";
  const baseUrl = "cdn/stories/global"
  const url = `${baseUrl}/${lang === "sv" ? "default-config-sv" : "default-config"}`
  return await storyblokApi.get(url, {
    version,
  });
}

/**
 * {
    "_uid": "f804e1a5-04fb-4cb6-ae9f-2df881a65a9d",
    "logo": {
        "id": 84714019624048,
        "alt": "",
        "name": "",
        "focus": "",
        "title": "",
        "source": "",
        "filename": "https://a.storyblok.com/f/286613098262267/1500x601/e66d53ee47/logo.png",
        "copyright": "",
        "fieldtype": "asset",
        "meta_data": {},
        "is_external_url": false
    },
    "links": [
        "510a0499-9a3f-45b8-8919-df5c6e9fe544"
    ],
    "component": "config",
    "copyright": "© 2025 Quiet Village",
    "footer_links": [
        "510a0499-9a3f-45b8-8919-df5c6e9fe544"
    ],
    "_editable": "<!--#storyblok#{\"name\": \"config\", \"space\": \"286613098262267\", \"uid\": \"f804e1a5-04fb-4cb6-ae9f-2df881a65a9d\", \"id\": \"84713559312464\"}-->"
}
 */
