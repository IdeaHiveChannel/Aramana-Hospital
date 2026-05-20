import { ArrowUpRight, Stethoscope, Activity, ShieldCheck, HeartPulse, Heart, Baby, Syringe, Microscope } from "lucide-react";
import { departments } from "../../data/departments";
import { Link } from "@tanstack/react-router";

const iconMap: Record<string, any> = {
  "cardiology": HeartPulse,
  "general-medicine": Stethoscope,
  "gynaecology": Baby,
  "dentistry": Syringe,
  "diagnostics": Microscope,
  "icu-critical-care": Activity,
  "default": ShieldCheck
};

const deptImages: Record<string, string> = {
  "cardiology": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  "general-medicine": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
  "gynaecology": "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000",
  "dentistry": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
  "diagnostics": "https://images.unsplash.com/photo-1579154234431-da7170a7f21c?auto=format&fit=crop&q=80&w=1000",
  "icu-critical-care": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
  "default": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
};

export function DoctorEcosystem() {
  return (
    <section className="bg-white py-0">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border-x border-slate-100">
          {departments.slice(0, 6).map((dept) => {
            const Icon = iconMap[dept.slug] || iconMap.default;
            return (
              <Link 
                key={dept.slug}
                to="/departments/$slug"
                params={{ slug: dept.slug }}
                className="group relative bg-white p-12 transition-all duration-500 hover:bg-diagnostic-navy border-b border-slate-100"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-14 w-14 bg-soft-grey rounded-xl flex items-center justify-center text-cardiac-blue transition-all duration-500 group-hover:bg-white group-hover:text-emerald group-hover:scale-105 shadow-sm">
                      <Icon size={32} strokeWidth={1.2} />
                    </div>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-[0.3em] group-hover:text-white/40">Dept</span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-cardiac-blue mb-4 transition-colors group-hover:text-white uppercase tracking-tight leading-none">
                    {dept.name}
                  </h3>
                  
                  <p className="text-muted text-sm leading-relaxed mb-8 transition-colors group-hover:text-white/70 font-medium h-12 overflow-hidden line-clamp-2">
                    {dept.name === "Cardiology" 
                      ? "Specialized heart care including angioplasty, pacemaker, and 24/7 cardiac emergency."
                      : dept.short}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {dept.services.slice(0, 2).map((service, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[9px] font-bold uppercase tracking-widest border border-slate-200 text-cardiac-blue px-3 py-1.5 rounded-sm transition-colors group-hover:border-white/20 group-hover:text-emerald"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-emerald font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span>Clinical Workflow</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                
                {/* Hover Reveal Image */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none">
                  <img 
                    src={deptImages[dept.slug] || deptImages.default} 
                    alt="" 
                    className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
