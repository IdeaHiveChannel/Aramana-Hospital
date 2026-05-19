import { motion } from "framer-motion";
import { Microscope, Activity, Scan, HeartPulse, ShieldCheck, Zap } from "lucide-react";

const diagnosticTools = [
  {
    title: "Digital Cath Lab",
    description: "Advanced interventional suite for angiography and angioplasty with precision imaging.",
    icon: Activity
  },
  {
    title: "2D Echo & Color Doppler",
    description: "High-resolution cardiac imaging for structural and functional heart assessment.",
    icon: HeartPulse
  },
  {
    title: "Treadmill Test (TMT)",
    description: "Comprehensive cardiac stress testing with continuous monitoring.",
    icon: Zap
  },
  {
    title: "Holter Monitoring",
    description: "Ambulatory ECG monitoring for up to 48 hours to detect arrhythmias.",
    icon: Scan
  },
  {
    title: "Advanced Laboratory",
    description: "Fully automated clinical pathology and biochemistry for rapid results.",
    icon: Microscope
  },
  {
    title: "Digital X-Ray",
    description: "Low-dose digital imaging for precise diagnostic clarity.",
    icon: ShieldCheck
  }
];

export function DiagnosticsTech() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-emerald" />
            <span className="text-emerald font-bold uppercase tracking-widest text-[10px] md:text-[11px]">
              Diagnostics & Technology
            </span>
          </div>
          <h2 className="text-cardiac-blue heading-section">
            Advanced <span className="text-emerald text-display font-normal text-3xl md:text-4xl lg:text-5xl italic">Cardiac Tests</span> & <br />
            Diagnostics in Kasaragod.
          </h2>
          <p className="mt-8 text-editorial">
            Our diagnostics department provides specialized heart screening including ECG, echocardiography (Echo), 
            Treadmill Test (TMT), Holter monitoring, and automated laboratory investigations for rapid, authoritative results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-soft-grey border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center text-cardiac-blue mb-6 shadow-sm group-hover:bg-cardiac-blue group-hover:text-emerald transition-colors duration-500">
                  <Icon size={20} />
                </div>
                
                <h3 className="text-lg font-extrabold text-cardiac-blue mb-3 group-hover:text-emerald transition-colors">
                  {tool.title}
                </h3>
                
                <p className="text-muted text-[13px] leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Strip */}
        <div className="mt-16 bg-cardiac-blue rounded-xl p-8 md:p-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald/10 skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-white text-xl md:text-2xl font-bold mb-3">
                Rapid Cardiac Reporting
              </h4>
              <p className="text-white/60 text-sm">
                We provide same-visit reporting for most cardiac investigations, 
                minimizing waiting time and accelerating the treatment process.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center text-emerald">
                <Clock size={24} />
              </div>
              <div className="text-white">
                <div className="text-xl font-bold">24-Hour</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Reporting Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clock({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
