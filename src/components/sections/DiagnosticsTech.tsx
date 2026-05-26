import { motion } from "framer-motion";
import { Microscope, Activity, Scan, HeartPulse, ShieldCheck, Zap } from "lucide-react";

const diagnosticTools = [
  {
    title: "Digital Cath Lab",
    description:
      "Advanced interventional suite for angiography and angioplasty with precision imaging.",
    icon: Activity,
  },
  {
    title: "2D Echo & Color Doppler",
    description: "High-resolution cardiac imaging for structural and functional heart assessment.",
    icon: HeartPulse,
  },
  {
    title: "Treadmill Test (TMT)",
    description: "Comprehensive cardiac stress testing with continuous monitoring.",
    icon: Zap,
  },
  {
    title: "Holter Monitoring",
    description: "Ambulatory ECG monitoring for up to 48 hours to detect arrhythmias.",
    icon: Scan,
  },
  {
    title: "Advanced Laboratory",
    description: "Fully automated clinical pathology and biochemistry for rapid results.",
    icon: Microscope,
  },
  {
    title: "Digital X-Ray",
    description: "Low-dose digital imaging for precise diagnostic clarity.",
    icon: ShieldCheck,
  },
];

export function DiagnosticsTech() {
  return (
    <section className="bg-slate-50 py-16 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">
                  Infrastructure
                </span>
              </div>
              <h2 className="text-cardiac-blue text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8">
                In-House <br />
                <span className="text-emerald italic font-serif font-normal">Workflow</span>.
              </h2>
              <p className="text-muted text-lg font-medium leading-relaxed mb-10">
                Aramana Hospital operates a centralized diagnostic cycle, reducing reporting times
                for cardiac investigations.
              </p>
              <div className="space-y-4">
                {[
                  "Same-visit cardiac reporting",
                  "24/7 in-house laboratory",
                  "Integrated Cath Lab access",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 text-cardiac-blue font-bold text-xs uppercase tracking-widest"
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="h-12 w-12 bg-soft-grey rounded-lg flex items-center justify-center text-cardiac-blue mb-8 group-hover:bg-emerald group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-extrabold text-cardiac-blue mb-4 uppercase tracking-tight">
                    {tool.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-medium">
                    {tool.description}
                  </p>
                </div>
              );
            })}
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
