import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Activity, Users, Clock, Award, Heart } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { ImageCarousel } from "../components/sections/ImageCarousel";
import { ParallaxSection } from "../components/sections/ParallaxSection";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · Aramana Hospital & Heart Centre, Kasaragod" },
      { name: "description", content: "Aramana Hospital & Heart Centre is a cardiology-led multi-specialty hospital at Ashwini Nagar, Kasaragod, serving north Kerala and south coastal Karnataka." },
    ],
  }),
});

function AboutPage() {
  const institutionalGallery = [
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
      title: "Regional Presence",
      description: "Serving Kasaragod and North Kerala for over two decades."
    },
    {
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200",
      title: "Patient-Centric Care",
      description: "Combining clinical excellence with compassionate healthcare."
    },
    {
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
      title: "Modern Infrastructure",
      description: "Equipped with advanced Cath Lab and critical care units."
    }
  ];

  return (
    <div className="bg-white">
      {/* Cinematic Header - Re-engineered for contrast */}
      <PageHeader
        eyebrow="The Institution"
        title="A Legacy of"
        italicTail="Precision & Care."
        intro="Founded on the principles of clinical excellence, Aramana Hospital has grown from a specialized heart center to Kasaragod's leading multi-specialty destination."
        slotId="about-main"
      />

      {/* Institutional Story - Rebalanced Layout */}
      <section className="section-padding bg-white relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-widest text-[11px]">Our Journey</span>
              </div>
              <h2 className="heading-section text-cardiac-blue">
                Built for the Region, <br />
                <span className="text-emerald text-display font-normal">Led by Cardiology</span>.
              </h2>
              <div className="space-y-8 text-muted text-lg leading-relaxed">
                <p>
                  Aramana Hospital & Heart Centre, located at Ashwini Nagar, Kasaragod, represents 
                  the pinnacle of regional healthcare. Cardiology — diagnostic and interventional 
                  — sits at the heart of our operations, with the Cath Lab and Cardiac ICU 
                  functioning as a seamless clinical workflow.
                </p>
                <p>
                  For over two decades, we have served the Kasaragod district and surrounding 
                  regions of North Kerala and South Coastal Karnataka. Our multi-specialty 
                  approach ensures that while heart care is our core, we provide comprehensive 
                  clinical support across all major disciplines.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-4xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                  alt="Aramana Hospital Interior" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-102"
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-xl shadow-4xl border border-slate-100 hidden xl:block">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-10 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">Patient Trust</span>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-emerald mb-2">200+</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Staff Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-cardiac-blue leading-none mb-2">10k+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted">Hearts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider - NEW PARALLAX */}
      <ParallaxSection 
        image="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our Mission"
        title="Hearts in Focus"
        subtitle="North Kerala's trusted destination for advanced cardiac intervention."
      />

      {/* Philosophy Section */}
      <section className="bg-soft-grey section-padding">
        <div className="container-custom text-center mb-12">
          <h2 className="text-cardiac-blue text-3xl md:text-4xl font-extrabold mb-4">Our Institutional Philosophy</h2>
          <p className="text-muted text-base max-w-2xl mx-auto">Founded on three pillars of healthcare excellence.</p>
        </div>
        
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Clinical Precision", 
              desc: "Every diagnosis is backed by advanced technology and peer-reviewed protocols.",
              icon: Activity
            },
            { 
              title: "Regional Trust", 
              desc: "Deeply rooted in Kasaragod, serving our community with local understanding.",
              icon: Users
            },
            { 
              title: "Rapid Intervention", 
              desc: "Specialized cardiac response teams ready for immediate life-saving actions.",
              icon: ShieldCheck
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="h-12 w-12 bg-soft-grey rounded-xl flex items-center justify-center text-cardiac-blue mb-6 mx-auto">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-cardiac-blue mb-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Institutional Gallery - NEW CAROUSEL */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">Visual Journey</span>
              </div>
              <h2 className="text-cardiac-blue text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight">
                Life at <span className="text-emerald italic font-serif font-normal">Aramana Hospital</span>
              </h2>
            </div>
          </div>
          
          <ImageCarousel items={institutionalGallery} aspectRatio="aspect-video md:aspect-21/9" />
        </div>
      </section>

      {/* Chairman Message Placeholder */}
      <section className="section-padding bg-diagnostic-navy relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-2xl grayscale">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Institutional Message" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-widest text-xs">Institutional Message</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-8">
                "Quality Heart Care <br />
                <span className="text-emerald italic font-serif font-normal">Should Not Be A Luxury</span>."
              </h2>
              <div className="text-white/60 text-lg md:text-xl leading-relaxed italic font-serif mb-10">
                "Our mission at Aramana has always been clear: to provide the people of Kasaragod 
                with access to the same level of cardiac and multi-specialty care they would 
                find in major metros, but with the empathy and personal touch of a community hospital."
              </div>
              <div>
                <div className="text-white font-bold text-xl">Aramana Management</div>
                <div className="text-emerald text-[10px] uppercase tracking-widest font-bold">Kasaragod, Kerala</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
