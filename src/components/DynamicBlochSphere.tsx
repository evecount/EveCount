'use client';

import React, { useState, useEffect } from 'react';

const RADIUS = 150;
const CENTER_X = 200;
const CENTER_Y = 200;

export function DynamicBlochSphere() {
    const [isClient, setIsClient] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        setIsClient(true);
        let animationFrameId: number;
        const animate = (t: number) => {
            setTime(t);
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // phi is the azimuthal angle, rotating continuously at one speed
    const phi = (time / 3000) % (2 * Math.PI);
    // theta is the polar angle, oscillating up and down at another speed
    const theta = Math.PI / 2 + (Math.PI / 3) * Math.sin(time / 2000);
    
    // 3D coordinates on the unit sphere
    const x3d = Math.sin(theta) * Math.cos(phi);
    const y3d = Math.sin(theta) * Math.sin(phi);
    const z3d = Math.cos(theta);

    // Project to 2D for visualization
    const vector_x = CENTER_X + RADIUS * x3d;
    const vector_y = CENTER_Y - RADIUS * z3d;

    // Projection on the equatorial (XY) plane with perspective
    const proj_x = CENTER_X + RADIUS * x3d;
    const proj_y = CENTER_Y + RADIUS * y3d * 0.3; // Squash y-axis for perspective

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

             {/* Vector's projection on the XY plane */}
            <g opacity="0.7">
                <line x1={CENTER_X} y1={CENTER_Y} x2={proj_x} y2={proj_y} stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx={proj_x} cy={proj_y} r="2" fill="hsl(var(--border))" />
            </g>

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
