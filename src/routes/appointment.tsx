import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { hospital } from "../data/hospital";
import { departments } from "../data/departments";
import { doctors } from "../data/doctors";
import { 
  PhoneCall, 
  MessageSquare, 
  Calendar, 
  Activity, 
  User, 
  Clock, 
  ChevronRight, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Stethoscope,
  Search,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Link } from "@tanstack/react-router";
import { HeroMediaCarousel } from "../components/site/HeroMediaCarousel";
import { heroAssets } from "../data/heroAssets";

export const Route = createFileRoute("/appointment")({
  component: AppointmentPage,
  head: () => ({
    meta: [
      { title: "Book Appointment · Aramana Hospital, Kasaragod" },
      { name: "description", content: "Request a consultation at Aramana Hospital & Heart Centre. Cardiology, gynaecology, general medicine and dentistry." },
    ],
  }),
});

function AppointmentPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState(departments[0].name);
  const [doc, setDoc] = useState("Any consultant");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const message = useMemo(() => {
    return [
      "Appointment request — Aramana Hospital",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Department: ${dept}`,
      `Doctor: ${doc}`,
      `Preferred date: ${date || "-"}`,
      `Notes: ${note || "-"}`,
    ].join("\n");
  }, [name, phone, dept, doc, date, note]);

  const wa = `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white">
      {/* SECTION 1 — HERO: Automated Carousel Background */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <HeroMediaCarousel assets={heroAssets.home} />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left: Reassurance & Contact */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px] font-brand">Institutional Intake</span>
              </div>
              
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8 uppercase font-brand">
                Request a <br />
                <span className="text-accent font-serif italic font-normal text-4xl md:text-5xl lg:text-6xl normal-case">Consultation.</span>
              </h1>
              
              <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-xl">
                Our coordination team ensures that your visit is clinically efficient. Submit your details for priority scheduling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                      <PhoneCall size={18} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 font-brand">24/7 Reception</span>
                  </div>
                  <div className="text-xl font-bold text-white tracking-tight font-brand">{hospital.phones.main}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                      <Clock size={18} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 font-brand">OP Timings</span>
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight font-brand">Mon - Sat: 9 AM - 7 PM</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex -space-x-3">
                  {doctors.slice(0, 3).map((doctor, i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-diagnostic-navy bg-slate-200 overflow-hidden">
                      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] font-brand">
                  Consult with Senior Specialists
                </div>
              </div>
            </motion.div>

            {/* Right: Premium Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-4xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Calendar size={120} strokeWidth={1} className="text-cardiac-blue" />
                </div>
                
                <h3 className="text-2xl font-black text-cardiac-blue tracking-tighter mb-8 relative z-10">Secure Booking</h3>
                
                <form 
                  className="space-y-6 relative z-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(wa, "_blank");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Full name" icon={User}>
                      <input required value={name} onChange={(e) => setName(e.target.value)} className="input-premium" placeholder="John Doe" />
                    </Field>
                    <Field label="Phone number" icon={PhoneCall}>
                      <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-premium" placeholder="+91 0000 000 000" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Department" icon={Activity}>
                      <select value={dept} onChange={(e) => setDept(e.target.value)} className="input-premium">
                        {departments.map((d) => <option key={d.slug}>{d.name}</option>)}
                      </select>
                    </Field>
                    <Field label="Specialist" icon={ShieldCheck}>
                      <select value={doc} onChange={(e) => setDoc(e.target.value)} className="input-premium">
                        <option>Any consultant</option>
                        {doctors.map((d) => <option key={d.slug}>{d.name}</option>)}
                      </select>
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Preferred Date" icon={Calendar}>
                      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-premium" />
                    </Field>
                    <Field label="Reason for visit" icon={ChevronRight}>
                      <input value={note} onChange={(e) => setNote(e.target.value)} className="input-premium" placeholder="Symptoms, checkup, etc." />
                    </Field>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-emerald hover:bg-emerald-600 text-white font-bold uppercase tracking-[0.2em] text-[11px] py-5 rounded-lg shadow-xl shadow-emerald/20 transition-all flex items-center justify-center gap-4 group/btn">
                      <MessageSquare size={18} className="transition-transform group-hover/btn:scale-110" />
                      <span>Confirm via WhatsApp</span>
                    </button>
                    <p className="mt-6 text-center text-[9px] font-bold uppercase tracking-widest text-muted">
                      Your data is handled according to clinical privacy protocols.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONSULTATION PROCESS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px]">Simplified Workflow</span>
              <span className="h-px w-8 bg-emerald" />
            </div>
            <h2 className="text-cardiac-blue text-4xl font-black tracking-tighter mb-6">The Consultation Journey.</h2>
            <p className="text-muted font-medium">Clear steps to ensure your clinical visit is smooth and efficient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Submit Request", desc: "Fill the digital form with your preferred department and consultant.", icon: Mail },
              { step: "02", title: "Coordination Call", desc: "Our team verifies availability and confirms your slot via phone or WhatsApp.", icon: PhoneCall },
              { step: "03", title: "Clinical Visit", desc: "Arrive at the hospital for your consultation with minimal waiting time.", icon: CheckCircle2 },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="text-emerald/20 text-6xl font-black absolute top-6 right-8 leading-none group-hover:text-emerald/30 transition-colors">
                    {item.step}
                  </div>
                  <div className="h-14 w-14 bg-slate-50 rounded-xl flex items-center justify-center text-cardiac-blue mb-8 border border-slate-100 group-hover:bg-cardiac-blue group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-cardiac-blue mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-muted leading-relaxed font-medium">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 translate-y-[-50%] z-10">
                    <ChevronRight size={32} className="text-slate-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SPECIALITIES QUICK ACCESS */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px]">Care Ecosystem</span>
              </div>
              <h2 className="text-cardiac-blue text-5xl font-black tracking-tighter">Specialties & Departments.</h2>
            </div>
            <Link to="/departments" className="text-cardiac-blue font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 group">
              <span>View All Departments</span>
              <ArrowRight size={16} className="text-emerald transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.slice(0, 4).map((dept) => (
              <Link 
                key={dept.slug}
                to="/departments/$slug"
                params={{ slug: dept.slug }}
                className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-cardiac-blue mb-8 group-hover:bg-cardiac-blue group-hover:text-white transition-colors">
                  <Stethoscope size={20} />
                </div>
                <h4 className="text-lg font-bold text-cardiac-blue uppercase tracking-tight mb-2">{dept.name}</h4>
                <p className="text-[11px] text-muted font-medium line-clamp-2 uppercase tracking-wide leading-relaxed">{dept.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DOCTOR AVAILABILITY */}
      <section className="py-32 bg-diagnostic-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px]">Expertise</span>
              <span className="h-px w-8 bg-emerald" />
            </div>
            <h2 className="text-white text-5xl font-black tracking-tighter mb-6 leading-none">Senior Consultants.</h2>
            <p className="text-white/60 font-medium">Meet our lead specialists available for consultation this week.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doc) => (
              <div key={doc.slug} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="flex items-start justify-between mb-8">
                  <div className="h-20 w-20 rounded-xl bg-slate-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    <img src={`https://i.pravatar.cc/200?u=${doc.slug}`} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-right">
                    <div className="text-emerald font-bold uppercase tracking-widest text-[9px] mb-1">{doc.department}</div>
                    <div className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Available Now</div>
                  </div>
                </div>
                <h4 className="text-xl font-extrabold text-white tracking-tight mb-1">{doc.name}</h4>
                <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-6">{doc.title}</div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/40">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">9 AM - 6 PM</span>
                  </div>
                  <Link to="/doctors/$slug" params={{ slug: doc.slug }} className="text-emerald text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/link">
                    <span>Profile</span>
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — EMERGENCY CTA BAND */}
      <section className="py-16 bg-emerald relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-cardiac-blue text-4xl font-black tracking-tighter mb-4 leading-none">Emergency Cardiac Care?</h2>
              <p className="text-cardiac-blue/80 font-bold uppercase tracking-widest text-[11px]">Direct access to our 24/7 cardiac emergency reception.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={`tel:${hospital.phones.mainTel}`} className="bg-cardiac-blue text-white px-10 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[12px] flex items-center gap-4 shadow-2xl hover:bg-diagnostic-navy transition-all">
                <PhoneCall size={20} className="text-emerald" />
                <span>Call {hospital.phones.main}</span>
              </a>
              <a href={`https://wa.me/${hospital.whatsapp}`} className="bg-white text-cardiac-blue px-10 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[12px] flex items-center gap-4 shadow-xl hover:bg-slate-50 transition-all">
                <MessageSquare size={20} className="text-emerald" />
                <span>WhatsApp Emergency</span>
              </a>
            </div>
          </div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cardiac-blue/10 rounded-full blur-3xl" />
      </section>

      <style>{`
        .input-premium {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 18px 24px;
          font-size: 14px;
          font-weight: 700;
          color: #0B2545;
          outline: none;
          transition: all 400ms cubic-bezier(0.22, 1, 0.36, 1);
          border-radius: 12px;
        }
        .input-premium:focus { 
          background: white;
          border-color: #10B981;
          box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.15);
          transform: translateY(-2px);
        }
        .input-premium::placeholder {
          color: #94a3b8;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: any; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted mb-3 ml-1">
        <Icon size={12} className="text-emerald" />
        {label}
      </span>
      {children}
    </label>
  );
}
