import React from 'react';

const WAVE_PATHS = [
  "M-360 170 C -270 100 -90 100 0 170 S 180 240 360 170 S 540 100 720 170 S 900 240 1080 170 S 1260 100 1440 170 S 1620 240 1800 170 S 1980 100 2160 170",
  "M-360 230 C -270 175 -90 175 0 230 S 180 285 360 230 S 540 175 720 230 S 900 285 1080 230 S 1260 175 1440 230 S 1620 285 1800 230 S 1980 175 2160 230",
  "M-360 110 C -270 65 -90 65 0 110 S 180 155 360 110 S 540 65 720 110 S 900 155 1080 110 S 1260 65 1440 110 S 1620 155 1800 110 S 1980 65 2160 110",
];

export type DiagnosticInterludeProps = {
  kicker?: string;
  first: string;
  emphasis: string;
  note: string;
  facts: string[];
};

/**
 * Full-bleed moss-to-ink band used inside long forms to break the rhythm.
 * Decorative hairlines drift via CSS keyframes only (visible before hydration,
 * neutralised under prefers-reduced-motion).
 */
export function DiagnosticInterlude({ kicker = "WHY WE ASK", first, emphasis, note, facts }: DiagnosticInterludeProps) {
  return (
    <section className="diagnostic-interlude">
      <svg className="interlude-waves" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {WAVE_PATHS.map((d, i) => <path key={d} className={`w${i + 1}`} d={d} />)}
      </svg>
      <div className="interlude-body">
        <p className="handoff-kicker">{kicker}</p>
        <h2>{first}<br /><em>{emphasis}</em></h2>
        <p>{note}</p>
        <ul className="interlude-facts">{facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
      </div>
    </section>
  );
}
