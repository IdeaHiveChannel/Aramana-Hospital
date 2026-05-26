import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "../../lib/utils";

const videoStories = [
  {
    id: 1,
    title: "Emergency Cardiac Care Success",
    patient: "Rahman K.",
    location: "Kasaragod",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1200",
    description:
      "Reached Aramana at 2 AM with acute chest pain. The team's rapid response saved my life.",
  },
  {
    id: 2,
    title: "Angioplasty Recovery Journey",
    patient: "Saraswathi Amma",
    location: "Kanhangad",
    thumbnail:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200",
    description:
      "The clarity with which Dr. Mansoor explained the procedure gave me immense confidence.",
  },
  {
    id: 3,
    title: "Comprehensive Health Screening",
    patient: "Thomas Varghese",
    location: "Bekal",
    thumbnail:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    description:
      "Detailed diagnostics and preventive care that helped identify my condition early.",
  },
];

export function PatientStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % videoStories.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + videoStories.length) % videoStories.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-diagnostic-navy section-padding overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-12 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">
                Patient Feedback
              </span>
            </div>
            <h2 className="text-white heading-section">
              Real{" "}
              <span className="text-emerald text-display font-normal text-3xl md:text-5xl lg:text-6xl">
                Experiences
              </span>{" "}
              from our patients.
            </h2>
          </div>

          <div className="flex items-center gap-6 pb-4">
            <button
              onClick={prev}
              className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-emerald hover:border-emerald transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-emerald hover:border-emerald transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative aspect-video md:aspect-21/9 rounded-xl overflow-hidden shadow-4xl border border-white/5">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={videoStories[activeIdx].thumbnail}
                alt={videoStories[activeIdx].title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-linear-to-t from-diagnostic-navy via-diagnostic-navy/40 to-transparent z-10" />

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="h-20 w-20 md:h-24 md:w-24 bg-emerald text-white rounded-full flex items-center justify-center shadow-3xl transition-all hover:scale-110 active:scale-95 group">
                  <Play
                    size={32}
                    fill="currentColor"
                    className="ml-1 transition-transform group-hover:scale-110"
                  />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-4xl z-20">
                <Quote className="text-emerald mb-6 md:mb-8 opacity-60" size={40} />
                <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-extrabold mb-8 md:mb-10 leading-[1.2]">
                  {videoStories[activeIdx].description}
                </h3>
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-emerald/20 border border-emerald/30 flex items-center justify-center text-emerald font-bold text-lg">
                    {videoStories[activeIdx].patient[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg md:text-xl">
                      {videoStories[activeIdx].patient}
                    </div>
                    <div className="text-emerald text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold">
                      {videoStories[activeIdx].location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {videoStories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => {
                setDirection(idx > activeIdx ? 1 : -1);
                setActiveIdx(idx);
              }}
              className={cn(
                "p-5 rounded-xl border transition-all text-left",
                activeIdx === idx
                  ? "bg-white/5 border-emerald/50 shadow-lg shadow-emerald/5"
                  : "bg-transparent border-white/5 hover:border-white/20",
              )}
            >
              <div className="text-emerald font-bold text-[9px] uppercase tracking-widest mb-1">
                Video Story 0{story.id}
              </div>
              <div className="text-white font-bold text-sm">{story.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
