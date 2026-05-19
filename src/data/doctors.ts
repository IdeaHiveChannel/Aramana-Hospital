export type Doctor = {
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  department: string;
  experienceLine: string;
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
    qualifications: "MBBS, MD, DM Cardiology, MRCP, AFESC/FESC",
    department: "Cardiology",
    experienceLine: "Interventional cardiology. Cath lab procedures",
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
    title: "Gynaecologist",
    qualifications: "MBBS, MS (OBG)",
    department: "Gynaecology",
    experienceLine: "General gynaecology. Antenatal and postnatal care",
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
    title: "General Practitioner",
    qualifications: "MBBS",
    department: "General Medicine",
    experienceLine: "OP consultation. Primary care",
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
    experienceLine: "General and restorative dentistry",
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
    experienceLine: "General and restorative dentistry",
    timings: "Mon-Sat. By appointment",
    expertise: [
      "General dentistry",
      "Restorative procedures",
      "Routine dental care",
    ],
    bio: ["Provides general dental consultation and routine procedures."],
  },
];
