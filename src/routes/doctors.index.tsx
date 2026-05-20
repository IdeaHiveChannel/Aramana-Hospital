import { createFileRoute, Link } from "@tanstack/react-router";
import { doctors } from "../data/doctors";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/doctors/")({
  component: DoctorsPage,
  head: () => ({
    meta: [
      { title: "Doctors · Aramana Hospital, Kasaragod" },
      { name: "description", content: "Consultants at Aramana Hospital & Heart Centre — cardiology, gynaecology, general medicine and dentistry." },
    ],
  }),
});

function DoctorsPage() {
  return (
    <div className="bg-white">
      {/* Cinematic Header */}
      <PageHeader
        eyebrow="Specialist Consultants"
        title="Consult the Best Heart"
        italicTail="Specialists."
        intro="A collective of highly experienced medical consultants including senior interventional cardiologists, heart specialists, and multi-specialty experts in Kasaragod."
        slotId="doctors-header"
      />

      {/* Doctors Grid - Editorial Orchestration */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={doctor.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/doctors/$slug" 
                  params={{ slug: doctor.slug }}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                >
                  {/* Doctor Image - Trust Anchor Style */}
                  <div className="aspect-3/4 overflow-hidden relative bg-slate-50">
                    <img 
                      src={doctor.image} 
                      alt={`${doctor.name} - ${doctor.title} in Kasaragod`}
                      className="w-full h-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-102"
                    />
                    
                    {/* Specialty Badge */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-sm text-cardiac-blue font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg border border-slate-100">
                      {doctor.department}
                    </div>
                  </div>

                  {/* Doctor Info - Micro-spacing precision */}
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-8 bg-emerald" />
                      <span className="text-emerald font-bold uppercase tracking-[0.2em] text-[9px]">Senior Consultant</span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-cardiac-blue mb-2 group-hover:text-emerald transition-colors leading-tight uppercase tracking-tight">
                      {doctor.name}
                    </h3>
                    
                    <p className="text-emerald font-bold text-sm mb-6 tracking-tight">
                      {doctor.qualifications}
                    </p>
                    
                    <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-4 text-muted text-sm font-medium">
                        <Clock size={16} className="text-emerald" />
                        <span>{doctor.timings}</span>
                      </div>
                      <div className="flex items-center gap-4 text-muted text-xs font-bold uppercase tracking-wider">
                        <CheckCircle2 size={16} className="text-emerald" />
                        <span>{doctor.experienceYears}</span>
                      </div>
                      <div className="flex items-center gap-4 text-muted text-[11px] font-medium leading-relaxed">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
                        <span>Focus: {doctor.proceduralExpertise}</span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cardiac-blue group-hover:text-emerald transition-colors">
                        Institutional Profile
                      </span>
                      <div className="h-10 w-10 rounded-full bg-soft-grey flex items-center justify-center text-cardiac-blue group-hover:bg-cardiac-blue group-hover:text-white group-hover:translate-x-2 transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA - Premium Authority */}
      <section className="bg-emerald py-20">
        <div className="container-custom">
          <div className="bg-diagnostic-navy rounded-xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-3xl">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Direct Access to <br />
                <span className="text-emerald text-display font-normal">Specialized Consultation</span>.
              </h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed">
                Skip the waiting period by booking your consultation online. Our reception will coordinate your visit for maximum clinical efficiency.
              </p>
            </div>
            <Link 
              to="/appointment" 
              className="bg-white text-diagnostic-navy px-12 py-5 rounded-lg font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-emerald hover:text-white hover:translate-y-[-4px] transition-all text-xs whitespace-nowrap"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
