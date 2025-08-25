import { storyblokEditable } from "@storyblok/react/rsc";
import ServerComponent from "./ServerComponent";
import Title from "./Title";

export default function Feature({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="feature shadow-md p-4 rounded-md w-75"
    >
      <img
        src={`https://picsum.photos/250/250?random=${blok._uid}`}
        alt={blok.name}
        className="w-full aspect-square object-cover rounded-md"
      />
      <Title blok={{ title: blok.name, size: "xl"}}/>
      <p className="text-gray-600">{blok.description}</p>
      <div className="flex flex-col gap-2">
        {blok?.cta?.map((nestedBlok) => (
          <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>

    </div>
  );
}
