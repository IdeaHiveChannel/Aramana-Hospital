import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { ImageSlot } from "../components/site/ImageSlot";
import { departments } from "../data/departments";
import { IconArrow } from "../components/site/Icons";

import { seo } from "../lib/seo";

export const Route = createFileRoute("/departments/")({
  component: DepartmentsPage,
  head: () =>
    seo({
      title: "Medical Departments at Aramana Hospital, Kasaragod",
      description:
        "Explore cardiology, general medicine, gynaecology, dentistry, diagnostics, ICU and 24x7 emergency departments at Aramana Hospital, Ashwini Nagar, Kasaragod.",
      path: "/departments",
      keywords: [
        "medical departments Kasaragod",
        "cardiology department Kasaragod",
        "gynaecology Kasaragod",
        "dentistry Kasaragod",
      ],
    }),
});

function DepartmentsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Multi-Specialty Healthcare"
        title="Medical Departments at Aramana"
        italicTail="in Kasaragod."
        intro="A comprehensive range of specialist consultations and treatments including cardiology, gynaecology, general medicine, and advanced diagnostics."
        pageKey="departments"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {departments.map((d) => (
              <Link
                key={d.slug}
                to="/departments/$slug"
                params={{ slug: d.slug }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col"
              >
                <div className="aspect-16/10 overflow-hidden bg-slate-50 relative">
                  <ImageSlot
                    id={d.imageSlot}
                    ratio=""
                    tone="dark"
                    className="w-full h-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-102"
                  />
                </div>

                <div className="p-10 grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-emerald" />
                    <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">
                      Specialist Unit
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-cardiac-blue mb-4 group-hover:text-emerald transition-colors uppercase tracking-tight">
                    {d.name}
                  </h3>
                  <p className="text-muted text-base leading-relaxed mb-8 grow font-medium">
                    {d.short}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {d.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 bg-soft-grey text-muted text-[10px] font-bold uppercase tracking-wider rounded-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-cardiac-blue group-hover:gap-5 transition-all">
                    <span>Explore Department</span>
                    <IconArrow size={14} className="text-emerald" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
