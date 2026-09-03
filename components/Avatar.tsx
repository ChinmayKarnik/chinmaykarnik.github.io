"use client";

import { colors } from "@/lib/theme";

/**
 * Simplified, flat-shape placeholder character (not a reproduction of any
 * specific illustration) — stands in for the "figure sitting on the rainbow"
 * until real artwork is commissioned.
 */
export default function Avatar() {
  const { hair, skin, sweater, sweaterShade, pants } = colors.avatar;

  return (
    <svg
      viewBox="0 0 140 160"
      width="100%"
      height="100%"
      style={{ display: "block", overflow: "visible" }}
      aria-hidden
    >
      <ellipse cx="70" cy="150" rx="46" ry="10" fill={pants} opacity={0.15} />

      {/* legs */}
      <path d="M30,110 Q70,150 110,110 L110,132 Q70,168 30,132 Z" fill={pants} />

      {/* torso / sweater */}
      <path
        d="M40,72 Q70,58 100,72 L104,120 Q70,138 36,120 Z"
        fill={sweater}
      />
      <path d="M40,72 Q70,58 100,72 L100,84 Q70,70 40,84 Z" fill={sweaterShade} />

      {/* arms */}
      <ellipse cx="38" cy="98" rx="11" ry="20" fill={sweater} />
      <ellipse cx="102" cy="98" rx="11" ry="20" fill={sweater} />

      {/* shoes */}
      <ellipse cx="46" cy="134" rx="12" ry="8" fill={colors.white} />
      <ellipse cx="94" cy="134" rx="12" ry="8" fill={colors.white} />

      {/* hair (back) */}
      <ellipse cx="70" cy="42" rx="34" ry="30" fill={hair} />

      {/* face */}
      <circle cx="70" cy="46" r="26" fill={skin} />

      {/* hair (front fringe) */}
      <path d="M40,40 Q70,10 100,40 Q100,20 70,18 Q40,20 40,40 Z" fill={hair} />

      {/* face details */}
      <circle cx="60" cy="48" r="2.4" fill={colors.text} />
      <circle cx="80" cy="48" r="2.4" fill={colors.text} />
      <circle cx="60" cy="58" r="4" fill="#e8a598" opacity={0.6} />
      <circle cx="80" cy="58" r="4" fill="#e8a598" opacity={0.6} />
      <path
        d="M63,58 Q70,63 77,58"
        stroke={colors.text}
        strokeWidth={1.6}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
