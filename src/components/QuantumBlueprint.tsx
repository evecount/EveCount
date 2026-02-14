'use client';

import React from 'react';
import { DynamicBlochSphere } from './DynamicBlochSphere';
import { SyntheticFieldChart } from './SyntheticFieldChart';

export function QuantumBlueprint() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <DynamicBlochSphere />
            <SyntheticFieldChart />
        </div>
    );
}
