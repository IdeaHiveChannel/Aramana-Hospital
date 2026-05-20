import { hospital } from "@/data/hospital";
import { doctors } from "@/data/doctors";
import { Doctor } from "@/data/doctors";

export function MedicalSchema() {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Aramana Hospital & Heart Centre",
    "alternateName": "Aramana Cardiology Hospital Kasaragod",
    "url": "https://aramanahospital.com",
    "logo": `https://aramanahospital.com${hospital.logo}`,
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    "description": "Advanced Cardiology & Multi-Specialty Hospital in Kasaragod, providing 24/7 emergency cardiac care, angioplasty, ICU, and diagnostics.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hospital.address.full,
      "addressLocality": hospital.address.city,
      "addressRegion": "Kerala",
      "postalCode": "671121",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.4996",
      "longitude": "74.9862"
    },
    "telephone": hospital.phones.main,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "medicalSpecialty": [
      "Cardiology",
      "EmergencyCare",
      "DiagnosticServices",
      "Gynaecology",
      "GeneralMedicine"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Emergency",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Cath Lab",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "ICU",
        "value": true
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When should I consult a cardiologist in Kasaragod?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should consult a heart specialist if you experience chest pain, shortness of breath, unexplained dizziness, or have a family history of heart disease. Regular screenings are recommended for individuals with high blood pressure or diabetes."
        }
      },
      {
        "@type": "Question",
        "name": "Does Aramana Hospital provide 24/7 emergency cardiac care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our emergency department and cardiac response team are available 24/7. We provide immediate intervention for heart attacks, including emergency angioplasty in our state-of-the-art Cath Lab."
        }
      }
    ]
  };

  const doctorSchemas = doctors.map((doc: Doctor) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doc.name,
    "image": `https://i.pravatar.cc/300?u=${doc.slug}`,
    "jobTitle": doc.title,
    "medicalSpecialty": doc.department,
    "affiliation": {
      "@type": "Hospital",
      "name": "Aramana Hospital & Heart Centre"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hospital.address.full,
      "addressLocality": hospital.address.city,
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    }
  }));

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(hospitalSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      {doctorSchemas.map((schema: any, idx: number) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
}
