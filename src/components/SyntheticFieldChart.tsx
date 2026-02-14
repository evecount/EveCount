'use client';

import React, { useState, useEffect, useMemo } from 'react';

const NUM_POINTS = 12;
const NUM_LINKS = 15;
const RADIUS = 150;
const CENTER_X = 200;
const CENTER_Y = 200;

const getPointOnCircle = (index: number) => {
    const angle = (index / NUM_POINTS) * 2 * Math.PI;
    return {
        x: CENTER_X + RADIUS * Math.cos(angle),
        y: CENTER_Y + RADIUS * Math.sin(angle)
    };
};

const points = Array.from({ length: NUM_POINTS }, (_, i) => getPointOnCircle(i));

const generateLinks = (frameCount: number) => {
    const links = [];
    for (let i = 0; i < NUM_LINKS; i++) {
        const toIndex = (i * 5) % NUM_POINTS;

        const start = { x: CENTER_X, y: CENTER_Y }; // All lines from center
        const end = points[toIndex];
        
        // Animate control point for fluctuation
        const turbulence = 100 + 80 * Math.sin(frameCount / 100 + i);
        const controlX = CENTER_X + (Math.random() - 0.5) * turbulence;
        const controlY = CENTER_Y + (Math.random() - 0.5) * turbulence;

        // Animate opacity for a "blinking" effect
        const opacity = 0.3 + 0.3 * Math.sin(frameCount / 50 + i * Math.PI / 7);

        links.push({
            id: i,
            d: `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`,
            stroke: "hsl(var(--primary) / 0.5)",
            opacity: Math.max(0.1, opacity)
        });
    }
    return links;
};


export function SyntheticFieldChart() {
    const [frameCount, setFrameCount] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        let animationFrameId: number;
        const animate = () => {
            setFrameCount(count => count + 1);
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const links = useMemo(() => {
        if (!isClient) {
            return [];
        }
        return generateLinks(frameCount);
    }, [frameCount, isClient]);

    return (
        <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
            {isClient && (
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
            )}
        </svg>
    );
}
