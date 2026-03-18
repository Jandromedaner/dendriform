"use client";
import { LINKS, MediaType } from "@/data/links";
import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

interface MediaFeedProps {
  isDarkMode: boolean;
}

export default function MediaFeed({ isDarkMode }: MediaFeedProps) {
  const [activeMedia, setActiveMedia] = useState<MediaType>("youtube");
  const mediaLinks = LINKS.filter((link) => link.mediaContent);

  const handleMediaSwitch = (mediaType: MediaType, title: string) => {
    setActiveMedia(mediaType);
    sendGAEvent("event", "media_tab_switch", {
      media_type: mediaType,
      tab_title: title,
    });
  };

  const handleMediaLoad = (contentTitle: string, mediaType: MediaType) => {
    sendGAEvent("event", "media_loaded", {
      media_type: mediaType,
      content_title: contentTitle,
    });
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[#121726]" : "bg-[#f5f7fa]"}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Media Type Selector */}
        <div className="flex justify-center overflow-x-auto pb-[16px]">
          {mediaLinks.map((link) => (
            <button
              key={link.url}
              onClick={() =>
                handleMediaSwitch(link.mediaType as MediaType, link.title)
              }
              className={`px-[4px] py-[2px] rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 mx-[6px]
                ${
                  activeMedia === link.mediaType
                    ? isDarkMode
                      ? "bg-[#93c5fd] text-[#111827]"
                      : "bg-[#93c5fd] text-[#111827]"
                    : isDarkMode
                      ? "bg-[#e5e7eb] text-[#374151]"
                      : "bg-[#374151] text-[#d1d5db]"
                }`}
            >
              {link.title}
            </button>
          ))}
        </div>

        {/* Media Embeds */}
        <div className="space-y-[16px]">
          {mediaLinks
            .find((link) => link.mediaType === activeMedia)
            ?.mediaContent?.map((content) => (
              <div
                key={content.id}
                className={`rounded-xl overflow-hidden shadow-lg
                  ${isDarkMode ? "bg-[#e0f7fa]" : "bg-[#f5f7fa]"} border
                  ${isDarkMode ? "border-[#e0f7fa]" : "border-white"}`}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={content.embedUrl}
                    className="w-full h-[296px]"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title={content.title || `${activeMedia} content`}
                    onLoad={() =>
                      handleMediaLoad(content.title || activeMedia, activeMedia)
                    }
                  />
                </div>
                {content.title && (
                  <div className={`p-4 "text-[#e0f7fa]"`}>
                    <h3 className="font-medium">{content.title}</h3>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
