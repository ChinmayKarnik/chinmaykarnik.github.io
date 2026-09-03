"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Rainbow from "./Rainbow";
import Avatar from "./Avatar";
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

const RainbowStage = styled.div`
  position: absolute;
  right: 6%;
  top: 2%;
  width: 46%;
  max-width: 680px;
  aspect-ratio: 840 / 460;

  @media (max-width: 900px) {
    display: none;
  }
`;

const AvatarStage = styled.div`
  position: absolute;
  right: 27%;
  top: 42%;
  width: 130px;

  @media (max-width: 900px) {
    display: none;
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
      <RainbowStage>
        <Rainbow />
      </RainbowStage>
      <AvatarStage>
        <Avatar />
      </AvatarStage>
      <HillClip>
        <HillSvg viewBox={`0 0 ${HILL_VIEWBOX_WIDTH} 456`} preserveAspectRatio="none" aria-hidden>
          <path d={HERO_FOREGROUND_PATH} fill={colors.white} />
        </HillSvg>
      </HillClip>
    </HeroWrapper>
  );
}
