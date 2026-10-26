"use client";

import { useEffect, useRef } from "react";

// On phones the screenshot rows are swipe strips. Start them scrolled so the
// middle shot is centered, with the others peeking in on both sides. Desktop
// is left alone.
export default function useCenterMiddleChild<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const row = ref.current;
    if (!row || !window.matchMedia("(max-width: 640px)").matches) return;
    const middle = row.children[Math.floor(row.children.length / 2)];
    if (!middle) return;
    const rowBox = row.getBoundingClientRect();
    const box = middle.getBoundingClientRect();
    row.scrollLeft += box.left + box.width / 2 - (rowBox.left + rowBox.width / 2);
  }, []);

  return ref;
}
