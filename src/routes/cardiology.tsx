import { createFileRoute, Link } from "@tanstack/react-router";
import { doctors } from "../data/doctors";
import { hospital } from "../data/hospital";
import {
  Heart,
  Activity,
  Zap,
  Scan,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { ImageCarousel } from "../components/sections/ImageCarousel";
import { ParallaxSection } from "../components/sections/ParallaxSection";

export const Route = createFileRoute("/cardiology")({
  component: CardiologyPage,
  head: () => ({
    meta: [
      { title: "Cardiology · Aramana Hospital, Kasaragod" },
      {
        name: "description",
        content:
          "Diagnostic and interventional cardiology at Aramana: ECG, Echo, TMT, angiography, angioplasty, OCT-guided angioplasty, pacemaker procedures and 24×7 cardiac emergency.",
      },
    ],
  }),
});

const services = [
  { k: "ECG", v: "Routine and emergency electrocardiography.", icon: Activity },
  { k: "Echo", v: "2D echocardiography for structural assessment.", icon: Heart },
  { k: "TMT", v: "Treadmill stress test for ischaemic evaluation.", icon: Zap },
  { k: "Holter", v: "Ambulatory ECG monitoring.", icon: Scan },
  { k: "Angiography", v: "Diagnostic coronary angiography in the cath lab.", icon: Activity },
  { k: "Angioplasty", v: "PCI with stenting for obstructive disease.", icon: Heart },
  {
    k: "OCT-guided angioplasty",
    v: "Optical coherence tomography for precision stenting.",
    icon: Scan,
  },
  { k: "Pacemaker procedures", v: "Implant and follow-up programming.", icon: Zap },
  {
    k: "Cardiac ICU",
    v: "Continuous monitoring post-procedure and during recovery.",
    icon: ShieldCheck,
  },
  { k: "Cardiac emergency", v: "24×7 reception with cardiac response protocols.", icon: Clock },
];

function CardiologyPage() {
  const lead = doctors.find((d) => d.anchor)!;

  const cardiologyGallery = [
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1200",
      title: "Digital Cath Lab",
      description: "State-of-the-art interventional suite for complex cardiac procedures.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
      title: "Cardiac ICU",
      description: "24/7 monitoring with specialized cardiac nursing staff.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579154234431-da7170a7f21c?auto=format&fit=crop&q=80&w=1200",
      title: "Advanced Diagnostics",
      description: "Precision Echo, TMT, and Holter monitoring facilities.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Cinematic Hero - Re-engineered for contrast */}
      <PageHeader
        eyebrow="Department of Cardiology"
        title="Best Cardiology Hospital"
        italicTail="in Kasaragod."
        intro="The most advanced cardiac care facility in North Kerala, specializing in emergency heart attack treatment, angioplasty, and senior cardiologist consultations."
        pageKey="cardiology"
      />

      {/* Lead Consultant Section - Institutional Hierarchy */}
      <section className="section-padding bg-white relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-4/5 rounded-lg overflow-hidden shadow-2xl relative group bg-slate-50 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200"
                  alt={`Dr. Abdul Mansoor - Senior Heart Specialist in Kasaragod`}
                  className="w-full h-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-102"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-widest text-[11px]">
                  Senior Cardiologist
                </span>
              </div>
              <h2 className="text-cardiac-blue text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 uppercase">
                Consult {lead.name}
              </h2>
              <p className="text-emerald font-bold text-xl mb-8 tracking-tight">
                Interventional Cardiologist in Kasaragod · MD, DM, FESC
              </p>
              <p className="text-muted text-lg leading-relaxed mb-12 font-medium">
                Dr. Mansoor specializes in heart attack treatment, angioplasty, and pacemaker
                implantations. With over 20 years of experience, he leads the cardiology department
                at Aramana Hospital, the premier heart center in Kasaragod.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {lead.expertise.slice(0, 4).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 text-cardiac-blue font-bold text-[13px] uppercase tracking-wide"
                  >
                    <CheckCircle2 size={18} className="text-emerald shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/doctors/$slug"
                params={{ slug: lead.slug }}
                className="btn-primary inline-flex items-center gap-4"
              >
                <span>Full Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery - NEW CAROUSEL */}
      <section className="section-padding bg-diagnostic-navy overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">
                  Clinical Infrastructure
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight">
                Advanced{" "}
                <span className="text-emerald italic font-serif font-normal">
                  Cardiac Facilities
                </span>
              </h2>
            </div>
          </div>

          <ImageCarousel items={cardiologyGallery} aspectRatio="aspect-video md:aspect-21/9" />
        </div>
      </section>

      {/* Services Grid - Editorial Orchestration */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">
                Infrastructure
              </span>
              <span className="h-px w-8 bg-emerald" />
            </div>
            <h2 className="heading-section text-cardiac-blue">Cardiology Ecosystem</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto font-medium">
              Complete cardiac support from diagnosis to intervention and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="h-12 w-12 bg-soft-grey rounded-lg flex items-center justify-center text-cardiac-blue mb-8 group-hover:bg-emerald group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-extrabold text-cardiac-blue mb-4">{s.k}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.v}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax Divider - NEW PARALLAX */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Emergency Excellence"
        title="Seconds Count"
        subtitle="Our cardiac response protocols are designed for rapid life-saving intervention."
      />

      {/* Emergency CTA Strip - Institutional Authority */}
      <section className="bg-emerald py-16">
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8 text-white text-center md:text-left">
            <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <Clock size={32} className="animate-pulse" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold mb-2">24/7 Cardiac Emergency</h3>
              <p className="text-white/80 text-lg font-medium">
                Immediate intervention protocols available around the clock.
              </p>
            </div>
          </div>
          <a
            href={`tel:${hospital.phones.mainTel}`}
            className="bg-diagnostic-navy text-white px-10 py-5 rounded-lg font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-cardiac-blue hover:translate-y-[-4px] transition-all text-xs"
          >
            Call Emergency Now
          </a>
        </div>
      </section>
    </div>
  );
}
