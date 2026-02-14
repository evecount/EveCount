'use client';

import React, { useState, useEffect, useMemo } from 'react';

const NUM_OUTER_POINTS = 36; // Increased for more label space
const NUM_INNER_POINTS = 12;
const OUTER_RADIUS = 280;
const INNER_RADIUS = 80;
const CENTER = 300;
const ANIMATION_DURATION_SECONDS = 15;

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


const getPointOnCircle = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI;
    return {
        x: CENTER + radius * Math.cos(angle),
        y: CENTER + radius * Math.sin(angle)
    };
};

const outerPoints = Array.from({ length: NUM_OUTER_POINTS }, (_, i) => getPointOnCircle(i, NUM_OUTER_POINTS, OUTER_RADIUS));
const innerPoints = Array.from({ length: NUM_INNER_POINTS }, (_, i) => getPointOnCircle(i, NUM_INNER_POINTS, INNER_RADIUS));

const generateLinks = (frameCount: number, progress: number) => {
    const links = [];
    const totalLinks = NUM_OUTER_POINTS * 1.5; // More links
    for (let i = 0; i < totalLinks; i++) {
        // Use a consistent seed but vary connections
        const fromIndex = (i * 3) % NUM_INNER_POINTS;
        const toIndex = (i * 7) % NUM_OUTER_POINTS;

        const start = innerPoints[fromIndex];
        const end = outerPoints[toIndex];
        
        // Make opacity pulse and also grow with quantum progress
        const pulse = 0.5 + 0.5 * Math.sin((frameCount / 60) + (i * Math.PI / totalLinks));
        const opacity = 0.1 + (progress * 0.4) * pulse;
        
        const isPrimary = fromIndex < QUANTUM_TECHS.length;

        links.push({
            id: i,
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            stroke: isPrimary ? "hsl(var(--primary) / 0.8)" : "hsl(var(--border))",
            strokeWidth: 0.5 + progress * 1.0, // Thicker lines as we move to quantum
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

    // Animation progress: 0 -> 1 -> 0 over ANIMATION_DURATION_SECONDS
    const progress = useMemo(() => {
        if (!isClient) return 0;
        const period = 60 * ANIMATION_DURATION_SECONDS;
        return (Math.sin((frameCount % period) / (period / Math.PI)) + 1) / 2;
    }, [frameCount, isClient]);
    
    const tamValue = (1 + progress * 8).toFixed(1); // Animate from 1.0T to 9.0T

    const links = useMemo(() => {
        if (!isClient) return [];
        return generateLinks(frameCount, progress);
    }, [frameCount, progress, isClient]);

    const renderLabels = (labels: string[], radius: number, pointsArray: {x:number, y:number}[], opacity: number) => {
        const totalPoints = pointsArray.length;
        return labels.map((label, index) => {
            const pointIndex = Math.floor(index * (totalPoints / labels.length));
            const angle = (pointIndex / totalPoints) * 2 * Math.PI;
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
                    opacity={opacity}
                    style={{ transition: 'opacity 0.5s ease-in-out' }}
                >
                    {label}
                </text>
            );
        });
    };

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
            {isClient && (
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
            )}

            {/* Inner & Outer points */}
            <g>
                {[...innerPoints, ...outerPoints].map((point, index) => (
                    <circle key={`point-${index}`} cx={point.x} cy={point.y} r={2} fill="hsl(var(--border))" opacity={0.5} />
                ))}
            </g>

             {/* Centerpiece: Animated TAM Value */}
             <g textAnchor="middle">
                 <text x={CENTER} y={CENTER - 15} fontSize="14" fill="hsl(var(--muted-foreground))">
                     {progress > 0.5 ? "Quantum TAM" : "AI TAM"}
                 </text>
                 <text x={CENTER} y={CENTER + 20} fontSize="48" fontWeight="bold" fill="hsl(var(--foreground))" style={{ filter: 'url(#glow-tam)'}}>
                     ${tamValue}T+
                 </text>
                 <rect x={CENTER - 50} y={CENTER + 30} width={100} height="2" fill="hsl(var(--primary))" opacity={progress}/>
                 <rect x={CENTER - 50} y={CENTER + 30} width={100} height="2" fill="hsl(var(--muted-foreground))" opacity={1 - progress}/>
             </g>

            {/* Labels - AI */}
            <g opacity={1 - progress} style={{ transition: 'opacity 0.5s ease-in-out' }}>
                {renderLabels(AI_LABELS, OUTER_RADIUS + 15, outerPoints, 1)}
                {renderLabels(AI_TECHS, INNER_RADIUS - 20, innerPoints, 1)}
            </g>

            {/* Labels - Quantum */}
            <g opacity={progress} style={{ transition: 'opacity 0.5s ease-in-out' }}>
                {renderLabels(QUANTUM_LABELS, OUTER_RADIUS + 15, outerPoints, 1)}
                {renderLabels(QUANTUM_TECHS, INNER_RADIUS + 25, innerPoints, 1)}
            </g>

        </svg>
    );
}
