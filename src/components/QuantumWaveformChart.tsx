'use client';

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const TOTAL_POINTS = 60;
const ANIMATION_DURATION_MS = 10000;
const UPDATE_INTERVAL_MS = 50;
const TOTAL_FRAMES = ANIMATION_DURATION_MS / UPDATE_INTERVAL_MS;


const generateWaveData = (frameCount: number) => {
  const data = [];
  const time = (frameCount % TOTAL_FRAMES) / TOTAL_FRAMES; // Normalized time 0 to 1

  for (let i = 0; i < TOTAL_POINTS; i++) {
    const x = i / (TOTAL_POINTS - 1); // x from 0 to 1
    
    // Three intersecting waves with different properties, evolving over time
    const wave1 = 45 * Math.sin(x * 2 * Math.PI + time * 2 * Math.PI);
    const wave2 = 35 * Math.cos(x * 3 * Math.PI - time * 2 * Math.PI);
    const wave3 = 25 * Math.sin(x * 4 * Math.PI + time * 1 * Math.PI);

    data.push({
      x: i,
      vectorA: wave1 + 75, // Offset to keep within view
      vectorB: wave2 + 75,
      vectorC: wave3 + 75,
    });
  }
  return data;
};


export function QuantumWaveformChart() {
    const [frameCount, setFrameCount] = useState(0);
    
    useEffect(() => {
        let interval: NodeJS.Timeout;
        const startAnimation = () => {
          interval = setInterval(() => {
              setFrameCount(prev => prev + 1);
          }, UPDATE_INTERVAL_MS); 
        }
        startAnimation();

        return () => clearInterval(interval);
    }, []);

    const data = generateWaveData(frameCount);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="1 4" stroke="hsl(var(--border) / 0.3)" />
                <XAxis dataKey="x" hide={true} />
                <YAxis domain={[0, 150]} hide={true} />
                <Line type="monotone" dataKey="vectorA" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="vectorB" stroke="hsl(var(--chart-2))" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="vectorC" stroke="hsl(var(--chart-4))" strokeWidth={1.5} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}
