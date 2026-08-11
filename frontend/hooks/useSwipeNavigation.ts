"use client";

import { useRef, type TouchEventHandler } from "react";

interface SwipeNavigationOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  minimumDistance?: number;
  enabledQuery?: string;
}

export function useSwipeNavigation({
  onSwipeLeft,
  onSwipeRight,
  minimumDistance = 52,
  enabledQuery,
}: SwipeNavigationOptions) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart: TouchEventHandler<HTMLElement> = (event) => {
    if (enabledQuery && !window.matchMedia(enabledQuery).matches) return;
    const touch = event.touches[0];
    if (!touch) return;
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd: TouchEventHandler<HTMLElement> = (event) => {
    if (enabledQuery && !window.matchMedia(enabledQuery).matches) {
      touchStart.current = null;
      return;
    }
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch) return;

    const distanceX = touch.clientX - start.x;
    const distanceY = touch.clientY - start.y;
    const isHorizontalSwipe = Math.abs(distanceX) >= minimumDistance
      && Math.abs(distanceX) > Math.abs(distanceY) * 1.25;

    if (!isHorizontalSwipe) return;
    if (distanceX < 0) onSwipeLeft();
    else onSwipeRight();
  };

  const handleTouchCancel: TouchEventHandler<HTMLElement> = () => {
    touchStart.current = null;
  };

  return { handleTouchStart, handleTouchEnd, handleTouchCancel };
}
