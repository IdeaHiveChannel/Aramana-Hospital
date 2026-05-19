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
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-widest text-xs">
                Clinical Departments
              </span>
            </div>
            <h2 className="text-cardiac-blue text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Multi-Specialty <span className="text-emerald italic font-serif font-normal text-2xl md:text-3xl lg:text-4xl">Medical Services</span> <br />
              in Kasaragod.
            </h2>
          </div>
          <Link 
            to="/departments" 
            className="hidden md:flex items-center gap-3 text-cardiac-blue font-bold uppercase tracking-widest text-[10px] hover:text-emerald transition-colors"
          >
            <span>Consult Specialists</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-xl">
          {departments.slice(0, 6).map((dept) => {
            const Icon = iconMap[dept.slug] || iconMap.default;
            return (
              <Link 
                key={dept.slug}
                to="/departments/$slug"
                params={{ slug: dept.slug }}
                className="group relative bg-white p-8 transition-all duration-500 hover:bg-diagnostic-navy"
              >
                <div className="relative z-10">
                  <div className="h-12 w-12 bg-soft-grey rounded-lg flex items-center justify-center text-cardiac-blue mb-6 transition-all duration-500 group-hover:bg-white group-hover:text-emerald group-hover:scale-102">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-cardiac-blue mb-3 transition-colors group-hover:text-white uppercase tracking-tight">
                    {dept.name}
                  </h3>
                  
                  <p className="text-muted text-sm leading-relaxed mb-6 transition-colors group-hover:text-white/80 font-medium">
                    {dept.name === "Cardiology" 
                      ? "Specialized heart care including angioplasty, pacemaker, and 24/7 cardiac emergency."
                      : dept.short}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {dept.services.slice(0, 3).map((service, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[9px] font-bold uppercase tracking-widest bg-soft-grey text-cardiac-blue px-2.5 py-1 rounded transition-colors group-hover:bg-white/10 group-hover:text-emerald"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover Reveal Image */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <img 
                    src={deptImages[dept.slug] || deptImages.default} 
                    alt="" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight size={24} className="text-emerald" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link 
            to="/departments" 
            className="inline-flex items-center gap-3 bg-cardiac-blue text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-xs"
          >
            <span>View All Services</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
