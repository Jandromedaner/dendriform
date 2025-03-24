"use client";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Initialize Google Analytics
export const GAScript = () => {
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
    [key: string]: any;
  },
) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};
