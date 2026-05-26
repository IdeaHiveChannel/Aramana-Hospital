import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { InstitutionalStory } from "../components/sections/InstitutionalStory";
import { HomepageFAQ } from "../components/sections/HomepageFAQ";
import { DoctorEcosystem } from "../components/sections/DoctorEcosystem";
import { CardiologyAuthority } from "../components/sections/CardiologyAuthority";
import { DiagnosticsTech } from "../components/sections/DiagnosticsTech";
import { PatientStories } from "../components/sections/PatientStories";
import { EmergencyStrip } from "../components/sections/EmergencyStrip";
import { FinalConversion } from "../components/sections/FinalConversion";
import { ParallaxSection } from "../components/sections/ParallaxSection";

import { seo } from "../lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    seo({
      title: "Aramana Hospital & Heart Centre in Kasaragod",
      description:
        "Cardiology and multi-specialty hospital at Ashwini Nagar, Kasaragod with 24x7 emergency care, cath lab, ICU, diagnostics and OP consultation.",
      path: "/",
      keywords: [
        "hospital in Kasaragod",
        "cardiac emergency Kasaragod",
        "cath lab Kasaragod",
        "ICU Kasaragod",
      ],
    }),
});

function Index() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Full Cinematic Hero */}
      <Hero />

      {/* 2. Institutional Story / About Preview - Added Breathing Room */}
      <div className="relative z-20">
        <InstitutionalStory />
      </div>

      {/* 3. Parallax Divider - Infrastructure - Refined Design */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Facilities"
        title="Diagnostic Infrastructure"
        subtitle="Clinical workflow designed for patient comfort and efficient treatment."
      />

      {/* 4. Cardiology Authority Section (Featured Dr Mansoor) */}
      <div className="bg-diagnostic-navy">
        <CardiologyAuthority />
      </div>

      {/* 5. Service Ecosystem - Structural Variation (Dense Operational Grid) */}
      <DoctorEcosystem />

      {/* 6. Parallax Divider - Diagnostics */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1579154234431-da7170a7f21c?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Diagnostics"
        title="Reporting Workflow"
        subtitle="In-house diagnostic testing for faster results and clinical decisions."
      />

      {/* 7. Technology & Diagnostics */}
      <DiagnosticsTech />

      {/* 8. Patient Video Testimonials */}
      <PatientStories />

      {/* 9. FAQs for Search & AI Optimization */}
      <HomepageFAQ />

      {/* 10. Emergency Strip */}
      <EmergencyStrip />

      {/* 11. Final Call to Action */}
      <FinalConversion />
    </div>
  );
}
