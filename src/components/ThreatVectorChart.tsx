'use client';

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const initialData = [
  { subject: 'Scanning', A: 20, fullMark: 150 },
  { subject: 'Exfiltration', A: 30, fullMark: 150 },
  { subject: 'Privilege Escalation', A: 50, fullMark: 150 },
  { subject: 'Malware Execution', A: 40, fullMark: 150 },
  { subject: 'Command & Control', A: 60, fullMark: 150 },
  { subject: 'Lateral Movement', A: 25, fullMark: 150 },
];

const animationFrames = [
    // 1. Initial state, low activity
    [20, 30, 50, 40, 60, 25],
    // 2. Scanning increases
    [120, 40, 55, 45, 65, 30],
    // 3. Malware executes, C&C established
    [80, 50, 70, 130, 110, 40],
    // 4. Lateral movement and privilege escalation
    [60, 70, 140, 110, 120, 135],
    // 5. Data exfiltration peaks
    [40, 145, 100, 80, 90, 80],
    // 6. Threat diminishes
    [30, 70, 60, 50, 70, 50],
    // Back to initial
    [20, 30, 50, 40, 60, 25],
];

export function ThreatVectorChart() {
  const [data, setData] = useState(initialData);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % animationFrames.length;
        const nextFrame = animationFrames[nextIndex];
        
        setData(currentData => 
            currentData.map((item, index) => ({
                ...item,
                A: nextFrame[index],
            }))
        );

        return nextIndex;
      });
    }, 1500); // 1.5 seconds per frame, ~10.5 second loop

    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <defs>
            <radialGradient id="colorUv">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </radialGradient>
        </defs>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
        <Radar name="Threat Vector" dataKey="A" stroke="hsl(var(--primary))" fill="url(#colorUv)" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
