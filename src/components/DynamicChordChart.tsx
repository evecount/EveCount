'use client';

import React, { useState, useEffect, useMemo } from 'react';

const NUM_POINTS = 24;
const NUM_LINKS = 30;
const RADIUS = 150;
const CENTER = 160;

const getPointOnCircle = (index: number) => {
    const angle = (index / NUM_POINTS) * 2 * Math.PI;
    return {
        x: CENTER + RADIUS * Math.cos(angle),
        y: CENTER + RADIUS * Math.sin(angle)
    };
};

const points = Array.from({ length: NUM_POINTS }, (_, i) => getPointOnCircle(i));

const generateLinks = (frameCount: number) => {
    const links = [];
    for (let i = 0; i < NUM_LINKS; i++) {
        // Use a seeded random to keep link pairs consistent
        const fromIndex = (i * 7) % NUM_POINTS;
        const toIndex = (i * 13) % NUM_POINTS;

        if (fromIndex === toIndex) continue;

        const start = points[fromIndex];
        const end = points[toIndex];
        
        // Animate control point for fluctuation
        const turbulence = 80 + 60 * Math.sin(frameCount / 80 + i);
        const controlX = CENTER + (Math.random() - 0.5) * turbulence;
        const controlY = CENTER + (Math.random() - 0.5) * turbulence;

        // Animate opacity for a "blinking" effect
        const opacity = 0.4 + 0.3 * Math.sin(frameCount / 40 + i * Math.PI / 5);

        const isRed = i % 3 === 0;

        links.push({
            id: i,
            d: `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`,
            stroke: isRed ? "hsl(var(--chart-5) / 0.7)" : "hsl(var(--primary) / 0.7)",
            opacity: Math.max(0.1, opacity)
        });
    }
    return links;
};


export function DynamicChordChart() {
    const [frameCount, setFrameCount] = useState(0);

    useEffect(() => {
        let animationFrameId: number;
        const animate = () => {
            setFrameCount(count => count + 1);
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const links = useMemo(() => generateLinks(frameCount), [frameCount]);

    return (
        <svg viewBox="0 0 320 320" width="100%" height="100%">
            <g>
                {points.map((point, index) => (
                    <circle key={index} cx={point.x} cy={point.y} r="2" fill="hsl(var(--primary))" />
                ))}
            </g>
            <g>
                {links.map(link => (
                    <path
                        key={link.id}
                        d={link.d}
                        fill="none"
                        stroke={link.stroke}
                        strokeWidth="1"
                        strokeOpacity={link.opacity}
                    />
                ))}
            </g>
        </svg>
    );
}
