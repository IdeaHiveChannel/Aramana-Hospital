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
  variant?: "cinematic" | "restrained" | "split" | "minimal" | "asymmetric";
}) {
  const isCinematic = variant === "cinematic";
  const isSplit = variant === "split";
  const isMinimal = variant === "minimal";
  const isAsymmetric = variant === "asymmetric";

  return (
    <section className={cn(
      "relative bg-diagnostic-navy overflow-hidden",
      isCinematic ? "h-[85vh] flex items-center" : 
      isSplit ? "min-h-[70vh] flex items-center py-20" :
      isAsymmetric ? "min-h-[80vh] flex items-end pb-32" :
      isMinimal ? "py-32" : "pt-40 pb-20"
    )}>
      <div className="absolute inset-0 z-0">
        <ImageSlot id={slotId} ratio="" tone="dark" className={cn(
          "h-full w-full object-cover grayscale-[0.2]",
          (isCinematic || isSplit || isAsymmetric) ? "opacity-40" : "opacity-20"
        )} />
        
        {/* Multi-Stage Contrast Governance */}
        <div className="absolute inset-0 bg-diagnostic-navy/40 z-10" />
        <div className="absolute inset-0 overlay-hero-dark z-20" />
        
        {isAsymmetric && (
          <div className="absolute inset-0 bg-linear-to-tr from-diagnostic-navy via-diagnostic-navy/60 to-transparent z-30" />
        )}
        
        {isSplit && (
          <div className="absolute inset-0 bg-linear-to-r from-diagnostic-navy via-diagnostic-navy/80 to-transparent z-30" />
        )}

        {!isAsymmetric && !isSplit && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,25,35,0.8)_0%,transparent_70%)] z-30" />
        )}
        
        {!isCinematic && !isAsymmetric && !isSplit && <div className="absolute inset-0 bg-linear-to-t from-diagnostic-navy to-transparent opacity-60 z-40" />}
      </div>

      <div className={cn(
        "container-custom relative z-10",
        isCinematic ? "" : isAsymmetric ? "text-left" : "md:pt-10"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "max-w-5xl",
            isSplit ? "lg:max-w-3xl" : ""
          )}
        >
          <div className={cn(
            "flex items-center gap-3 mb-8",
            isMinimal ? "justify-center" : ""
          )}>
            <span className="h-px w-10 bg-emerald/60" />
            <span className="text-emerald font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">{eyebrow}</span>
            {isMinimal && <span className="h-px w-10 bg-emerald/60" />}
          </div>

          <h1 className={cn(
            "text-white font-extrabold tracking-tighter leading-[1.1] mb-10 uppercase",
            isCinematic ? "text-6xl md:text-8xl lg:text-9xl" : 
            isSplit ? "text-5xl md:text-7xl lg:text-8xl" :
            isAsymmetric ? "text-5xl md:text-7xl lg:text-8xl" :
            isMinimal ? "text-center text-4xl md:text-5xl lg:text-6xl" : "text-4xl md:text-6xl lg:text-7xl"
          )}>
            {title}
            {italicTail && (
              <>
                {" "}
                <span className={cn(
                  "text-emerald text-display font-normal normal-case",
                  isCinematic ? "text-5xl md:text-7xl lg:text-8xl" : 
                  isSplit ? "text-4xl md:text-6xl lg:text-7xl" :
                  isAsymmetric ? "text-4xl md:text-6xl lg:text-7xl" :
                  isMinimal ? "text-3xl md:text-4xl lg:text-5xl block mt-4" : "text-3xl md:text-5xl lg:text-6xl"
                )}>{italicTail}</span>
              </>
            )}
          </h1>
          
          {intro && (
            <p className={cn(
              "leading-relaxed font-medium",
              isCinematic ? "max-w-3xl text-white/70 text-lg md:text-xl" : 
              isSplit ? "max-w-2xl text-white/70 text-lg md:text-xl" :
              isAsymmetric ? "max-w-3xl text-white/70 text-lg md:text-xl" :
              isMinimal ? "mx-auto text-center max-w-2xl text-white/60 text-base md:text-lg" : "max-w-2xl text-white/60 text-base md:text-lg"
            )}>{intro}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
