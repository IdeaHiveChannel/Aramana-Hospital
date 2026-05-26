import { motion } from "framer-motion";
import { PhoneCall, Ambulance, Clock, Activity, ShieldAlert } from "lucide-react";
import { hospital } from "../../data/hospital";

export function EmergencyStrip() {
  return (
    <section className="bg-diagnostic-navy section-padding relative overflow-hidden">
      {/* ECG Background Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            d="M0 200 L400 200 L420 150 L440 250 L460 100 L480 300 L500 200 L900 200 L920 150 L940 250 L960 100 L980 300 L1000 200 L1440 200"
            stroke="#10B981"
            strokeWidth="2"
            fill="none"
            className="animate-[dash_10s_linear_infinite]"
            style={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">
                24/7 Emergency Services
              </span>
            </div>

            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
              24/7 Emergency <br />
              <span className="text-emerald italic font-serif font-normal text-2xl md:text-3xl lg:text-4xl">
                Cardiac Response
              </span>{" "}
              <br />
              in Kasaragod.
            </h2>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Our emergency department is primed for rapid heart attack treatment and critical care.
              With 24/7 ambulance coordination, state-of-the-art Cath Lab access, and ICU
              monitoring, we are North Kerala's trusted emergency hospital.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
                <div className="h-10 w-10 bg-emerald/20 rounded-full flex items-center justify-center text-emerald">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Always Open</div>
                  <div className="text-white/40 text-[9px] uppercase tracking-wider">
                    24/7 Reception
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
                <div className="h-10 w-10 bg-emerald/20 rounded-full flex items-center justify-center text-emerald">
                  <Activity size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Cardiac ICU</div>
                  <div className="text-white/40 text-[9px] uppercase tracking-wider">
                    Constant Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-emerald/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 bg-emerald text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald/20">
                  <ShieldAlert size={28} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Emergency Contact</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">
                    Immediate Assistance
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${hospital.phones.mainTel}`}
                  className="group block bg-white text-diagnostic-navy p-5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest font-bold text-muted mb-1">
                        Reception & OP
                      </div>
                      <div className="text-xl md:text-2xl font-extrabold">
                        {hospital.phones.main}
                      </div>
                    </div>
                    <div className="h-10 w-10 bg-diagnostic-navy text-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                      <PhoneCall size={20} />
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${hospital.phones.mobile1Tel}`}
                  className="group block bg-emerald text-white p-5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest font-bold text-white/60 mb-1">
                        Ambulance & Emergency
                      </div>
                      <div className="text-xl md:text-2xl font-extrabold">
                        {hospital.phones.mobile1}
                      </div>
                    </div>
                    <div className="h-10 w-10 bg-white text-emerald rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                      <Ambulance size={20} />
                    </div>
                  </div>
                </a>
              </div>

              <p className="mt-6 text-white/40 text-[10px] text-center leading-relaxed">
                Emergency services are available 24x7. For cardiac emergencies, please call the
                ambulance number directly for rapid intervention protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
