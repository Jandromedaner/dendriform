"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: object[];
    gtag: (command: "config" | "event", id: string, params?: object) => void;
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export function AnalyticsPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, searchParams]);

  return null;
}

export const GAScript = () => {
  if (!GA_TRACKING_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

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
