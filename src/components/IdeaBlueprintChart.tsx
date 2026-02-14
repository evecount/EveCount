'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from "@/lib/utils";

interface Point {
  x: number;
  y: number;
}

interface IdeaBlueprintChartProps {
  ideaIndex: number;
  className?: string;
}

const SIZE = 200;
const CENTER = SIZE / 2;
const OUTER_RADIUS = 85;
const INNER_POINTS = 16;
const FRAME_COUNT_SCALER = 120; // Slower animation

const createPoints = (index: number, frameCount: number): { path: string; color: string } => {
  const seed = (index + 1) * 1000;
  
  const points: Point[] = [];
  let pathData = "";

  const colorIndex = (index % 5) + 1; // Cycle through 5 chart colors
  const color = `hsl(var(--chart-${colorIndex}))`;

  for (let i = 0; i < INNER_POINTS; i++) {
    const randomFactor1 = Math.sin(seed + i * 0.5) * Math.cos(seed * 0.3);
    
    const dynamicRadius = 40 + 35 * (0.5 * (1 + Math.sin(seed + (frameCount / FRAME_COUNT_SCALER) + i * Math.PI / 8)));
    
    const baseRadius = dynamicRadius * (0.6 + 0.4 * randomFactor1);
    
    const angle = (i / INNER_POINTS) * 2 * Math.PI;

    const x = CENTER + baseRadius * Math.cos(angle);
    const y = CENTER + baseRadius * Math.sin(angle);

    points.push({ x, y });

    if (i === 0) {
      pathData += `M ${x} ${y}`;
    } else {
      const prev = points[i-1];
      const cx1 = (prev.x + x) / 2 + (Math.sin(seed + i) * 20);
      const cy1 = (prev.y + y) / 2 + (Math.cos(seed + i) * 20);
       pathData += ` S ${cx1},${cy1} ${x},${y}`;

    }
  }
  
  pathData += " Z"; // Close the path

  return { path: pathData, color };
};

export function IdeaBlueprintChart({ ideaIndex, className }: IdeaBlueprintChartProps) {
  const [frameCount, setFrameCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const animate = () => {
      setFrameCount(count => count + 1);
      animationFrameId = requestAnimationFrame(animate);
    };
    let animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const { path, color } = useMemo(() => {
      if (!isClient) return { path: '', color: '' };
      return createPoints(ideaIndex, frameCount);
  }, [ideaIndex, frameCount, isClient]);

  if (!isClient) {
      return <div className={cn("w-full aspect-square", className)} />;
  }

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={cn("w-full h-auto", className)}>
        <defs>
            <filter id={`glow-${ideaIndex}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        {/* Outer dodecagon */}
        <polygon 
            points={Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * 2 * Math.PI;
                const x = CENTER + OUTER_RADIUS * Math.cos(angle);
                const y = CENTER + OUTER_RADIUS * Math.sin(angle);
                return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
        />
        {/* Center point */}
        <circle cx={CENTER} cy={CENTER} r="2" fill="hsl(var(--muted-foreground))" />

        {/* Animated inner path */}
        <path
            d={path}
            fill={color}
            fillOpacity={0.1}
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{ transition: 'd 0.1s linear', filter: `url(#glow-${ideaIndex})` }}
        />
    </svg>
  );
}
