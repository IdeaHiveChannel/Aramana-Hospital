export type Doctor = {
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  department: string;
  experienceYears: string;
  proceduralExpertise: string;
  role: string;
  registration?: string;
  timings: string;
  expertise: string[];
  bio: string[];
  anchor?: boolean;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-abdul-mansoor",
    name: "Dr. Abdul Mansoor",
    title: "Senior Interventional Cardiologist",
    qualifications: "MBBS, MD, DM Cardiology, MRCP (UK), FESC",
    department: "Cardiology",
    experienceYears: "25+ Years Experience",
    proceduralExpertise: "Angioplasty (PCI), OCT-Guided Stenting, Pacemakers",
    role: "Chief Interventional Cardiologist",
    registration: "TCMC Reg. No: 28456",
    timings: "Mon-Sat. 9:00 AM - 6:30 PM",
    expertise: [
      "Angiography",
      "Angioplasty",
      "OCT-guided angioplasty",
      "Pacemaker procedures",
      "Echo",
      "Heart attack treatment",
      "Heart failure management",
      "Interventional cardiology",
    ],
    bio: [
      "Heads the interventional cardiology programme at Aramana. Consults, performs diagnostic and therapeutic cath lab procedures, and leads the cardiac emergency response.",
      "Trains the in-house cardiac team and runs scheduled OP, diagnostics, and follow-up cardiac care six days a week.",
    ],
    anchor: true,
  },
  {
    slug: "dr-rameena-k",
    name: "Dr. Rameena K",
    title: "Consultant Gynaecologist",
    qualifications: "MBBS, MS (OBG)",
    department: "Gynaecology",
    experienceYears: "15+ Years Experience",
    proceduralExpertise: "Antenatal Care, High-Risk Pregnancy, General Gynaec",
    role: "Senior Consultant",
    registration: "TCMC Reg. No: 34210",
    timings: "Mon-Sat. By appointment",
    expertise: [
      "General gynaecology",
      "Antenatal care",
      "Postnatal care",
      "Women's health consultation",
    ],
    bio: [
      "Consults across general gynaecology, antenatal, postnatal, and women's health concerns.",
    ],
  },
  {
    slug: "dr-sundara-anemajal",
    name: "Dr. Sundara Anemajal",
    title: "Physician & General Practitioner",
    qualifications: "MBBS",
    department: "General Medicine",
    experienceYears: "30+ Years Experience",
    proceduralExpertise: "Primary Care, Diabetic Management, Chronic Illness",
    role: "Medical Director",
    registration: "TCMC Reg. No: 15678",
    timings: "Mon-Sat. OP hours",
    expertise: ["General medicine", "Primary care", "Routine consultation"],
    bio: [
      "Handles general medicine OP consultation, routine care, and first-line management across common conditions.",
    ],
  },
  {
    slug: "dr-mahasoora",
    name: "Dr. Mahasoora",
    title: "General Dentist",
    qualifications: "BDS",
    department: "Dentistry",
    experienceYears: "10+ Years Experience",
    proceduralExpertise: "Restorative Procedures, Root Canal, Cosmetic Dentistry",
    role: "Consultant Dentist",
    registration: "KDC Reg. No: 8945",
    timings: "Mon-Sat. By appointment",
    expertise: [
      "General dentistry",
      "Restorative procedures",
      "Routine dental care",
    ],
    bio: ["Provides general dental consultation and routine procedures."],
  },
  {
    slug: "dr-hisham-ahmed",
    name: "Dr. Hisham Ahmed",
    title: "General Dentist",
    qualifications: "BDS",
    department: "Dentistry",
    experienceYears: "8+ Years Experience",
    proceduralExpertise: "Oral Surgery, Restorative Procedures",
    role: "Consultant Dentist",
    registration: "KDC Reg. No: 9210",
    timings: "Mon-Sat. By appointment",
    expertise: [
      "General dentistry",
      "Restorative procedures",
      "Routine dental care",
    ],
    bio: ["Provides general dental consultation and routine procedures."],
  },
];
