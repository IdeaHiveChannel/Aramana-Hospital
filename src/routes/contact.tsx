import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { hospital } from "../data/hospital";
import { Phone, MapPin, Clock, MessageSquare, Mail, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact · Aramana Hospital & Heart Centre Kasaragod" },
      { name: "description", content: "Visit, call or WhatsApp Aramana Hospital & Heart Centre at Ashwini Nagar, Kasaragod. 24/7 emergency cardiac care and specialist consultations." },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Contact Us"
        title="Institutional"
        italicTail="Access."
        intro="Located at the heart of Kasaragod, providing 24/7 emergency response and specialist consultations for patients across North Kerala."
        pageKey="contact"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">Location</span>
                </div>
                <h3 className="text-2xl font-extrabold text-cardiac-blue mb-4 uppercase tracking-tight">Visit our Facility</h3>
                <div className="flex gap-4">
                  <MapPin className="text-emerald shrink-0 mt-1" size={20} />
                  <p className="text-muted text-lg leading-relaxed font-medium">
                    {hospital.address.full}<br />
                    Ashwini Nagar, Kasaragod,<br />
                    Kerala - 671121
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">Communication</span>
                </div>
                <h3 className="text-2xl font-extrabold text-cardiac-blue mb-4 uppercase tracking-tight">Direct Lines</h3>
                <div className="space-y-6">
                  <a href={`tel:${hospital.phones.mainTel}`} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 bg-soft-grey rounded-lg flex items-center justify-center text-cardiac-blue transition-all group-hover:bg-cardiac-blue group-hover:text-white">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-muted tracking-widest mb-0.5">Reception 24/7</div>
                      <div className="text-xl font-bold text-cardiac-blue">{hospital.phones.main}</div>
                    </div>
                  </a>
                  <a href={`https://wa.me/${hospital.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="h-10 w-10 bg-soft-grey rounded-lg flex items-center justify-center text-emerald transition-all group-hover:bg-emerald group-hover:text-white">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-muted tracking-widest mb-0.5">WhatsApp Connect</div>
                      <div className="text-xl font-bold text-cardiac-blue">Message Now</div>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-emerald" />
                  <span className="text-emerald font-bold uppercase tracking-widest text-[10px]">Operational Hours</span>
                </div>
                <h3 className="text-2xl font-extrabold text-cardiac-blue mb-4 uppercase tracking-tight">Consultation & Emergency</h3>
                <div className="flex gap-4">
                  <Clock className="text-emerald shrink-0 mt-1" size={20} />
                  <div className="text-muted text-lg leading-relaxed font-medium">
                    <div className="flex justify-between gap-8 mb-2">
                      <span>Outpatient (OP)</span>
                      <span className="text-cardiac-blue font-bold">Mon – Sat · 9 AM – 7 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Emergency Care</span>
                      <span className="text-emerald font-bold uppercase">Available 24/7</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Map Embed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-2xl h-[500px] lg:h-full relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3524!2d74.9862!3d12.4996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba483788888888b%3A0x8888888888888888!2sAramana%20Hospital%20%26%20Heart%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.2] contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0"
                ></iframe>
                
                <div className="absolute bottom-8 right-8">
                  <a 
                    href={`https://www.google.com/maps?q=${encodeURIComponent("Aramana Hospital Heart Centre Ashwini Nagar Kasaragod")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-emerald flex items-center gap-3 shadow-2xl"
                  >
                    <Navigation size={16} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catchment Info - GEO SEO */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h4 className="text-cardiac-blue text-xl font-extrabold mb-4 uppercase tracking-tight">Regional Accessibility</h4>
              <p className="text-muted text-sm leading-relaxed font-medium">
                Serving patients across North Kerala and South Karnataka. We provide coordination and ambulance services for 
                <span className="text-cardiac-blue font-bold"> Kasaragod, Kanhangad, Uppala, Manjeshwar, Bekal</span>, and surrounding catchment zones.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-cardiac-blue">24/7</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted mt-1">Response</div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-center">
                <div className="text-3xl font-black text-emerald">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted mt-1">KM Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
