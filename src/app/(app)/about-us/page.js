import { redirect, RedirectType } from "next/navigation";

export default async function AboutUs() {
  return redirect("/en/about-us", RedirectType.replace)
}