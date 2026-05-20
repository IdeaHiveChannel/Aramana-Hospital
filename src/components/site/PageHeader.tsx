import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImageSlot } from "./ImageSlot";
import { cn } from "../../lib/utils";

export function PageHeader({
  eyebrow,
  title,
  italicTail,
  intro,
  slotId,
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  intro?: string;
  slotId: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="relative min-h-[700px] lg:h-[calc(100vh-140px)] flex flex-col bg-diagnostic-navy overflow-hidden">
      {/* Layer 1: Cinematic Media Layer (Mirroring Hero Rules) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ scale }}
          className="h-full w-full relative"
        >
          {/* Base Image Fallback */}
          <ImageSlot 
            id={slotId} 
            ratio="" 
            tone="dark" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[0.2]" 
          />
          
          {/* Video Layer */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[0.2]"
          >
            <source src="https://player.vimeo.com/external/517090025.sd.mp4?s=330c6a53696a40e796035079a40536a0c06830d6&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>

          {/* Layer 2: Multi-Stage Contrast Governance */}
          <div className="absolute inset-0 bg-diagnostic-navy/60 z-10" />
          <div className="absolute inset-0 overlay-hero-dark z-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,25,35,0.8)_0%,transparent_70%)] z-30" />
        </motion.div>
      </div>

      {/* Layer 2: Content - Balanced Breathing */}
      <div className="container-custom relative z-20 grow flex flex-col justify-center pt-[140px] pb-[80px] md:pt-[160px] md:pb-[100px] lg:pt-[120px] lg:pb-[80px]">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="h-px w-10 bg-emerald/60" />
            <span className="text-emerald font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-brand">{eyebrow}</span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8 md:mb-10 uppercase font-brand">
            {title}
            {italicTail && (
              <>
                <br />
                <span className="text-accent text-display font-normal text-3xl md:text-5xl lg:text-6xl italic normal-case">
                  {italicTail}
                </span>
              </>
            )}
          </h1>
          
          {intro && (
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
              {intro}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
