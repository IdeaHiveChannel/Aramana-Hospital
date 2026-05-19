import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface CarouselItem {
  image: string;
  title?: string;
  description?: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  aspectRatio?: string;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  className?: string;
}

export function ImageCarousel({
  items,
  aspectRatio = "aspect-video",
  autoPlay = true,
  interval = 5000,
  showDots = true,
  className
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  return (
    <div className={cn("relative group overflow-hidden rounded-xl", aspectRatio, className)}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title || ""}
            className="w-full h-full object-cover"
          />
          {(items[currentIndex].title || items[currentIndex].description) && (
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              {items[currentIndex].title && (
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  {items[currentIndex].title}
                </h3>
              )}
              {items[currentIndex].description && (
                <p className="text-white/70 text-sm md:text-base max-w-2xl">
                  {items[currentIndex].description}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button
          onClick={prev}
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald hover:border-emerald transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald hover:border-emerald transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      {showDots && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={cn(
                "h-1.5 transition-all rounded-full",
                currentIndex === idx ? "w-8 bg-emerald" : "w-2 bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
