import { cn } from "@/utils/cn"

export default function Title({ blok }) {

    const titleClasses = cn(
        "text-2xl font-bold",
        {
            "text-4xl": blok?.size === "xl",
            "text-xl": blok?.size === "sm",
            "text-blue-500": blok?.color === "blue",

        }
    )

    return (
        <h2 className={titleClasses}>{blok?.title}</h2>
    )
}