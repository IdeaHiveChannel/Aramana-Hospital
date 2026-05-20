import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { ImageSlot } from "../components/site/ImageSlot";
import { ParallaxSection } from "../components/sections/ParallaxSection";
import { Activity, Heart, Zap, Scan, Microscope, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/diagnostics")({
  component: DiagnosticsPage,
  head: () => ({
    meta: [
      { title: "Diagnostics · Aramana Hospital, Kasaragod" },
      { name: "description", content: "ECG, Echo, TMT, Holter, laboratory and imaging at Aramana Hospital with same-visit reporting for cardiac investigations." },
    ],
  }),
});

const groups = [
  {
    title: "Cardiac Diagnostics",
    description: "Our core excellence. We provide precision structural and functional heart assessment using high-resolution digital imaging.",
    icon: Activity,
    items: [
      { name: "Electrocardiography (ECG)", detail: "12-lead digital ECG for routine and emergency cardiac screening." },
      { name: "2D Echo & Color Doppler", detail: "Advanced ultrasound imaging to visualize heart chambers, valves, and blood flow." },
      { name: "Treadmill Test (TMT)", detail: "Cardiac stress testing with continuous blood pressure and ECG monitoring." },
      { name: "Holter Monitoring", detail: "Ambulatory ECG for up to 48 hours to detect silent arrhythmias." }
    ],
  },
  {
    title: "The Cath Lab",
    description: "The interventional heart center of North Kerala. Our digital flat-panel cath lab allows for precision procedures.",
    icon: Zap,
    items: [
      { name: "Coronary Angiography", detail: "High-definition diagnostic imaging of coronary arteries." },
      { name: "Angioplasty (PCI)", detail: "Interventional stenting for coronary artery disease and heart attacks." },
      { name: "Pacemaker Implantation", detail: "Permanent and temporary cardiac pacing procedures." },
      { name: "OCT-Guided PCI", detail: "Optical Coherence Tomography for intra-vascular precision stenting." }
    ],
  },
  {
    title: "Advanced Laboratory",
    description: "Fully automated biochemistry and pathology labs for rapid clinical reporting.",
    icon: Microscope,
    items: [
      { name: "Cardiac Biomarkers", detail: "Rapid Troponin and NT-proBNP tests for heart attack diagnosis." },
      { name: "Automated Biochemistry", detail: "Full clinical profile reporting for comprehensive diagnostics." },
      { name: "Digital X-Ray", detail: "Low-dose digital imaging for thoracic and general assessment." },
      { name: "Clinical Pathology", detail: "Detailed blood and tissue investigations by experienced pathologists." }
    ],
  },
  {
    title: "Critical Care (ICU)",
    description: "State-of-the-art intensive care units dedicated to post-operative and emergency recovery.",
    icon: ShieldCheck,
    items: [
      { name: "Cardiac ICU", detail: "24/7 specialized monitoring for heart patients and post-PCI recovery." },
      { name: "Ventilator Support", detail: "Advanced respiratory support for critical medical emergencies." },
      { name: "Centralized Monitoring", detail: "Real-time vitals tracking for every patient bed in the ICU." },
      { name: "Emergency Response", detail: "Direct code-blue protocols integrated with the emergency department." }
    ],
  },
];

function DiagnosticsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Diagnostics & infrastructure"
        title="Diagnostics, cath lab"
        italicTail="and intensive care, in one workflow."
        intro="Same-visit cardiac investigations, in-house cath lab and intensive care running alongside OP and emergency reception."
        pageKey="diagnostics"
      />
      
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {groups.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="h-14 w-14 bg-soft-grey rounded-xl flex items-center justify-center text-cardiac-blue group-hover:bg-emerald group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-cardiac-blue uppercase tracking-tight">{g.title}</h2>
                      <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.2em] mt-1">Clinical Department 0{idx + 1}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted text-sm leading-relaxed mb-10 font-medium italic border-l-2 border-emerald/20 pl-4">
                    {g.description}
                  </p>

                  <div className="space-y-6 flex-1">
                    {g.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-4">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
                        <div>
                          <div className="text-cardiac-blue font-bold text-sm uppercase tracking-tight mb-1">{item.name}</div>
                          <p className="text-muted text-[13px] leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW PARALLAX */}
      <ParallaxSection 
        image="https://images.unsplash.com/photo-1579154234431-da7170a7f21c?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Clinical Precision"
        title="Rapid Results"
        subtitle="Same-visit reporting for most cardiac investigations to ensure faster treatment."
      />

      <section className="section-padding border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-16/10 rounded-lg overflow-hidden shadow-2xl">
              <ImageSlot id="diagnostics-ecg-room" tone="dark" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-16/10 rounded-lg overflow-hidden shadow-2xl">
              <ImageSlot id="diagnostics-cath-lab" tone="dark" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
