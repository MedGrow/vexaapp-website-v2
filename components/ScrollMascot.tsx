'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ScrollMascot() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, x: 0, opacity: 0 });

  useEffect(() => {
    let ticking = false;

    function update() {
      const track = trackRef.current;
      ticking = false;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const mascotSize = 84;

      // Progress 0 -> 1 as the track scrolls from just entering view to fully passed.
      const total = rect.height + viewportH;
      const raw = (viewportH - rect.top) / total;
      const progress = Math.min(1, Math.max(0, raw));

      const top = progress * Math.max(0, rect.height - mascotSize);
      const x = Math.sin(progress * Math.PI * 3) * 10;
      const fadeEdge = 0.03;
      const opacity =
        progress < fadeEdge || progress > 1 - fadeEdge
          ? 0
          : Math.min(1, Math.min(progress, 1 - progress) / fadeEdge);

      setPos({ top, x, opacity });
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="pointer-events-none absolute inset-y-0 right-2 z-30 hidden w-20 sm:right-4 sm:block lg:right-8"
      aria-hidden="true"
    >
      <div
        className="absolute w-14 will-change-transform sm:w-16 lg:w-20"
        style={{
          top: pos.top,
          opacity: pos.opacity,
          transform: `translateX(${pos.x}px)`,
        }}
      >
        <Image
          src="/images/vexaapp-mascot.png"
          alt=""
          width={1212}
          height={1477}
          className="w-full drop-shadow-xl"
        />
      </div>
    </div>
  );
}
