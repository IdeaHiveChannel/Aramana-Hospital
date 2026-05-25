import { Link } from "@tanstack/react-router";
import { hospital } from "../../data/hospital";
import { ArrowRight, Phone, MessageSquare, MapPin, Calendar } from "lucide-react";

export function FinalConversion() {
  return (
    <section className="bg-white section-padding overflow-hidden relative">
      <div className="container-custom">
        <div className="bg-diagnostic-navy rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald/5 -skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-cardiac-blue/50 blur-3xl rounded-full" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-emerald" />
                <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px]">
                  Take Action
                </span>
              </div>
              
              <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Experience <span className="text-emerald italic font-serif font-normal text-2xl md:text-4xl lg:text-5xl">Advanced</span> Cardiac Care Today.
              </h2>
              
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                Whether you need a heart specialist consultation, diagnostic heart tests, or 
                emergency cardiac care in Kasaragod, our team is ready to provide authoritative 
                medical support for patients across North Kerala.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/appointment" 
                  className="bg-emerald text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-emerald/90 transition-all shadow-xl shadow-emerald/20 active:scale-95 text-xs"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </Link>
                
                <a 
                  href={`tel:${hospital.phones.mainTel}`}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all active:scale-95 text-xs"
                >
                  <Phone size={18} className="text-emerald" />
                  <span>Call Hospital</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <MapPin className="text-emerald mb-4" size={24} />
                <h4 className="text-white font-bold text-base mb-1">Visit Us</h4>
                <p className="text-white/40 text-[13px] leading-relaxed">
                  {hospital.address.full}
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <MessageSquare className="text-emerald mb-4" size={24} />
                <h4 className="text-white font-bold text-base mb-1">WhatsApp</h4>
                <p className="text-white/40 text-[13px] leading-relaxed mb-3">
                  For quick queries and appointment coordination.
                </p>
                <a 
                  href={`https://wa.me/${hospital.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  Message Now <ArrowRight size={12} />
                </a>
              </div>

              <div className="sm:col-span-2 bg-emerald/10 p-6 rounded-xl border border-emerald/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-white font-bold text-base mb-1">OP Timings</h4>
                  <p className="text-white/60 text-[13px]">{hospital.hours}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald text-white flex items-center justify-center animate-pulse">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
