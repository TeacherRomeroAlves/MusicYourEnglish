"use client";

import { useState } from "react";

export function useWordPresence(maximumSelections: number) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= maximumSelections) return current;
      return [...current, id];
    });
  };

  const handleReset = () => setSelectedIds([]);

  return { selectedIds, handleToggle, handleReset };
}
