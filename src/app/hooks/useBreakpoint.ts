import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 768,
};

export default function useBreakpoint() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Check if is a client environment (Next.js server side has no `window`)
    if (typeof window === "undefined") return;

    // Call everytime the viewport dimension change
    const updateSize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    };

    // Native js API
    const observer = new ResizeObserver(updateSize);
    observer.observe(document.body);

    return () => observer.disconnect();
  }, []);

  return width > breakpoints.mobile ? "desktop" : "mobile";
}
