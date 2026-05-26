import { hospital } from "@/data/hospital";

const siteUrl = "https://aramanahospital.com";
const defaultImage = `${siteUrl}/assets/generated/aramana-hero-consultation.png`;

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
};

export function seo({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultImage,
  type = "website",
}: SeoOptions) {
  const canonical = new URL(path, siteUrl).toString();
  const imageUrl = image.startsWith("http") ? image : new URL(image, siteUrl).toString();
  const fullTitle = title.includes(hospital.name) ? title : `${title} | ${hospital.name}`;
  const keywordContent = [
    ...keywords,
    "Aramana Hospital",
    "Aramana Hospital Kasaragod",
    "cardiology hospital Kasaragod",
    "heart hospital Kasaragod",
    "multi-specialty hospital Kasaragod",
  ].join(", ");

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "keywords", content: keywordContent },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: hospital.name },
      { name: "geo.region", content: "IN-KL" },
      { name: "geo.placename", content: "Kasaragod, Kerala" },
      { name: "theme-color", content: "#083344" },
      { property: "og:site_name", content: hospital.name },
      { property: "og:type", content: type },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: `${hospital.name} in Kasaragod` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
