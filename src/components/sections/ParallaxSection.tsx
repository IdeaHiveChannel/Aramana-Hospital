import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface ParallaxSectionProps {
  image: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlayOpacity?: number;
  className?: string;
}

export function ParallaxSection({
  image,
  eyebrow,
  title,
  subtitle,
  height = "h-[50vh] md:h-[60vh]",
  overlayOpacity = 0.7,
  className
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={ref}
      className={cn("relative flex items-center justify-center overflow-hidden", height, className)}
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-center bg-cover scale-150"
          style={{ backgroundImage: `url(${image})` }}
        />
      </motion.div>
      
      <div 
        className="absolute inset-0 z-10 bg-diagnostic-navy" 
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 overlay-fade-to-white opacity-20 z-15" />
      
      {(eyebrow || title || subtitle) && (
        <div className="relative z-20 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {eyebrow && (
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-12 bg-emerald/60" />
                <span className="text-emerald font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">{eyebrow}</span>
                <span className="h-px w-12 bg-emerald/60" />
              </div>
            )}
            {title && (
              <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-8 uppercase tracking-tighter leading-none">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/60 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
