'use client';

import React, { useState, useEffect, useMemo } from 'react';

const NUM_OUTER_POINTS = 32;
const NUM_INNER_POINTS = 16;
const OUTER_RADIUS = 280;
const INNER_RADIUS = 80;
const CENTER = 300;

const INDUSTRIES = [
    "Finance", "Healthcare", "Defense", "Logistics",
    "AI/SaaS", "Energy", "Materials", "Telecom",
    "Pharma", "Automotive", "Insurance", "Govt"
];

const TECHS = ["QRNG", "QML", "PQC", "Sensing", "Simulation"];

const getPointOnCircle = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI;
    return {
        x: CENTER + radius * Math.cos(angle),
        y: CENTER + radius * Math.sin(angle)
    };
};

const outerPoints = Array.from({ length: NUM_OUTER_POINTS }, (_, i) => getPointOnCircle(i, NUM_OUTER_POINTS, OUTER_RADIUS));
const innerPoints = Array.from({ length: NUM_INNER_POINTS }, (_, i) => getPointOnCircle(i, NUM_INNER_POINTS, INNER_RADIUS));

const generateLinks = (frameCount: number) => {
    const links = [];
    const totalLinks = NUM_OUTER_POINTS * 2;
    for (let i = 0; i < totalLinks; i++) {
        const fromIndex = i % NUM_INNER_POINTS;
        const toIndex = (i * 3) % NUM_OUTER_POINTS;

        const start = innerPoints[fromIndex];
        const end = outerPoints[toIndex];
        
        const opacity = 0.1 + 0.3 * Math.sin((frameCount / 100) + (i * Math.PI / totalLinks));
        const isPrimary = fromIndex < TECHS.length;

        links.push({
            id: i,
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            stroke: isPrimary ? "hsl(var(--primary) / 0.7)" : "hsl(var(--border))",
            opacity: Math.max(0.05, opacity)
        });
    }
    return links;
};

export function QuantumTamChart() {
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
        if (!isClient) return [];
        return generateLinks(frameCount);
    }, [frameCount, isClient]);

    return (
        <svg viewBox="0 0 600 600" width="100%" height="100%">
            <defs>
                 <filter id="glow-tam">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {/* The links - Render only on client */}
            {isClient && (
                <g opacity={0.6}>
                    {links.map(link => (
                        <line
                            key={link.id}
                            x1={link.x1}
                            y1={link.y1}
                            x2={link.x2}
                            y2={link.y2}
                            stroke={link.stroke}
                            strokeWidth="0.5"
                            strokeOpacity={link.opacity}
                        />
                    ))}
                </g>
            )}

            {/* Inner Points (Quantum Techs) */}
            <g>
                {innerPoints.map((point, index) => (
                     <React.Fragment key={`inner-${index}`}>
                        <circle cx={point.x} cy={point.y} r={index < TECHS.length ? 6 : 3} fill="hsl(var(--primary))" opacity={index < TECHS.length ? 1 : 0.7} style={{ filter: 'url(#glow-tam)' }} />
                         {index < TECHS.length && (
                            <text
                                x={point.x}
                                y={point.y}
                                dy=".3em"
                                textAnchor="middle"
                                fontSize="10"
                                fill="hsl(var(--primary-foreground))"
                                className="font-bold"
                            >
                                {TECHS[index]}
                            </text>
                        )}
                    </React.Fragment>
                ))}
            </g>

            {/* Outer Points (Industries) */}
            <g>
                {outerPoints.map((point, index) => {
                    const isLabelPoint = index % Math.floor(NUM_OUTER_POINTS / INDUSTRIES.length) === 0;
                    const labelIndex = Math.floor(index / Math.floor(NUM_OUTER_POINTS / INDUSTRIES.length));
                    const label = INDUSTRIES[labelIndex];

                    return (
                        <React.Fragment key={`outer-${index}`}>
                            <circle cx={point.x} cy={point.y} r={isLabelPoint ? 4 : 2.5} fill="hsl(var(--chart-5))" opacity={isLabelPoint ? 0.9 : 0.6} />
                             {isLabelPoint && label && (
                                <text
                                    x={CENTER + (OUTER_RADIUS + 15) * Math.cos((index / NUM_OUTER_POINTS) * 2 * Math.PI)}
                                    y={CENTER + (OUTER_RADIUS + 15) * Math.sin((index / NUM_OUTER_POINTS) * 2 * Math.PI)}
                                    dy=".3em"
                                    textAnchor="middle"
                                    fontSize="10"
                                    fill="hsl(var(--muted-foreground))"
                                >
                                    {label}
                                </text>
                             )}
                        </React.Fragment>
                    );
                })}
            </g>
        </svg>
    );
}
