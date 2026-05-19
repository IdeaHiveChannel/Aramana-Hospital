import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { departments } from "../data/departments";
import { doctors } from "../data/doctors";
import { ArrowRight, CheckCircle2, PhoneCall, Calendar, ChevronRight } from "lucide-react";
import { hospital } from "../data/hospital";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/departments/$slug")({
  component: DepartmentPage,
  loader: ({ params }) => {
    const dept = departments.find((d) => d.slug === params.slug);
    if (!dept) throw notFound();
    return { dept };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.dept.name ?? "Department"} · Aramana Hospital` },
      { name: "description", content: loaderData?.dept.short ?? "" },
    ],
  }),
});

function DepartmentPage() {
  const { dept } = Route.useLoaderData();
  const relatedDoctors = doctors.filter((d) => d.department.toLowerCase() === dept.name.toLowerCase());

  return (
    <div className="bg-white">
      {/* Restrained Department Header */}
      <PageHeader
        eyebrow="Specialty Department"
        title={dept.name}
        intro={dept.short}
        slotId={dept.imageSlot || "departments-header"}
        variant="restrained"
      />

      {/* Department Content */}
      <section className="section-padding relative z-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">Overview</span>
              </div>
              <h2 className="heading-section text-cardiac-blue">
                Comprehensive Care in <span className="text-emerald text-display font-normal">{dept.name}</span>.
              </h2>
              <div className="space-y-8 text-editorial mb-16">
                {dept.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
              
              <div className="bg-slate-50 p-10 md:p-16 rounded-xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <CheckCircle2 size={120} strokeWidth={1} className="text-cardiac-blue" />
                </div>
                <h3 className="text-2xl font-extrabold text-cardiac-blue mb-10 relative z-10">Department Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  {dept.services.map((s: string) => (
                    <div key={s} className="flex items-center gap-4 text-cardiac-blue font-bold text-[13px] uppercase tracking-wide">
                      <CheckCircle2 size={18} className="text-emerald shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {/* Institutional Contact Card */}
                <div className="bg-diagnostic-navy p-10 rounded-xl text-white shadow-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <PhoneCall size={80} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-extrabold mb-8 uppercase tracking-widest text-white/60 text-[11px]">Direct Assistance</h3>
                    <div className="space-y-8">
                      <a href={`tel:${hospital.phones.mainTel}`} className="flex items-center gap-6 group/link">
                        <div className="h-14 w-14 bg-white/10 rounded-lg flex items-center justify-center text-emerald group-hover/link:bg-emerald group-hover/link:text-white transition-all">
                          <PhoneCall size={24} />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1">Reception 24/7</div>
                          <div className="text-2xl font-extrabold tracking-tighter">{hospital.phones.main}</div>
                        </div>
                      </a>
                      <Link to="/appointment" className="w-full btn-emerald flex items-center justify-center gap-4 py-5 shadow-2xl">
                        <Calendar size={18} />
                        <span>Secure Consultation</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Institutional Info List */}
                <div className="bg-slate-50 p-10 rounded-xl border border-slate-100">
                  <h3 className="text-cardiac-blue font-extrabold text-[11px] uppercase tracking-[0.2em] mb-8 text-muted">Patient Information</h3>
                  <div className="space-y-6">
                    {[
                      "24/7 Emergency Support Available",
                      "Advanced Diagnostic Infrastructure",
                      "Specialized Post-Care Recovery Units"
                    ].map((info, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-cardiac-blue font-bold text-[11px] uppercase tracking-widest">
                        <ChevronRight size={14} className="text-emerald" />
                        <span>{info}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Doctors - Re-engineered Cards */}
      {relatedDoctors.length > 0 && (
        <section className="bg-slate-50 section-padding">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-10">
                  <span className="h-px w-12 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">Specialists</span>
                </div>
                <h2 className="text-cardiac-blue heading-section">
                  Consultants in <span className="text-emerald text-display font-normal">{dept.name}</span>.
                </h2>
              </div>
              <Link to="/doctors" className="inline-flex items-center gap-4 text-cardiac-blue font-bold uppercase tracking-[0.2em] text-[11px] group transition-all pb-4">
                <span className="group-hover:text-emerald transition-colors">All Doctors</span>
                <ArrowRight size={18} className="text-emerald transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {relatedDoctors.map((d) => (
                <Link 
                  key={d.slug} 
                  to="/doctors/$slug" 
                  params={{ slug: d.slug }} 
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                >
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-8 bg-emerald" />
                      <span className="text-emerald font-bold uppercase tracking-widest text-[9px]">Consultant Specialist</span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-cardiac-blue mb-2 group-hover:text-emerald transition-colors leading-tight uppercase tracking-tight">
                      {d.name}
                    </h3>
                    
                    <p className="text-emerald font-bold text-sm mb-6 grow tracking-tight">
                      {d.qualifications}
                    </p>
                    
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
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
