"use client";
import { GAEvent } from "./Analytics";
import { Link } from "@/data/links";

type LinkButtonProps = {
  link: Link;
};

export default function LinkButton({ link }: LinkButtonProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => GAEvent("link_click", { link: link.title })}
      className="link-button w-full p-4 mb-3 text-center bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
    >
      {link.title}
    </a>
  );
}
