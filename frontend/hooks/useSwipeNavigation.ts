"use client";

import { useRef, type PointerEventHandler } from "react";

interface SwipeNavigationOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  minimumDistance?: number;
  enabledQuery?: string;
}

export function useSwipeNavigation({
  onSwipeLeft,
  onSwipeRight,
  minimumDistance = 42,
  enabledQuery,
}: SwipeNavigationOptions) {
  const pointerStart = useRef<{ id: number; x: number; y: number } | null>(null);

  const handlePointerDown: PointerEventHandler<HTMLElement> = (event) => {
    if (enabledQuery && !window.matchMedia(enabledQuery).matches) return;
    if (!event.isPrimary || event.pointerType === "mouse") return;

    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp: PointerEventHandler<HTMLElement> = (event) => {
    if (enabledQuery && !window.matchMedia(enabledQuery).matches) {
      pointerStart.current = null;
      return;
    }
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start || start.id !== event.pointerId) return;

    const distanceX = event.clientX - start.x;
    const distanceY = event.clientY - start.y;
    const isHorizontalSwipe = Math.abs(distanceX) >= minimumDistance
      && Math.abs(distanceX) > Math.abs(distanceY) * 1.25;

    if (!isHorizontalSwipe) return;
    if (distanceX < 0) onSwipeLeft();
    else onSwipeRight();
  };

  const handlePointerCancel: PointerEventHandler<HTMLElement> = () => {
    pointerStart.current = null;
  };

  return { handlePointerDown, handlePointerUp, handlePointerCancel };
}
