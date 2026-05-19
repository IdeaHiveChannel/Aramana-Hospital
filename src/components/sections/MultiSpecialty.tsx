import { Link } from "@tanstack/react-router";
import { departments } from "../../data/departments";
import { ImageSlot } from "../site/ImageSlot";
import { IconArrow } from "../site/Icons";

export function MultiSpecialty() {
  return (
    <section className="bg-slate-50 section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">Specialties</span>
            </div>
            <h2 className="heading-section text-cardiac-blue">
              A multi-specialty hospital, <br />
              <span className="text-emerald text-display font-normal">organised around cardiac care.</span>
            </h2>
          </div>
          <Link 
            to="/departments" 
            className="inline-flex items-center gap-3 text-cardiac-blue font-bold uppercase tracking-widest text-[11px] group"
          >
            <span>All Departments</span>
            <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center transition-all group-hover:bg-cardiac-blue group-hover:text-white group-hover:border-cardiac-blue group-hover:translate-x-1">
              <IconArrow size={14} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.slice(0, 6).map((d, i) => (
            <Link
              key={d.slug}
              to="/departments/$slug"
              params={{ slug: d.slug }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                <ImageSlot id={d.imageSlot} ratio="" tone="dark" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 left-4 h-8 w-8 bg-cardiac-blue/80 backdrop-blur-md rounded flex items-center justify-center text-white text-[10px] font-bold">
                  0{i + 1}
                </div>
              </div>
              
              <div className="p-8 grow flex flex-col">
                <h3 className="text-xl font-extrabold text-cardiac-blue mb-3 group-hover:text-emerald transition-colors">{d.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 grow">{d.short}</p>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald opacity-0 group-hover:opacity-100 transition-all group-hover:gap-4">
                  <span>View Details</span>
                  <IconArrow size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
