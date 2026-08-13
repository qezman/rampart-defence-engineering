"use client";

import { useEffect, useState } from "react";

const AUTOPLAY_STEP_MS = 60;
const AUTOPLAY_STEPS = 100;

export function useCarousel(itemCount: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % itemCount);
    setProgress(0);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
    setProgress(0);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= AUTOPLAY_STEPS) {
          goToNext();
          return 0;
        }
        return prev + 1;
      });
    }, AUTOPLAY_STEP_MS);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isHovered]);

  return {
    activeIndex,
    progress,
    isHovered,
    setIsHovered,
    goToNext,
    goToPrev,
    goToIndex,
  };
}
