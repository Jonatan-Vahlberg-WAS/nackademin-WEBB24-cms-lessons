
import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
    let heroClasses = `h-[50vh] bg-amber-400/25`

    return (
        <div {...storyblokEditable(blok)} className={heroClasses} style={{
            backgroundImage: `url(${blok?.background_image?.filename})`
        }}>
            <h1>
            {blok.title}
            </h1>
            <h4>
                {blok.description}
            </h4>
        </div>
    )
}