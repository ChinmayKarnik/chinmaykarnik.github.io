type IconProps = {
  size?: number;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function SoundIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12.0133 4.60757C11.9149 4.2957 11.5463 4.19331 11.2861 4.39151L5.93425 8.46914C5.84716 8.5355 5.74071 8.57143 5.63123 8.57143H1.5C1.22386 8.57143 1 8.79529 1 9.07143V14.9286C1 15.2047 1.22386 15.4286 1.5 15.4286H5.63123C5.74071 15.4286 5.84716 15.4645 5.93425 15.5309L11.2861 19.6085C11.5463 19.8067 11.9149 19.7043 12.0133 19.3924C12.3582 18.2999 13 15.7612 13 12C13 8.2388 12.3582 5.70014 12.0133 4.60757Z" />
      <path d="M17.54 8.46002C18.4774 9.39766 19.004 10.6692 19.004 11.995C19.004 13.3208 18.4774 14.5924 17.54 15.53" />
      <path d="M20.0703 4.92999C21.945 6.80527 22.9982 9.34835 22.9982 12C22.9982 14.6516 21.945 17.1947 20.0703 19.07" />
    </svg>
  );
}

export function SunIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: "rotate(90deg)" }}>
      <circle cx="12" cy="12" r="6" stroke="currentColor" fill="none" strokeWidth={1.8} />
      <circle cx="22" cy="12" r="1.5" fill="currentColor" />
      <circle cx="19.0711" cy="19.0711" r="1.5" fill="currentColor" />
      <circle cx="12" cy="22" r="1.5" fill="currentColor" />
      <circle cx="4.9289" cy="19.0711" r="1.5" fill="currentColor" />
      <circle cx="2" cy="12" r="1.5" fill="currentColor" />
      <circle cx="4.9289" cy="4.9289" r="1.5" fill="currentColor" />
      <circle cx="12" cy="2" r="1.5" fill="currentColor" />
      <circle cx="19.0711" cy="4.9289" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function RssIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </svg>
  );
}

export function ArrowDownIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <line x1="12" y1="4" x2="12" y2="20" />
      <polyline points="5 13 12 20 19 13" />
    </svg>
  );
}

export function GithubIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.2c0-1.5.9-2.3 2.1-2.3s1.9.8 1.9 2.3V17" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
    </svg>
  );
}

export function MailIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}
