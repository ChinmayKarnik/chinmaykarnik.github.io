"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import { HERO_CLOUD_PATH, HERO_MIST_PATH, HERO_FOREGROUND_PATH } from "./hillPaths";

// Reference site renders its hills as a 5120x456 SVG, fixed-pixel-width and
// horizontally centered inside an overflow:hidden viewport. That (rather than
// stretching a viewBox to 100% width) is what keeps the wave proportions from
// distorting across breakpoints, so we use the same technique here.
const HILL_VIEWBOX_WIDTH = 5120;
const HILL_HEIGHT_DESKTOP = 456;
const HILL_HEIGHT_MOBILE = 220;

const HeroWrapper = styled.div`
  position: relative;
  background: ${colors.sky};
  height: ${HILL_HEIGHT_DESKTOP}px;
  overflow: hidden;

  @media (max-width: 900px) {
    height: ${HILL_HEIGHT_MOBILE}px;
  }
`;

const HillClip = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const HillSvg = styled.svg`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: block;
  width: ${HILL_VIEWBOX_WIDTH}px;
  height: ${HILL_HEIGHT_DESKTOP}px;

  @media (max-width: 900px) {
    height: ${HILL_HEIGHT_MOBILE}px;
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <HillClip>
        <HillSvg viewBox={`0 0 ${HILL_VIEWBOX_WIDTH} 456`} preserveAspectRatio="none" aria-hidden>
          <path d={HERO_CLOUD_PATH} fill={colors.footerHillLight} />
          <path d={HERO_MIST_PATH} fill={colors.hillLight} />
        </HillSvg>
      </HillClip>
      <HillClip>
        <HillSvg viewBox={`0 0 ${HILL_VIEWBOX_WIDTH} 456`} preserveAspectRatio="none" aria-hidden>
          {/* Safety strip: the foreground path's lowest point falls ~0.5px short
              of the viewBox edge, letting the sky background bleed through as a
              hairline seam. This sits underneath the real path and closes it. */}
          <rect x="0" y="450" width={HILL_VIEWBOX_WIDTH} height="6" fill={colors.white} />
          <path d={HERO_FOREGROUND_PATH} fill={colors.white} />
        </HillSvg>
      </HillClip>
    </HeroWrapper>
  );
}
