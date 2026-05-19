import { hospital } from "../../data/hospital";
import { departments } from "../../data/departments";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-diagnostic-navy pt-24 pb-12 text-white relative overflow-hidden">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-cardiac-blue/10 to-transparent opacity-30" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="h-10 w-10 bg-white rounded flex items-center justify-center text-diagnostic-navy font-bold text-xl transition-transform group-hover:scale-105">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg leading-none tracking-tight uppercase">
                  Aramana
                </span>
                <span className="text-[9px] font-bold text-emerald uppercase tracking-[0.2em] leading-none mt-1">
                  Hospital & Heart Centre
                </span>
              </div>
            </Link>
            
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              Kasaragod's premier cardiac institution providing advanced interventional 
              cardiology and multi-specialty healthcare services for patients across 
              North Kerala, including Kanhangad, Uppala, Manjeshwar, and Bekal.
            </p>

            <div className="flex gap-3">
              <a href="#" className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald hover:text-white transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald hover:text-white transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Departments Column */}
          <div className="lg:col-span-3">
            <h4 className="text-emerald font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.slice(0, 6).map((dept) => (
                <li key={dept.slug}>
                  <Link 
                    to="/departments/$slug" 
                    params={{ slug: dept.slug }}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <div className="h-1 w-1 bg-emerald rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{dept.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-emerald font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Institution</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Our Specialists</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">Media & Gallery</Link></li>
              <li><Link to="/appointment" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/emergency" className="hover:text-white transition-colors text-emerald">Emergency 24/7</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-emerald font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Get In Touch</h4>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="text-emerald shrink-0" size={18} />
                <div className="text-white/60 text-[13px] leading-relaxed">
                  {hospital.address.full}
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-emerald shrink-0" size={18} />
                <div className="text-white/60 text-[13px]">
                  <div>{hospital.phones.main}</div>
                  <div>+91 {hospital.phones.mobile1}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-emerald shrink-0" size={18} />
                <div className="text-white/60 text-[13px]">
                  {hospital.hours}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px]">
            © {new Date().getFullYear()} Aramana Hospital & Heart Centre. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/30 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
