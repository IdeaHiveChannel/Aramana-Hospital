export interface HeroAsset {
  type: "image" | "video";
  url: string;
}

export const heroAssets: Record<string, HeroAsset[]> = {
  home: [
    {
      type: "video",
      url: "https://player.vimeo.com/external/517090025.sd.mp4?s=330c6a53696a40e796035079a40536a0c06830d6&profile_id=164&oauth2_token_id=57447761",
    },
    { type: "image", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" },
    { type: "image", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514" },
  ],
  about: [
    { type: "image", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514" },
    { type: "image", url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842" },
    { type: "image", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" },
  ],
  cardiology: [
    { type: "image", url: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef" },
    { type: "image", url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" },
    { type: "image", url: "https://images.unsplash.com/photo-1579154234431-da7170a7f21c" },
  ],
  diagnostics: [
    { type: "image", url: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c" },
    { type: "image", url: "https://images.unsplash.com/photo-1579154234431-da7170a7f21c" },
    { type: "image", url: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283" },
  ],
  doctors: [
    { type: "image", url: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e" },
    { type: "image", url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" },
    { type: "image", url: "https://images.unsplash.com/photo-1559839734-2b71f1536783" },
  ],
  departments: [
    { type: "image", url: "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c7e" },
    { type: "image", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514" },
    { type: "image", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" },
  ],
  contact: [
    { type: "image", url: "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c7e" },
    { type: "image", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514" },
  ],
  media: [
    { type: "image", url: "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c7e" },
    { type: "image", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514" },
  ],
};
