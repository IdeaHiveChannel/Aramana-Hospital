import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Counter } from "../site/Counter";

export function InstitutionalStory() {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content Column - Vertically Balanced */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px]">
                Institutional Authority
              </span>
            </div>
            
            <h2 className="text-cardiac-blue text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-10">
              25+ Years of <br />
              <span className="text-emerald text-3xl md:text-4xl lg:text-5xl font-normal italic font-serif">Advanced Healthcare</span> <br />
              in Kasaragod.
            </h2>
            
            <div className="space-y-6 text-editorial mb-12 max-w-xl">
              <p>
                Aramana Hospital & Heart Centre stands as a beacon of advanced interventional cardiology and 
                multi-specialty medical care in North Kerala. For over two decades, we have provided 
                thousands of patients from Kasaragod, Kanhangad, and nearby regions with precision diagnosis and empathy.
              </p>
              <p>
                Our infrastructure is built around a singular goal: providing immediate, high-quality cardiac 
                intervention, including angioplasty and pacemaker procedures, when every second counts. 
                With a state-of-the-art Cath Lab and 24/7 ICU monitoring, we are the trusted heart specialist hospital in Kasaragod.
              </p>
            </div>
            
            <div>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-5 text-cardiac-blue font-bold uppercase tracking-[0.2em] text-[11px] group transition-all"
              >
                <span className="group-hover:text-emerald transition-colors border-b border-transparent group-hover:border-emerald pb-1">Explore our Journey</span>
                <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center transition-all group-hover:bg-cardiac-blue group-hover:text-white group-hover:border-cardiac-blue group-hover:translate-x-2">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          </motion.div>
          
          {/* Right: Media Column - Structured Editorial Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <div className="relative h-full min-h-[500px] lg:min-h-full flex items-center">
              {/* Main Image Container */}
              <div className="w-4/5 ml-auto aspect-4/5 rounded-2xl overflow-hidden shadow-4xl relative group">
                {/* Institutional Photography Descriptor: Real OP Corridor/Reception */}
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Aramana Hospital Entrance & Reception Area" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-cardiac-blue/40 to-transparent opacity-60" />
                
                {/* Statistics Card - Anchored INSIDE the image container */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/20 transform transition-transform group-hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-cardiac-blue leading-none">
                        <Counter value={25} suffix="+" />
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted mt-1">Years of Trust</span>
                    </div>
                    <div className="h-10 w-px bg-slate-200" />
                    <div className="flex flex-col text-right">
                      <span className="text-3xl font-black text-emerald leading-none">
                        <Counter value={10} suffix="k+" />
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted mt-1">Hearts Treated</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Supporting Element / Texture Block */}
              <div className="absolute top-12 left-0 w-1/3 aspect-square rounded-xl bg-slate-50 border border-slate-100 shadow-xl overflow-hidden z-10 hidden md:block transform -translate-x-1/4">
                <img 
                  src="https://images.unsplash.com/photo-1579154234431-da7170a7f21c?auto=format&fit=crop&q=80&w=600" 
                  alt="Advanced Diagnostics" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-cardiac-blue/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
