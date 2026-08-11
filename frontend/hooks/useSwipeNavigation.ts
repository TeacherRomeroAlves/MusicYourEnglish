"use client";

import { useRef, type PointerEventHandler } from "react";

interface SwipeNavigationOptions {
  onSlideLeft: () => void;
  onSlideRight: () => void;
  enabledQuery: string;
  minimumDistance?: number;
}

interface PointerPosition {
  id: number;
  startX: number;
  startY: number;
  latestX: number;
  latestY: number;
}

export function useSwipeNavigation({
  onSlideLeft,
  onSlideRight,
  enabledQuery,
  minimumDistance = 42,
}: SwipeNavigationOptions) {
  const gesture = useRef<PointerPosition | null>(null);

  const finishGesture = (x: number, y: number) => {
    const current = gesture.current;
    gesture.current = null;
    if (!current) return;

    const distanceX = x - current.startX;
    const distanceY = y - current.startY;
    const isHorizontal = Math.abs(distanceX) >= minimumDistance
      && Math.abs(distanceX) > Math.abs(distanceY) * 1.2;

    if (!isHorizontal) return;
    if (distanceX > 0) onSlideRight();
    else onSlideLeft();
  };

  const handlePointerDown: PointerEventHandler<HTMLElement> = (event) => {
    if (!window.matchMedia(enabledQuery).matches) return;
    if (!event.isPrimary || event.pointerType === "mouse") return;

    gesture.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      latestX: event.clientX,
      latestY: event.clientY,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove: PointerEventHandler<HTMLElement> = (event) => {
    if (!gesture.current || gesture.current.id !== event.pointerId) return;
    gesture.current.latestX = event.clientX;
    gesture.current.latestY = event.clientY;
  };

  const handlePointerUp: PointerEventHandler<HTMLElement> = (event) => {
    if (!gesture.current || gesture.current.id !== event.pointerId) return;
    finishGesture(event.clientX, event.clientY);
  };

  const handlePointerCancel: PointerEventHandler<HTMLElement> = () => {
    const current = gesture.current;
    if (!current) return;
    finishGesture(current.latestX, current.latestY);
  };

  return {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerCancel,
  };
}
