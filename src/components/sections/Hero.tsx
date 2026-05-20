import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { HeroMediaCarousel } from "../site/HeroMediaCarousel";
import { heroAssets } from "../../data/heroAssets";
import { hospital } from "../../data/hospital";
import { departments } from "../../data/departments";
import { doctors } from "../../data/doctors";
import { PhoneCall, Calendar, ArrowRight, ChevronDown, Activity, ShieldCheck, HeartPulse, Search } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<"dept" | "doc" | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as HTMLElement).closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  return (
    <>
      <section ref={ref} className="relative min-h-[700px] lg:h-[calc(100vh-140px)] flex flex-col bg-diagnostic-navy overflow-hidden">
        {/* Layer 1: Automated Hero Carousel (Mirroring Hero Rules) */}
        <HeroMediaCarousel assets={heroAssets.home} scale={scale} />

        {/* Layer 2: Content - Balanced Breathing */}
        <div className="container-custom relative z-20 grow flex flex-col justify-center pt-[140px] pb-[80px] md:pt-[160px] md:pb-[100px] lg:pt-[120px] lg:pb-[80px]">
          <motion.div 
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
          <div className="flex flex-col">
            <span className="text-emerald font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-6 md:mb-8 font-brand">Institutional Cardiac Excellence</span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8 md:mb-10 uppercase font-brand">
            Cardiac Care & <br />
            <span className="text-accent text-display font-normal text-3xl md:text-5xl lg:text-6xl italic normal-case">Multi-Specialty</span> Services <br />
            in Kasaragod.
          </h1>
          </div>

          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-10 md:mb-16 font-medium">
            24/7 emergency heart care, interventional angioplasty, and specialist consultations. 
            North Kerala's heart center with dedicated ICU monitoring and 
            experienced clinical consultants.
          </p>

            <div className="flex flex-wrap gap-6">
              <Link 
                to="/appointment" 
                className="btn-emerald flex items-center gap-3"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>
              
              <a 
                href={`tel:${hospital.phones.mainTel}`}
                className="btn-outline-white flex items-center gap-3"
              >
                <PhoneCall size={18} className="text-emerald" />
                <span>Emergency 24/7</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layer 3: Primary Patient Access Panel - Structural Separation to prevent blocking */}
      <div className="relative z-40 bg-white py-12 border-b border-slate-100 shadow-sm">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
              {/* Dept Access - Boxed */}
              <div 
                className="dropdown-container bg-white rounded-xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between group cursor-pointer hover:border-emerald/30 transition-all relative min-h-[140px]"
                onClick={() => setActiveDropdown(activeDropdown === "dept" ? null : "dept")}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-3 flex items-center gap-2 group-hover:text-emerald transition-colors">
                    <Activity size={14} /> Clinical Specialty
                  </span>
                  <div className="flex items-center justify-between text-cardiac-blue">
                    <span className="text-lg font-extrabold uppercase tracking-tight">Search Dept</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[11px] text-muted font-medium">Browse our expertise</span>
                  <ChevronDown size={18} className={`text-emerald transition-transform ${activeDropdown === "dept" ? "rotate-180" : "group-hover:translate-y-1"}`} />
                </div>

                <AnimatePresence>
                  {activeDropdown === "dept" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-[calc(100%+12px)] left-0 w-full md:w-72 bg-white shadow-4xl border border-slate-100 rounded-xl overflow-hidden z-50"
                    >
                      <div className="p-4 bg-slate-50 border-b border-slate-100">
                        <div className="flex items-center gap-3 text-cardiac-blue">
                          <Search size={14} className="text-emerald" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Select Department</span>
                        </div>
                      </div>
                      <div className="max-h-64 overflow-y-auto py-2">
                        {departments.map((dept) => (
                          <Link
                            key={dept.slug}
                            to="/departments/$slug"
                            params={{ slug: dept.slug }}
                            className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 text-cardiac-blue transition-colors group/item"
                          >
                            <span className="text-sm font-bold uppercase tracking-tight group-hover/item:text-emerald">{dept.name}</span>
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-emerald" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Doctor Access - Boxed */}
              <div 
                className="dropdown-container bg-white rounded-xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between group cursor-pointer hover:border-emerald/30 transition-all relative min-h-[140px]"
                onClick={() => setActiveDropdown(activeDropdown === "doc" ? null : "doc")}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-3 flex items-center gap-2 group-hover:text-emerald transition-colors">
                    <ShieldCheck size={14} /> Medical Specialists
                  </span>
                  <div className="flex items-center justify-between text-cardiac-blue">
                    <span className="text-lg font-extrabold uppercase tracking-tight">Find Doctor</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-[11px] text-muted font-medium">Consult our experts</span>
                  <ChevronDown size={18} className={`text-emerald transition-transform ${activeDropdown === "doc" ? "rotate-180" : "group-hover:translate-y-1"}`} />
                </div>

                <AnimatePresence>
                  {activeDropdown === "doc" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-[calc(100%+12px)] left-0 w-full md:w-80 bg-white shadow-4xl border border-slate-100 rounded-xl overflow-hidden z-50"
                    >
                      <div className="p-4 bg-slate-50 border-b border-slate-100">
                        <div className="flex items-center gap-3 text-cardiac-blue">
                          <Search size={14} className="text-emerald" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Consultant List</span>
                        </div>
                      </div>
                      <div className="max-h-80 overflow-y-auto py-2">
                        {doctors.map((doc) => (
                          <Link
                            key={doc.slug}
                            to="/doctors/$slug"
                            params={{ slug: doc.slug }}
                            className="flex flex-col px-6 py-4 hover:bg-slate-50 text-cardiac-blue transition-colors group/item border-b border-slate-50 last:border-0"
                          >
                            <span className="text-sm font-bold uppercase tracking-tight group-hover/item:text-emerald">{doc.name}</span>
                            <span className="text-[9px] uppercase tracking-wider text-muted mt-1 font-medium">{doc.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Diagnostics - Boxed */}
              <Link 
                to="/diagnostics"
                className="bg-white rounded-xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between group cursor-pointer hover:border-emerald/30 transition-all min-h-[140px]"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-3 flex items-center gap-2 group-hover:text-emerald transition-colors">
                    <HeartPulse size={14} /> Diagnostic Results
                  </span>
                  <div className="flex items-center justify-between text-cardiac-blue">
                    <span className="text-lg font-extrabold uppercase tracking-tight">Test Results</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-[11px] text-muted font-medium">Access your reports</span>
                  <ArrowRight size={18} className="text-emerald transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Emergency - Boxed & High Contrast */}
              <a 
                href={`tel:${hospital.phones.mainTel}`}
                className="bg-diagnostic-navy rounded-xl p-6 shadow-2xl flex flex-col justify-between group hover:bg-cardiac-blue transition-all relative overflow-hidden min-h-[140px]"
              >
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <PhoneCall size={64} strokeWidth={1} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <PhoneCall size={16} className="text-emerald" />
                      <span className="absolute -top-1.5 -right-1.5 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Emergency 24/7</span>
                  </div>
                  <div className="text-xl md:text-2xl font-black text-white tracking-tighter">
                    {hospital.phones.main}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-4">
                  <span className="text-[11px] text-white/40 font-medium">Rapid cardiac response</span>
                  <ArrowRight size={18} className="text-emerald transition-transform group-hover:translate-x-1" />
                </div>
              </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
