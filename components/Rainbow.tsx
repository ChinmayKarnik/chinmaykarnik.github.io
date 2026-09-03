"use client";

import { colors } from "@/lib/theme";

const CX = 420;
const CY = 440;
const RADII = [330, 288, 246, 204, 162];

function arcPath(r: number) {
  return `M ${CX - r},${CY} A ${r},${r} 0 0 1 ${CX + r},${CY}`;
}

export default function Rainbow() {
  return (
    <svg
      viewBox="0 0 840 460"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMax meet"
      style={{ display: "block", overflow: "visible" }}
      aria-hidden
    >
      {colors.rainbow.map((color, i) => (
        <path
          key={color}
          d={arcPath(RADII[i])}
          stroke={color}
          strokeWidth={13}
          strokeLinecap="round"
          strokeDasharray="24 16"
          fill="none"
        />
      ))}
    </svg>
  );
}

export const RAINBOW_PEAK = {
  cx: CX,
  topY: CY - RADII[3],
  viewBoxHeight: 460,
  viewBoxWidth: 840,
};
