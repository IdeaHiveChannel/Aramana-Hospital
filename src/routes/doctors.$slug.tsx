import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { doctors } from "../data/doctors";
import { hospital } from "../data/hospital";
import { HeroMediaCarousel } from "../components/site/HeroMediaCarousel";
import { heroAssets } from "../data/heroAssets";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Award,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/doctors/$slug")({
  component: DoctorPage,
  loader: ({ params }) => {
    const doc = doctors.find((d) => d.slug === params.slug);
    if (!doc) throw notFound();
    return { doc };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.doc.name ?? "Doctor"} · ${loaderData?.doc.title ?? ""} · Aramana` },
      {
        name: "description",
        content: `${loaderData?.doc.name}, ${loaderData?.doc.title} at Aramana Hospital & Heart Centre, Kasaragod. ${loaderData?.doc.qualifications}.`,
      },
    ],
  }),
});

function DoctorPage() {
  const { doc } = Route.useLoaderData();
  return (
    <div className="bg-white">
      {/* Doctor Profile Header - Restrained but Authoritative */}
      <section className="bg-diagnostic-navy pt-40 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <HeroMediaCarousel assets={heroAssets.doctors} />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="img-container aspect-portrait shadow-4xl">
                <img src={doc.image} alt={doc.name} className="img-cinematic grayscale-0" />
                <div className="overlay-cinematic opacity-40" />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="bg-accent text-white px-6 py-2.5 rounded-sm text-[10px] uppercase tracking-[0.3em] shadow-2xl font-bold font-brand">
                    {doc.department}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="h-px w-12 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] font-brand">
                    Medical Specialist
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6 uppercase font-brand">
                  {doc.name}
                </h1>
                <p className="text-accent font-bold text-xl md:text-2xl mb-12 tracking-tight font-brand">
                  {doc.qualifications}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center text-emerald shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">
                        Designation
                      </div>
                      <div className="text-base font-bold leading-tight">{doc.title}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center text-emerald shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">
                        OP Timings
                      </div>
                      <div className="text-base font-bold leading-tight">{doc.timings}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <Link
                    to="/appointment"
                    className="btn-emerald flex items-center gap-4 py-5 px-10"
                  >
                    <Calendar size={18} />
                    <span>Secure Consultation</span>
                  </Link>
                  <a
                    href={`https://wa.me/${hospital.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-white flex items-center gap-4 py-5 px-10"
                  >
                    <MessageSquare size={18} className="text-emerald" />
                    <span>WhatsApp Connect</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details Section */}
      <section className="section-padding relative z-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7">
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <span className="h-px w-12 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">
                    Professional Bio
                  </span>
                </div>
                <h2 className="heading-section text-cardiac-blue mb-10">
                  About <span className="text-emerald text-display font-normal">{doc.name}</span>
                </h2>
                <div className="space-y-8 text-editorial">
                  {doc.bio.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-10">
                  <span className="h-px w-12 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">
                    Clinical Focus
                  </span>
                </div>
                <h2 className="heading-section text-cardiac-blue mb-10">
                  Expertise & Specialization
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {doc.expertise.map((item: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all"
                    >
                      <CheckCircle2 size={18} className="text-emerald shrink-0" />
                      <span className="text-cardiac-blue font-bold text-[13px] uppercase tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="bg-slate-50 p-10 md:p-16 rounded-xl border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Award size={120} strokeWidth={1} className="text-cardiac-blue" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-cardiac-blue mb-10 relative z-10">
                    Institutional Affiliations
                  </h3>
                  <div className="space-y-10 relative z-10">
                    <div className="flex gap-6">
                      <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-emerald shrink-0">
                        <Award size={24} />
                      </div>
                      <div>
                        <h4 className="text-cardiac-blue font-extrabold mb-2 text-base">
                          Aramana Heart Centre
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">
                          Chief Consultant in the Department of {doc.department}.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-emerald shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="text-cardiac-blue font-extrabold mb-2 text-base">
                          Emergency Support
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">
                          Available for acute cardiac interventions 24/7 through the emergency
                          reception.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-slate-200 relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-muted text-[10px] font-bold uppercase tracking-[0.2em]">
                        Direct Reception
                      </span>
                      <span className="text-cardiac-blue font-extrabold text-lg tracking-tighter">
                        {hospital.phones.main}
                      </span>
                    </div>
                    <Link
                      to="/appointment"
                      className="w-full btn-primary flex items-center justify-center gap-4 py-5 shadow-2xl"
                    >
                      <span>Secure Consultation</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
