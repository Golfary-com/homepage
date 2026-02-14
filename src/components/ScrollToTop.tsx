"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable browser's default scroll restoration to ensure we always start at top
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    
    // Optional: Restore standard behavior on unmount if needed, but for "always top" requests, 
    // leaving it manual is often safer. However, we'll keep it simple.
  }, []);

  return null;
}
