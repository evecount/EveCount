import React from 'react';

export function QuantumHeroGraphic() {
  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[540px] aspect-[540/500] select-none">
      <svg
        viewBox="0 0 540 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* Subtle gold gradient for metallic highlights */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D7AF55" />
            <stop offset="100%" stopColor="#B8872A" />
          </linearGradient>

          {/* Soft warm wash gradient */}
          <linearGradient id="washGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5EBD6" />
            <stop offset="100%" stopColor="#EDE0C4" />
          </linearGradient>

          {/* Stipple dot pattern */}
          <pattern id="stippleDots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#16181D" opacity="0.18" />
            <circle cx="8" cy="8" r="0.8" fill="#B8872A" opacity="0.25" />
          </pattern>

          {/* Diagonal grid pattern */}
          <pattern id="diagGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 16L16 0M-4 4L4 -4M12 20L20 12" stroke="#16181D" strokeWidth="0.8" opacity="0.1" />
          </pattern>
        </defs>

        {/* Ambient background aura */}
        <circle cx="340" cy="220" r="160" fill="url(#washGradient)" opacity="0.6" />

        {/* --- 1. Architectural Foundation Arch (Left Base) --- */}
        <path
          d="M60 460 V 260 C 60 170 180 170 180 260 V 460 Z"
          fill="#EEF0F2"
          stroke="#16181D"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Arch interior shadow texture */}
        <path
          d="M80 460 V 280 C 80 210 160 210 160 280 V 460 Z"
          fill="#16181D"
        />
        {/* Architectural Staircase inside arch */}
        <g stroke="#D7AF55" strokeWidth="2.5" strokeLinecap="round">
          <line x1="88" y1="440" x2="152" y2="440" />
          <line x1="92" y1="410" x2="148" y2="410" />
          <line x1="96" y1="380" x2="144" y2="380" />
          <line x1="100" y1="350" x2="140" y2="350" />
          <line x1="106" y1="320" x2="134" y2="320" />
          <line x1="112" y1="290" x2="128" y2="290" />
        </g>

        {/* --- 2. Thinking Profile / Sovereign Architect Silhouette --- */}
        <g id="architect-silhouette">
          {/* Main thinking head form */}
          <path
            d="M170 460 C 160 380 170 330 200 300 C 230 270 270 260 310 270 C 350 280 380 320 380 370 C 380 410 370 440 360 460 Z"
            fill="url(#washGradient)"
            stroke="#16181D"
            strokeWidth="3.5"
          />
          {/* Stipple texture overlay */}
          <path
            d="M170 460 C 160 380 170 330 200 300 C 230 270 270 260 310 270 C 350 280 380 320 380 370 C 380 410 370 440 360 460 Z"
            fill="url(#stippleDots)"
          />
          {/* Internal architectural door/portal */}
          <path
            d="M245 460 V 385 C 245 365 285 365 285 385 V 460 Z"
            fill="#16181D"
          />
        </g>

        {/* --- 3. The Central Quantum Bloch Sphere --- */}
        <g id="bloch-sphere" transform="translate(320, 160)">
          {/* Sphere fill */}
          <circle cx="0" cy="0" r="76" fill="#FFFFFF" stroke="#16181D" strokeWidth="3.5" />
          
          {/* Equatorial latitude and longitude ellipses */}
          <ellipse cx="0" cy="0" rx="76" ry="24" stroke="#5B616B" strokeWidth="2" strokeDasharray="5 4" fill="none" />
          <ellipse cx="0" cy="0" rx="26" ry="76" stroke="#5B616B" strokeWidth="1.8" fill="none" opacity="0.7" />
          
          {/* Z-Axis Vector */}
          <line x1="0" y1="-95" x2="0" y2="95" stroke="#16181D" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="0,-102 -5,-92 5,-92" fill="#16181D" />
          <text x="8" y="-90" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#16181D">|0⟩</text>
          <text x="8" y="98" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#5B616B">|1⟩</text>

          {/* Quantum State Superposition Vector (Gold Arrow) */}
          <line x1="0" y1="0" x2="48" y2="-42" stroke="url(#goldGradient)" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="48" cy="-42" r="6" fill="#D7AF55" stroke="#16181D" strokeWidth="2" />
          <text x="58" y="-40" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#B8872A">|ψ⟩</text>
        </g>

        {/* --- 4. Interlocking Geometric & Optical Elements --- */}
        
        {/* Prismatic Diamond (Refraction constant 0x5f) */}
        <g transform="translate(190, 120)">
          <polygon
            points="0,-36 32,0 0,36 -32,0"
            fill="url(#goldGradient)"
            stroke="#16181D"
            strokeWidth="3.5"
          />
          <polygon
            points="0,-22 20,0 0,22 -20,0"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </g>

        {/* Geometric Sunburst / Star of Innovation */}
        <g transform="translate(250, 60)">
          <path
            d="M0 -22 L4 -6 L20 -6 L8 4 L12 20 L0 10 L-12 20 L-8 4 L-20 -6 L-4 -6 Z"
            fill="#16181D"
          />
        </g>

        {/* Orbiting Quantum Waveform */}
        <path
          d="M390 100 C 450 120 480 200 450 270 C 420 340 370 360 410 420"
          stroke="#16181D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Trapped-Ion Orbiting Node (Quantinuum) */}
        <circle cx="450" cy="270" r="14" fill="#D7AF55" stroke="#16181D" strokeWidth="3" />
        <circle cx="450" cy="270" r="5" fill="#FFFFFF" />

        {/* Algorithmic Stack Blocks */}
        <g transform="translate(400, 310)">
          <rect x="0" y="0" width="70" height="22" rx="4" fill="#EEF0F2" stroke="#16181D" strokeWidth="2.8" />
          <rect x="10" y="28" width="70" height="22" rx="4" fill="url(#washGradient)" stroke="#16181D" strokeWidth="2.8" />
          <rect x="-5" y="56" width="70" height="22" rx="4" fill="#FFFFFF" stroke="#16181D" strokeWidth="2.8" />
          <circle cx="20" cy="11" r="3" fill="#B8872A" />
          <circle cx="30" cy="39" r="3" fill="#16181D" />
          <circle cx="15" cy="67" r="3" fill="#D7AF55" />
        </g>

        {/* Precision Measurement Ticks (Subtle Architectural Grounding) */}
        <g stroke="#5B616B" strokeWidth="1.5" opacity="0.6">
          <line x1="60" y1="475" x2="480" y2="475" />
          <line x1="60" y1="470" x2="60" y2="480" />
          <line x1="160" y1="472" x2="160" y2="478" />
          <line x1="260" y1="470" x2="260" y2="480" />
          <line x1="360" y1="472" x2="360" y2="478" />
          <line x1="480" y1="470" x2="480" y2="480" />
        </g>
        <text x="60" y="492" fontFamily="monospace" fontSize="10" fill="#5B616B" letterSpacing="1">
          EVE COUNT // QUANTUM HARDWARE INTERFACE 0.1
        </text>
      </svg>
    </div>
  );
}
