import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { hospital } from "../../data/hospital";
import { Phone, MessageSquare, Clock, MapPin, Menu, X, PhoneCall } from "lucide-react";
import { cn } from "../../lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctors", label: "Doctors" },
  { to: "/departments", label: "Departments" },
  { to: "/cardiology", label: "Cardiology" },
  { to: "/diagnostics", label: "Diagnostics" },
  { to: "/gallery", label: "Gallery" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - Production Pacing */}
      <div
        className={cn(
          "bg-diagnostic-navy text-white text-[9px] sm:text-[10px] font-medium transition-all duration-500 overflow-hidden",
          isScrolled ? "h-0" : "h-9",
        )}
      >
        <div className="container-custom h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-emerald font-bold uppercase tracking-widest">
              <PhoneCall size={10} />
              <span className="hidden sm:inline">Emergency:</span>{" "}
              <span>{hospital.phones.main}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 opacity-60">
              <Clock size={10} />
              <span>{hospital.hours}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${hospital.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald transition-colors"
            >
              <MessageSquare size={10} />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 opacity-60">
              <MapPin size={10} />
              <span>{hospital.address.city}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Balanced Proportions */}
      <div
        className={cn(
          "transition-all duration-500 border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2.5 border-slate-100"
            : "bg-white py-4 md:py-6",
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo Composition - Architectural Balance */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className="relative">
              <img
                src={hospital.logo}
                alt={hospital.logoAlt}
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-black text-lg md:text-xl leading-none tracking-tight uppercase font-brand">
                Aramana
              </span>
              <span className="text-[8px] md:text-[9px] font-medium text-accent uppercase tracking-[0.3em] leading-none mt-1 font-brand">
                Hospital & Heart Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Spaced and Precise */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] text-cardiac-blue/70 hover:text-emerald transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald after:transition-all hover:after:w-full",
                  // Hide some links on smaller desktops to prevent congestion
                  (link.label === "Cardiology" || link.label === "Diagnostics") &&
                    "hidden xl:block",
                )}
                activeProps={{ className: "text-emerald after:w-full" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs - Responsive Hierarchy */}
          <div className="flex items-center gap-3 sm:gap-4 xl:gap-6">
            <a
              href={`tel:${hospital.phones.mobile1Tel}`}
              className="hidden 2xl:flex items-center gap-2 text-cardiac-blue font-bold text-[11px] uppercase tracking-widest hover:text-emerald transition-colors"
            >
              <Phone size={14} className="text-emerald" />
              <span>+91 {hospital.phones.mobile1}</span>
            </a>

            <Link
              to="/appointment"
              className="hidden sm:inline-flex bg-cardiac-blue text-white px-4 xl:px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-diagnostic-navy transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Appointment
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-cardiac-blue hover:bg-soft-grey rounded transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Immersive Orchestration */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-cardiac-blue z-60 transition-transform duration-700 ease-in-out lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col min-h-full pt-20 pb-12 px-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <div className="flex flex-col gap-5 mt-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald mb-4">
              Navigation
            </span>
            {links.map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-white/90 hover:text-emerald transition-all uppercase tracking-tighter"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-emerald text-white px-6 py-4 rounded-sm text-center font-bold uppercase tracking-[0.2em] text-[11px] shadow-xl shadow-emerald/20 active:scale-95 transition-all"
            >
              Book Appointment
            </Link>
          </div>

          <div className="mt-16 flex flex-col gap-6 text-white/40 border-t border-white/10 pt-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center text-emerald">
                <PhoneCall size={18} />
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] mb-1">
                  Emergency 24/7
                </div>
                <div className="text-base font-bold text-white tracking-tight">
                  {hospital.phones.main}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center text-emerald">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] mb-1">Location</div>
                <span className="text-[11px] leading-relaxed max-w-[220px] block text-white/60 font-medium">
                  {hospital.address.full}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
