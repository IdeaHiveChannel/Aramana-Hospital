import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function InstitutionalMap() {
  // NH 66, Ashwini Nagar, Kasaragod, Kerala 671121
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.353313437207!2d74.99464657577515!3d12.51138242441926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4839885973751%3A0xc3f5c788229a43a6!2sAramana%20Hospital%20%26%20Heart%20Centre!5e0!3m2!1sen!2sin!4v1709227000000!5m2!1sen!2sin";

  return (
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden bg-slate-100">
      <div className="absolute inset-0 z-0">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.2) contrast(1.1) brightness(0.9)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aramana Hospital & Heart Centre Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>

      {/* Floating Info Card - Institutional Style */}
      <div className="container-custom relative h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="absolute top-12 left-6 md:left-12 lg:left-20 z-10 pointer-events-auto"
        >
          <div className="bg-diagnostic-navy text-white p-8 md:p-10 rounded-xl shadow-2xl border border-white/10 max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-emerald/20 rounded-lg flex items-center justify-center text-emerald">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">Visit Our Facility</h3>
                <p className="text-emerald text-[10px] uppercase tracking-widest font-bold">
                  Kasaragod, Kerala
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Conveniently located on NH 66, providing rapid access for emergency cardiac care and
              multi-specialty consultations.
            </p>

            <div className="space-y-2">
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                Address
              </div>
              <p className="text-white font-medium text-sm">
                NH 66, Ashwini Nagar, Kasaragod,
                <br />
                Kerala 671121, India
              </p>
            </div>

            <a
              href="https://share.google/NVZmtOIUwpIz0D15y"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-emerald font-bold text-[11px] uppercase tracking-widest group transition-all"
            >
              <span>Open in Google Maps</span>
              <div className="h-6 w-6 rounded-full border border-emerald/20 flex items-center justify-center group-hover:bg-emerald group-hover:text-white transition-all">
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
