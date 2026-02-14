'use client';

import React, { useState, useEffect } from 'react';

const RADIUS = 150;
const CENTER_X = 200;
const CENTER_Y = 200;

export function DynamicBlochSphere() {
    const [isClient, setIsClient] = useState(false);
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        setIsClient(true);
        let animationFrameId: number;
        const animate = () => {
            // Slower rotation
            setAngle(a => (a + 0.005) % (2 * Math.PI));
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Vector moving on a 45 degree latitude circle
    const vector_x = CENTER_X + RADIUS * Math.sin(Math.PI / 3) * Math.cos(angle);
    const vector_y = CENTER_Y - (RADIUS * Math.sin(Math.PI / 3) * Math.sin(angle)) / 3; // Perspective for y

    if (!isClient) {
        // Return a static placeholder or nothing to avoid hydration mismatch
        return <div style={{width: '400px', height: '400px'}} className="bg-transparent" />;
    }

    return (
        <svg viewBox="0 0 400 400" width="100%" height="100%">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto" fill="hsl(var(--primary))">
                    <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
                 <filter id="glow">
                    <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Faint outer glow */}
            <circle cx={CENTER_X} cy={CENTER_Y} r={RADIUS} fill="hsl(var(--primary))" opacity="0.05" />

            {/* Main Sphere Outline */}
            <circle cx={CENTER_X} cy={CENTER_Y} r={RADIUS} fill="none" stroke="hsl(var(--border))" strokeWidth="1" />

            {/* Equator line */}
            <ellipse cx={CENTER_X} cy={CENTER_Y} rx={RADIUS} ry={RADIUS / 4} fill="none" stroke="hsl(var(--border))" strokeDasharray="3 3" strokeWidth="0.5" />

            {/* Vertical longitude line */}
            <path d={`M ${CENTER_X} ${CENTER_Y - RADIUS} Q ${CENTER_X + RADIUS/2} ${CENTER_Y} ${CENTER_X} ${CENTER_Y + RADIUS}`} fill="none" stroke="hsl(var(--border))" strokeDasharray="3 3" strokeWidth="0.5" />
             <path d={`M ${CENTER_X} ${CENTER_Y - RADIUS} Q ${CENTER_X - RADIUS/2} ${CENTER_Y} ${CENTER_X} ${CENTER_Y + RADIUS}`} fill="none" stroke="hsl(var(--border))" strokeDasharray="3 3" strokeWidth="0.5" />

            {/* Z-axis */}
            <line x1={CENTER_X} y1={CENTER_Y - RADIUS - 20} x2={CENTER_X} y2={CENTER_Y + RADIUS + 20} stroke="hsl(var(--border))" strokeWidth="0.5" />
            <text x={CENTER_X} y={CENTER_Y - RADIUS - 25} textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">|0⟩</text>
            <text x={CENTER_X} y={CENTER_Y + RADIUS + 30} textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">|1⟩</text>

            {/* State Vector */}
            <g style={{ filter: 'url(#glow)' }}>
                 <line
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={vector_x}
                    y2={vector_y}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                 />
            </g>
             <circle cx={vector_x} cy={vector_y} r="4" fill="hsl(var(--primary))" style={{ filter: 'url(#glow)' }} />
        </svg>
    );
}
