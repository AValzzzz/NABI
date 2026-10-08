import type { ReactNode } from 'react';
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
type IconProps = { size?: number };
const svg = (size = 22, children: ReactNode) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...P}>{children}</svg>
);

export const Speaker = ({ size }: IconProps) => svg(size, <><path d="M11 5 6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></>);
export const Home = ({ size }: IconProps) => svg(size, <><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /></>);
export const Cards = ({ size }: IconProps) => svg(size, <><rect x="3" y="6" width="14" height="14" rx="2" /><path d="M7 3h12a2 2 0 0 1 2 2v12" /></>);
export const Pencil = ({ size }: IconProps) => svg(size, <><path d="M4 20h4L19 9l-4-4L4 16v4z" /><path d="m13.5 6.5 4 4" /></>);
export const Chart = ({ size }: IconProps) => svg(size, <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>);
export const Gear = ({ size }: IconProps) => svg(size, <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>);
export const Close = ({ size }: IconProps) => svg(size, <path d="M6 6l12 12M18 6 6 18" />);
export const Back = ({ size }: IconProps) => svg(size, <path d="M15 18 9 12l6-6" />);
export const Erase = ({ size }: IconProps) => svg(size, <><path d="M21 4H8l-6 8 6 8h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" /><path d="m12 9 6 6M18 9l-6 6" /></>);
export const Undo = ({ size }: IconProps) => svg(size, <><path d="M9 14 4 9l5-5" /><path d="M4 9h11a5 5 0 0 1 0 10h-3" /></>);
export const Lock = ({ size }: IconProps) => svg(size, <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>);
export const Check = ({ size }: IconProps) => svg(size, <path d="M5 12l5 5L20 7" />);
