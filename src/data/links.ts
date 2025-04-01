import { ReactNode } from "react";

export type MediaType = "youtube" | "soundcloud" | "instagram";

export type MediaContent = {
  id: string;
  embedUrl: string;
  title?: string;
  thumbnail?: string;
};

export type Link = {
  title: string;
  url: string;
  icon?: ReactNode;
  mediaType?: MediaType;
  mediaContent?: MediaContent[]; // Optional media content
};

export const LINKS: Link[] = [
  {
    title: "YouTube",
    url: "https://youtube.com/@janein6125",
    mediaType: "youtube",
    mediaContent: [
      {
        id: "yt-1",
        embedUrl: "https://www.youtube.com/embed/7JEdE15RygA",
        title: "Cmadd9 - This Close to Quiet",
      },
    ],
  },
  {
    title: "Instagram",
    url: "https://instagram.com/ariettable",
    mediaType: "instagram",
    mediaContent: [
      {
        id: "ig-1",
        embedUrl: "https://www.instagram.com/reel/C-D2VHkO6Ut/embed",
        title: "Latest Post",
      },
    ],
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com/janamspastime",
    mediaType: "soundcloud",
    mediaContent: [
      {
        id: "sc-1",
        embedUrl:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1748825088&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        title: "Latest Track",
      },
    ],
  },
];
