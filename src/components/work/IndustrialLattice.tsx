'use client';

import { useEffect, useRef } from 'react';

type Point3D = [number, number, number];
type Edge = [number, number];

function buildGeometry(variant: 'port' | 'mine'): { points: Point3D[]; edges: Edge[] } {
  const points: Point3D[] = [];
  const edges: Edge[] = [];

  const addSegment = (start: Point3D, end: Point3D, steps = 6) => {
    let prev = -1;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const idx = points.length;
      points.push([
        start[0] + (end[0] - start[0]) * t,
        start[1] + (end[1] - start[1]) * t,
        start[2] + (end[2] - start[2]) * t,
      ]);
      if (prev >= 0) edges.push([prev, idx]);
      prev = idx;
    }
  };

  const addBox = (x: number, y: number, z: number, w: number, h: number, d: number) => {
    const corners: Point3D[] = [
      [x, y, z],
      [x + w, y, z],
      [x + w, y, z + d],
      [x, y, z + d],
      [x, y + h, z],
      [x + w, y + h, z],
      [x + w, y + h, z + d],
      [x, y + h, z + d],
    ];
    const boxEdges: [number, number][] = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];
    for (const [a, b] of boxEdges) {
      const p1 = corners[a];
      const p2 = corners[b];
      if (p1 && p2) addSegment(p1, p2, 4);
    }
  };

  if (variant === 'port') {
    for (let x = -5; x <= 5; x++) addSegment([x, 0, -2], [x, 0, 2], 8);
    for (let z = -2; z <= 2; z++) addSegment([-5, 0, z], [5, 0, z], 16);
    for (const x of [-3.8, -0.7, 2.4]) {
      addBox(x, 0, -0.9, 1.5, 3.8, 1.5);
      addBox(x - 0.35, 3.8, -2.6, 2.2, 0.32, 5.8);
      addSegment([x, 1.6, -0.9], [x + 1.5, 3.8, -0.9]);
      addSegment([x + 1.5, 1.6, 0.6], [x, 3.8, 0.6]);
      addSegment([x + 0.7, 4.12, -1.7], [x + 0.7, 5.1, -0.1], 5);
      addSegment([x + 0.7, 5.1, -0.1], [x + 0.7, 4.12, 3.2], 7);
      addSegment([x + 0.7, 3.8, 2.8], [x + 0.7, 1, 2.8], 6);
    }
    const deck: Point3D[] = [
      [-5, 0.3, 2.1],
      [3.8, 0.3, 2.1],
      [5.3, 0.3, 3.1],
      [3.8, 0.3, 4.1],
      [-5, 0.3, 4.1],
      [-5, 0.3, 2.1],
    ];
    const hull: Point3D[] = deck.map(([x, y, z]) => [x * 0.94, y - 0.9, 3.1 + (z - 3.1) * 0.7]);
    for (let i = 0; i < deck.length - 1; i++) {
      const d1 = deck[i];
      const d2 = deck[i + 1];
      const h1 = hull[i];
      const h2 = hull[i + 1];
      if (d1 && d2 && h1 && h2) {
        addSegment(d1, d2, 10);
        addSegment(h1, h2, 10);
        addSegment(d1, h1, 3);
      }
    }
    addBox(-4.7, 0.3, 2.3, 1, 1.7, 1.5);
    for (let x = -3.2; x <= 2.5; x += 1.3) {
      for (let z = 2.3; z <= 3.3; z += 0.7) {
        addBox(x, 0.3, z, 1.1, 0.55, 0.6);
      }
    }
  } else {
    for (let level = 0; level < 5; level++) {
      const radius = 5 - level * 0.75;
      const y = -level * 0.45;
      for (let seg = 0; seg < 24; seg++) {
        const a1 = (seg * Math.PI) / 12;
        const a2 = ((seg + 1) * Math.PI) / 12;
        const p1: Point3D = [Math.cos(a1) * radius, y, Math.sin(a1) * radius * 0.62];
        const p2: Point3D = [Math.cos(a2) * radius, y, Math.sin(a2) * radius * 0.62];
        addSegment(p1, p2, 3);
        if (level < 4) {
          const nextR = radius - 0.75;
          addSegment(p1, [Math.cos(a1) * nextR, y - 0.45, Math.sin(a1) * nextR * 0.62], 2);
        }
      }
    }
    addBox(-3.4, 0, -1.3, 1.5, 3.5, 1.3);
    addSegment([-3.4, 0, -1.3], [-1.9, 3.5, -1.3]);
    addSegment([-1.9, 0, 0], [-3.4, 3.5, 0]);
    addBox(-3.6, 3.5, -1.5, 1.9, 0.4, 1.7);
    addSegment([-2.6, 3.9, -0.7], [1.5, 0, 2.5], 14);
    addBox(2.7, 0, -2.6, 2.2, 1, 1.5);
  }

  return { points, edges };
}

export function IndustrialLattice({
  className = '',
  variant = 'port',
  morph = false,
}: {
  className?: string;
  variant?: 'port' | 'mine';
  morph?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const primaryColor = '#27392b';
    const glowColor = '#c89d32';

    const layers = morph
      ? [
          { g: buildGeometry('port'), yawOffset: 0, morphIn: false },
          { g: buildGeometry('mine'), yawOffset: 0.55, morphIn: true },
        ]
      : [{ g: buildGeometry(variant), yawOffset: 0, morphIn: false }];

    let width = 0;
    let height = 0;
    let rafId = 0;
    const pointer = { x: -10000, y: -10000 };
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
    };

    const onPointerMove = (ev: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ev.clientX - rect.left;
      pointer.y = ev.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -10000;
      pointer.y = -10000;
    };

    const drawLayer = (
      layer: (typeof layers)[number],
      yaw: number,
      alpha: number,
      yOffset: number
    ) => {
      if (width === 0 || height === 0) return;
      const scale = Math.min(width / 11.6, height / 7.5);
      const projected = layer.g.points.map(([x, y, z]) => {
        const px = width * 0.5 + (x * Math.cos(yaw) - z * Math.sin(yaw)) * scale;
        const py = height * 0.64 + yOffset + ((z * Math.cos(yaw) + x * Math.sin(yaw)) * 0.42 - y) * scale;
        return {
          x: px,
          y: py,
          near: Math.max(0, 1 - Math.hypot(px - pointer.x, py - pointer.y) / 130),
        };
      });

      ctx.lineWidth = 1;
      for (const [i, j] of layer.g.edges) {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) continue;
        ctx.globalAlpha = (0.52 + Math.max(p1.near, p2.near) * 0.45) * alpha;
        ctx.strokeStyle = primaryColor;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      const now = reducedMotion ? 0 : performance.now() * 0.00016;
      for (let idx = 0; idx < projected.length; idx++) {
        const pt = projected[idx];
        if (!pt) continue;
        const pulse = reducedMotion ? 0 : Math.pow(Math.max(0, Math.sin(now * 3 + idx * 0.07)), 12) * 0.3;
        ctx.globalAlpha = 0.9 * alpha;
        ctx.fillStyle = pt.near > 0.2 ? glowColor : primaryColor;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = pt.near * 6;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 1.65 + pt.near * 1.5 + pulse, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const render = (ts: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = reducedMotion ? 0 : ts * 0.00016;
      const rect = canvas.getBoundingClientRect();
      const scrolled = reducedMotion ? 0 : Math.max(0, -rect.top);
      const morphFactor =
        morph && !reducedMotion
          ? Math.max(0, Math.min(1, scrolled / (window.innerHeight * 0.85)))
          : 0;
      const yOffset = reducedMotion ? 0 : Math.min(80, scrolled * 0.14);
      const baseYaw = -0.2 + Math.sin(t) * 0.04 + morphFactor * 0.35 + scrolled * 0.00035;

      for (const layer of layers) {
        const alpha = morph ? (layer.morphIn ? morphFactor : 1 - morphFactor) : 1;
        if (alpha >= 0.02) {
          drawLayer(layer, baseYaw + (layer.yawOffset || 0), alpha, yOffset);
        }
      }
      if (!reducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    const ro = new ResizeObserver(() => {
      updateSize();
      if (reducedMotion) render(0);
    });
    ro.observe(canvas);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    updateSize();
    render(0);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [variant, morph]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label={
        variant === 'port'
          ? 'Interactive connected-dot port with gantry cranes and a cargo ship'
          : 'Connected-dot open-pit mine and mining headframe'
      }
    />
  );
}

