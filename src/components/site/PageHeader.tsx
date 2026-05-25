import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroMediaCarousel } from "./HeroMediaCarousel";
import { heroAssets } from "../../data/heroAssets";

export function PageHeader({
  eyebrow,
  title,
  italicTail,
  intro,
  pageKey,
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  intro?: string;
  pageKey: keyof typeof heroAssets;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const assets = heroAssets[pageKey] || heroAssets.home;

  return (
    <section ref={ref} className="relative min-h-[700px] lg:h-[calc(100vh-140px)] flex flex-col bg-diagnostic-navy overflow-hidden">
      {/* Layer 1: Automated Hero Carousel (Mirroring Hero Rules) */}
      <HeroMediaCarousel assets={assets} scale={scale} />

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
