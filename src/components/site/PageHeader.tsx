import { motion } from "framer-motion";
import { ImageSlot } from "./ImageSlot";
import { cn } from "../../lib/utils";

export function PageHeader({
  eyebrow,
  title,
  italicTail,
  intro,
  slotId,
  variant = "restrained",
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  intro?: string;
  slotId: string;
  variant?: "cinematic" | "restrained";
}) {
  const isCinematic = variant === "cinematic";

  return (
    <section className={cn(
      "relative bg-diagnostic-navy overflow-hidden",
      isCinematic ? "h-[80vh] flex items-center" : "pt-40 pb-20"
    )}>
      <div className="absolute inset-0 z-0">
        <ImageSlot id={slotId} ratio="" tone="dark" className="h-full w-full object-cover opacity-40 grayscale-[0.2]" />
        
        {/* Multi-Stage Contrast Governance */}
        <div className="absolute inset-0 bg-diagnostic-navy/40 z-10" />
        <div className="absolute inset-0 overlay-hero-dark z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,25,35,0.8)_0%,transparent_70%)] z-30" />
        
        {!isCinematic && <div className="absolute inset-0 bg-linear-to-t from-diagnostic-navy to-transparent opacity-60 z-40" />}
      </div>

      <div className={cn(
        "container-custom relative z-10",
        isCinematic ? "" : "md:pt-10"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-emerald/60" />
            <span className="text-emerald font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">{eyebrow}</span>
          </div>

          <h1 className={cn(
            "text-white font-extrabold tracking-tighter leading-[1.1] mb-10",
            isCinematic ? "text-5xl md:text-7xl lg:text-8xl" : "text-4xl md:text-5xl lg:text-6xl"
          )}>
            {title}
            {italicTail && (
              <>
                {" "}
                <span className={cn(
                  "text-emerald text-display font-normal",
                  isCinematic ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-4xl lg:text-5xl"
                )}>{italicTail}</span>
              </>
            )}
          </h1>
          
          {intro && (
            <p className={cn(
              "max-w-2xl leading-relaxed font-medium",
              isCinematic ? "text-white/70 text-lg md:text-xl" : "text-white/60 text-base md:text-lg"
            )}>{intro}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
