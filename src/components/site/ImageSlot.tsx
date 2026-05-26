import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Tone = "light" | "dark";

type ImageSlotProps = {
  id: string;
  tone?: Tone;
  ratio?: string;
  caption?: string;
  children?: ReactNode;
  className?: string;
  parallax?: boolean;
};

// Institutional Image Mapping - Blue-Green Cinematic
const imageMap: Record<string, string> = {
  "hero-main": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
  "about-main": "https://images.unsplash.com/photo-1516549655169-df83a0774514",
  "cardiology-main": "https://images.unsplash.com/photo-1576091160550-2173bdb999ef",
  "diagnostics-main": "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283",
  "doctors-main": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  "emergency-main": "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283",
  "hospital-corridor": "https://images.unsplash.com/photo-1516549655169-df83a0774514",
  "cath-lab": "https://images.unsplash.com/photo-1576091160550-2173bdb999ef",
  "diagnostics-header": "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c",
  "departments-header": "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c7e",
  "doctors-header": "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e",
  "media-header": "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c7e",
  "diagnostics-ecg-room": "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283",
  "diagnostics-cath-lab": "https://images.unsplash.com/photo-1576091160550-2173bdb999ef",
  "contact-header": "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c7e",
};

export function ImageSlot({
  id,
  tone = "dark",
  ratio = "4/3",
  caption,
  children,
  className = "",
  parallax = false,
}: ImageSlotProps) {
  const imageUrl = imageMap[id] || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d";

  return (
    <div
      data-image-slot={id}
      className={cn("img-container overflow-hidden group", className)}
      style={{ aspectRatio: ratio }}
    >
      <motion.img
        src={`${imageUrl}?auto=format&fit=crop&q=80&w=1200`}
        alt={id}
        className="img-cinematic h-full w-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="overlay-cinematic opacity-40 group-hover:opacity-20 transition-opacity duration-700" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
        {children}
        {caption && <div className="mt-6 text-hairline opacity-70 text-white">{caption}</div>}
      </div>
    </div>
  );
}
