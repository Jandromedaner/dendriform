"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    dataLayer: object[];
    gtag: (command: "config" | "event", id: string, params?: object) => void;
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function AnalyticsPageViewsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsPageViews() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageViewsInner />
    </Suspense>
  );
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const GAEvent = (
  action: string,
  params: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: string | number | undefined;
  },
) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};
