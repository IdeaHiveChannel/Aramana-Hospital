import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface Asset {
  type: "image" | "video";
  url: string;
}

interface HeroMediaCarouselProps {
  assets: Asset[];
  interval?: number;
  scale?: MotionValue<number>;
}

export function HeroMediaCarousel({
  assets,
  interval = 6000,
  scale
}: HeroMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % assets.length);
  }, [assets.length]);

  useEffect(() => {
    if (assets.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [assets.length, interval, next]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div 
            style={{ scale }}
            className="h-full w-full relative"
          >
            {assets[currentIndex].type === "video" ? (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[0.2]"
              >
                <source src={assets[currentIndex].url} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={`${assets[currentIndex].url}?auto=format&fit=crop&q=80&w=2000`} 
                alt="Institutional Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[0.2]"
              />
            )}

            {/* Layer 2: Multi-Stage Contrast Governance */}
            <div className="absolute inset-0 bg-diagnostic-navy/60 z-10" />
            <div className="absolute inset-0 overlay-hero-dark z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,25,35,0.8)_0%,transparent_70%)] z-30" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
