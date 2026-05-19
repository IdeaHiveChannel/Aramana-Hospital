import { createFileRoute } from "@tanstack/react-router";
import { hospital } from "../data/hospital";
import { PhoneCall, Ambulance, MessageSquare, Clock, MapPin, Activity, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/emergency")({
  component: EmergencyPage,
  head: () => ({
    meta: [
      { title: "Emergency · 24×7 · Aramana Hospital, Kasaragod" },
      { name: "description", content: "24×7 emergency reception at Aramana Hospital, Ashwini Nagar, Kasaragod. Cardiac emergency, trauma stabilisation and ambulance coordination." },
    ],
  }),
});

function EmergencyPage() {
  return (
    <div className="bg-diagnostic-navy min-h-screen text-white pt-40 overflow-hidden relative">
      {/* Background Pulse Effect - Refined */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_60%)] animate-pulse" />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-3 w-3 rounded-full bg-emerald flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-emerald animate-ping" />
            </div>
            <span className="text-emerald font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">Immediate Response Available 24/7</span>
          </div>
          
          <h1 className="heading-hero leading-[1.05] mb-10">
            When Seconds <br />
            <span className="text-emerald text-display font-normal">Count</span>, We Are Ready.
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-16 font-medium">
            Aramana Hospital provides immediate life-saving cardiac and general emergency 
            reception. Our specialized response teams are available 24/7 at Ashwini Nagar, Kasaragod.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <a 
              href={`tel:${hospital.phones.mainTel}`}
              className="group bg-white text-diagnostic-navy p-8 rounded-xl transition-all hover:translate-y-[-8px] active:scale-[0.98] flex flex-col justify-between min-h-[200px] shadow-3xl"
            >
              <div className="h-12 w-12 bg-diagnostic-navy text-white rounded-lg flex items-center justify-center transition-all group-hover:bg-emerald group-hover:scale-110">
                <PhoneCall size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-2">Hospital Reception</div>
                <div className="text-3xl font-extrabold tracking-tighter">{hospital.phones.main}</div>
              </div>
            </a>

            <a 
              href={`tel:${hospital.phones.mobile1Tel}`}
              className="group bg-emerald text-white p-8 rounded-xl transition-all hover:translate-y-[-8px] active:scale-[0.98] shadow-3xl flex flex-col justify-between min-h-[200px]"
            >
              <div className="h-12 w-12 bg-white text-emerald rounded-lg flex items-center justify-center transition-all group-hover:scale-110">
                <Ambulance size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-2">Emergency & Ambulance</div>
                <div className="text-3xl font-extrabold tracking-tighter">{hospital.phones.mobile1}</div>
              </div>
            </a>

            <a 
              href={`tel:${hospital.phones.mobile2Tel}`}
              className="group bg-white/5 backdrop-blur-md border border-white/10 text-white p-8 rounded-xl transition-all hover:translate-y-[-8px] active:scale-[0.98] flex flex-col justify-between min-h-[200px]"
            >
              <div className="h-12 w-12 bg-white/10 text-white rounded-lg flex items-center justify-center transition-all group-hover:bg-emerald group-hover:scale-110">
                <ShieldAlert size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">Backup Emergency</div>
                <div className="text-3xl font-extrabold tracking-tighter">{hospital.phones.mobile2}</div>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-20 border-t border-white/10">
            <div className="flex gap-6">
              <MapPin className="text-emerald shrink-0" size={24} />
              <div>
                <h4 className="text-white font-extrabold mb-3 uppercase tracking-[0.2em] text-[10px] md:text-[11px]">Location</h4>
                <p className="text-white/50 text-sm leading-relaxed font-medium">{hospital.address.full}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Activity className="text-emerald shrink-0" size={24} />
              <div>
                <h4 className="text-white font-extrabold mb-3 uppercase tracking-[0.2em] text-[10px] md:text-[11px]">Capabilities</h4>
                <p className="text-white/50 text-sm leading-relaxed font-medium">Cardiac intervention, Trauma stabilization, 24/7 ICU support.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Clock className="text-emerald shrink-0" size={24} />
              <div>
                <h4 className="text-white font-extrabold mb-3 uppercase tracking-[0.2em] text-[10px] md:text-[11px]">Response Time</h4>
                <p className="text-white/50 text-sm leading-relaxed font-medium">Open 24 hours, 365 days a year. Cardiac teams on call.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
