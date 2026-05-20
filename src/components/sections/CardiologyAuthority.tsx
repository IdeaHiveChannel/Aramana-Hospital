import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, Clock, CheckCircle2 } from "lucide-react";
import { Counter } from "../site/Counter";

const expertise = [
  "Interventional Cardiology",
  "Angioplasty & Stenting",
  "Pacemaker Implantation",
  "Echocardiography",
  "Cardiac Critical Care",
  "Preventive Cardiology"
];

export function CardiologyAuthority() {
  return (
    <section className="bg-diagnostic-navy section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-cardiac-blue/20 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Dr. Mansoor Portrait/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="img-container aspect-portrait shadow-4xl">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200" 
                alt="Dr. Abdul Mansoor - Chief Cardiologist" 
                className="img-cinematic"
              />
              <div className="overlay-cinematic opacity-50" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-8 right-8 bg-emerald text-white px-6 py-4 rounded-sm shadow-2xl flex flex-col items-center">
              <span className="text-3xl font-extrabold">20+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Years Exp.</span>
            </div>
          </motion.div>

          {/* Dr. Mansoor Details */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">
                  Heart Center
                </span>
              </div>
              
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6">
                Leading <span className="text-emerald text-display font-normal text-3xl md:text-5xl lg:text-6xl">Cardiac</span> Care in North Kerala.
              </h2>
              
              <p className="text-emerald font-bold text-xl mb-10 tracking-tight">
                Senior Interventional Cardiologist · MD, DM, FESC
              </p>
              
              <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl font-medium">
                Dr. Mansoor leads our interventional cardiology unit, specializing in 
                emergency angioplasty and pacemaker procedures. 
                With over 20 years of experience, he provides dedicated heart care for patients 
                across Kasaragod and North Kerala.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {expertise.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white/80 text-[13px] uppercase tracking-wide font-bold">
                    <CheckCircle2 size={18} className="text-emerald shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <Link 
                  to="/cardiology" 
                  className="btn-emerald flex items-center gap-4"
                >
                  <span>Cardiology Services</span>
                  <ArrowRight size={18} />
                </Link>
                
                <Link 
                  to="/appointment" 
                  className="btn-outline-white flex items-center gap-4"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats/Achievements Row */}
      <div className="mt-16 border-t border-white/5 pt-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">
                <Counter value={5000} suffix="+" />
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Angioplasties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">
                <Counter value={15} suffix="k+" />
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Cardiac Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">24/7</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">
                <Counter value={99} suffix="%" />
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
