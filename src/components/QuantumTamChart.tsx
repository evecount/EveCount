"use client"

import React, { useState, useEffect, useMemo } from 'react';

const NUM_OUTER_POINTS = 36;
const NUM_INNER_POINTS = 12;
const OUTER_RADIUS = 280;
const INNER_RADIUS = 80;
const CENTER = 300;

const AI_LABELS = [
    "Big Data", "Cloud", "SaaS", "Mobile", "Social", "E-commerce",
    "AdTech", "IoT", "APIs", "DevOps", "Analytics", "Security"
];

const QUANTUM_LABELS = [
    "Finance", "Healthcare", "Defense", "Logistics",
    "AI/SaaS", "Energy", "Materials", "Telecom",
    "Pharma", "Automotive", "Insurance", "Govt"
];

const AI_TECHS = ["LLMs", "CV", "NLP"];
const QUANTUM_TECHS = ["QRNG", "QML", "PQC", "Sensing", "Simulation"];

const getPointOnCircle = (index: number, total: number, radius: number, rotation: number) => {
    const angle = (index / total) * 2 * Math.PI + rotation;
    return {
        x: CENTER + radius * Math.cos(angle),
        y: CENTER + radius * Math.sin(angle)
    };
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

    // 10-second rotation cycle
    const rotation = useMemo(() => {
        if (!isClient) return 0;
        const period = 60 * 10;
        return (frameCount % period) / period * 2 * Math.PI;
    }, [isClient, frameCount]);
    
    // 15-second morph cycle (triangle wave for linear feel)
    const progress = useMemo(() => {
        const period = 60 * 15;
        const cycle = (frameCount % period) / period; // Linear from 0 to 1
        // Triangle wave: 0 -> 1 -> 0
        return cycle < 0.5 ? cycle * 2 : (1 - cycle) * 2;
    }, [frameCount]);

    const textProgress = useMemo(() => {
        // This function creates a sharper transition curve.
        // It stays near 0 for progress < 0.4,
        // transitions quickly between 0.4 and 0.6,
        // and stays near 1 for progress > 0.6.
        const x = progress;
        const edge0 = 0.4;
        const edge1 = 0.6;
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        // This is a smoothstep function
        return t * t * (3 - 2 * t);
    }, [progress]);

    const outerPoints = useMemo(() => Array.from({ length: NUM_OUTER_POINTS }, (_, i) => getPointOnCircle(i, NUM_OUTER_POINTS, OUTER_RADIUS, rotation)), [rotation]);
    const innerPoints = useMemo(() => Array.from({ length: NUM_INNER_POINTS }, (_, i) => getPointOnCircle(i, NUM_INNER_POINTS, INNER_RADIUS, rotation)), [rotation]);

    const links = useMemo(() => {
        if (!isClient) return [];
        
        const generatedLinks = [];
        const totalLinks = NUM_OUTER_POINTS * 1.5;
        for (let i = 0; i < totalLinks; i++) {
            const fromIndex = (i * 3) % NUM_INNER_POINTS;
            const toIndex = (i * 7) % NUM_OUTER_POINTS;

            const start = innerPoints[fromIndex];
            const end = outerPoints[toIndex];
            
            const pulse = 0.5 + 0.5 * Math.sin((frameCount / 60) + (i * Math.PI / totalLinks));
            const opacity = 0.1 + (progress * 0.4) * pulse;
            
            const isPrimary = fromIndex < QUANTUM_TECHS.length;

            generatedLinks.push({
                id: i,
                x1: start.x,
                y1: start.y,
                x2: end.x,
                y2: end.y,
                stroke: isPrimary ? "hsl(var(--primary) / 0.8)" : "hsl(var(--border))",
                strokeWidth: 0.5 + progress * 1.0,
                opacity: Math.max(0.05, opacity)
            });
        }
        return generatedLinks;
    }, [frameCount, progress, isClient, innerPoints, outerPoints]);

    const renderLabels = (labels: string[], radius: number, pointsArray: {x:number, y:number}[]) => {
        const totalPoints = pointsArray.length;
        return labels.map((label, index) => {
            const pointIndex = Math.floor(index * (totalPoints / labels.length));
            const angle = (pointIndex / totalPoints) * 2 * Math.PI + rotation;
            const x = CENTER + radius * Math.cos(angle);
            const y = CENTER + radius * Math.sin(angle);
            
            let textAnchor = "middle";
            if (Math.cos(angle) > 0.1) textAnchor = "start";
            if (Math.cos(angle) < -0.1) textAnchor = "end";

            return (
                <text
                    key={`label-${label}-${index}`}
                    x={x}
                    y={y}
                    dy=".3em"
                    textAnchor={textAnchor}
                    fontSize="10"
                    fill="hsl(var(--muted-foreground))"
                >
                    {label}
                </text>
            );
        });
    };

    if (!isClient) {
        return <div style={{ width: '100%', aspectRatio: '1 / 1' }} />;
    }

    return (
        <svg viewBox="0 0 600 600" width="100%" height="100%">
            <defs>
                 <filter id="glow-tam">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* The animated links */}
            <g>
                {links.map(link => (
                    <line
                        key={link.id}
                        x1={link.x1}
                        y1={link.y1}
                        x2={link.x2}
                        y2={link.y2}
                        stroke={link.stroke}
                        strokeWidth={link.strokeWidth}
                        strokeOpacity={link.opacity}
                    />
                ))}
            </g>

            {/* Inner & Outer points */}
            <g>
                {[...innerPoints, ...outerPoints].map((point, index) => (
                    <circle key={`point-${index}`} cx={point.x} cy={point.y} r={2} fill="hsl(var(--border))" opacity={0.5} />
                ))}
            </g>

             {/* Centerpiece: Now just shows the core tech labels */}
             <g textAnchor="middle">
                 <g style={{ transition: 'opacity 0.1s ease-in-out' }} opacity={1 - textProgress}>
                    <text x={CENTER} y={CENTER - 15} fontSize="14" fill="hsl(var(--muted-foreground))">
                        AI Technologies
                    </text>
                    <text x={CENTER} y={CENTER + 20} fontSize="24" fontWeight="bold" fill="hsl(var(--foreground))" style={{ filter: 'url(#glow-tam)'}}>
                        LLM & CV
                    </text>
                 </g>
                 <g style={{ transition: 'opacity 0.1s ease-in-out' }} opacity={textProgress}>
                    <text x={CENTER} y={CENTER - 15} fontSize="14" fill="hsl(var(--muted-foreground))">
                        Quantum Technologies
                    </text>
                    <text x={CENTER} y={CENTER + 20} fontSize="24" fontWeight="bold" fill="hsl(var(--foreground))" style={{ filter: 'url(#glow-tam)'}}>
                        QML & QRNG
                    </text>
                 </g>
                 <rect x={CENTER - 50} y={CENTER + 35} width={100} height="2" fill="hsl(var(--primary))" opacity={progress}/>
                 <rect x={CENTER - 50} y={CENTER + 35} width={100} height="2" fill="hsl(var(--muted-foreground))" opacity={1 - progress}/>
             </g>

            {/* Labels - AI */}
            <g opacity={1 - progress} style={{ transition: 'opacity 0.5s ease-in-out' }}>
                {renderLabels(AI_LABELS, OUTER_RADIUS + 15, outerPoints)}
                {renderLabels(AI_TECHS, INNER_RADIUS - 20, innerPoints)}
            </g>

            {/* Labels - Quantum */}
            <g opacity={progress} style={{ transition: 'opacity 0.5s ease-in-out' }}>
                {renderLabels(QUANTUM_LABELS, OUTER_RADIUS + 15, outerPoints)}
                {renderLabels(QUANTUM_TECHS, INNER_RADIUS + 25, innerPoints)}
            </g>
        </svg>
    );
}
