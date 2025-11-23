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
        embedUrl: "https://www.youtube.com/embed/TFQVmfxY9YM",
        title: "Sequence 01",
      },
      {
        id: "yt-2",
        embedUrl: "https://www.youtube.com/embed/7JEdE15RygA",
        title: "Cmadd9 - This Close to Quiet",
      },
    ],
  },
  {
    title: "Instagram",
    url: "https://instagram.com/dendri.form",
    mediaType: "instagram",
    mediaContent: [
      {
        id: "ig-1",
        embedUrl: "https://www.instagram.com/reel/DRZk8V9gsLj/embed",
        title: `As I was - by @Olivia Belli`,
      },
      {
        id: "ig-2",
        embedUrl: "https://www.instagram.com/reel/C-D2VHkO6Ut/embed",
        title: `Cover of "Eden" - by @Hania Rani`,
      },
      {
        id: "ig-3",
        embedUrl: "https://www.instagram.com/reel/DH8pir9ox67/embed",
        title: `Cmadd9🌟`,
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
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2217548846&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        title: `As I was - by @Olivia Belli`,
      },
      {
        id: "sc-2",
        embedUrl:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1748825088&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        title: `Cover of "Idea 10" - by @Gibran Alcocer`,
      },
      {
        id: "sc-3",
        embedUrl:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2069761596&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        title: `Cmadd9🌟`,
      },
    ],
  },
];
