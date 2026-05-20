import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { mediaItems } from "../data/media";

export const Route = createFileRoute("/media")({
  component: MediaPage,
  head: () => ({
    meta: [
      { title: "Camps & Media · Aramana Hospital, Kasaragod" },
      { name: "description", content: "Cardiac screening camps, awareness sessions, dental school programmes and community outreach by Aramana Hospital." },
    ],
  }),
});

function MediaPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Media & Records"
        title="Institutional"
        italicTail="Gallery."
        intro="Visual documentation of clinical excellence, community outreach, and healthcare infrastructure at Aramana Hospital & Heart Centre."
        pageKey="media"
      />
      
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((m, i) => (
              <article key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col group overflow-hidden">
                {/* Image Layer */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={m.image} 
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-diagnostic-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-cardiac-blue text-[9px] font-bold uppercase tracking-widest rounded-sm">
                      {m.kind}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] text-muted font-bold uppercase tracking-widest opacity-60">
                      {m.date}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-extrabold text-cardiac-blue mb-4 leading-tight group-hover:text-emerald transition-colors">
                    {m.title}
                  </h2>
                  
                  <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
                    {m.summary}
                  </p>
                  
                  {m.place && (
                    <div className="pt-6 border-t border-slate-100 text-[10px] font-bold text-muted uppercase tracking-widest flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                      <span>{m.place}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
