import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconPulse({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M2 12h4l2-5 3 10 3-7 2 4h6" />
    </svg>
  );
}

export function IconHeart({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 20s-7-4.4-9.5-9.2C.8 7.5 3 4 6.3 4c2 0 3.4 1 5.7 3.4C14.3 5 15.7 4 17.7 4 21 4 23.2 7.5 21.5 10.8 19 15.6 12 20 12 20z" />
      <path d="M7 12h3l1.5-3 2 6 1.5-3H18" />
    </svg>
  );
}

export function IconStethoscope({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M5 3v6a4 4 0 0 0 8 0V3" />
      <path d="M9 13v3a5 5 0 0 0 10 0v-2" />
      <circle cx="19" cy="11" r="2" />
    </svg>
  );
}

export function IconCross({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IconAmbulance({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M2 17V8h11v9" />
      <path d="M13 11h4l3 3v3h-2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M6 6V4M5 5h2" />
    </svg>
  );
}

export function IconMicroscope({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M9 4h4l1 2-1 2H9L8 6l1-2z" />
      <path d="M11 8v7" />
      <path d="M7 19h12" />
      <path d="M9 19a6 6 0 0 0 9-5" />
    </svg>
  );
}

export function IconTooth({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M7 3c-2 0-3 1.5-3 4 0 3 1 4 2 7l1 6c.2 1 1.6 1 1.8 0L10 14h4l1.2 6c.2 1 1.6 1 1.8 0l1-6c1-3 2-4 2-7 0-2.5-1-4-3-4-1.5 0-2 1-5 1s-3.5-1-5-1z" />
    </svg>
  );
}

export function IconArrow({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconPhone({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 7 7l1-2 5 2v3a2 2 0 0 1-2 2C9 21 3 15 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function IconWhatsapp({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M21 12a9 9 0 1 1-3.6-7.2L21 4l-1.2 3.6A9 9 0 0 1 21 12z" />
      <path d="M8 10c.5 3 3 5.5 6 6l1.5-1.5L13 13l-1 1c-1-.5-2-1.5-2.5-2.5l1-1L9 8.5 7.5 10z" />
    </svg>
  );
}

export function IconMapPin({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconClock({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
