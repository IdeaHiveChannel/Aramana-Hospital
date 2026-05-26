export type Department = {
  slug: string;
  name: string;
  short: string;
  imageSlot: string;
  services: string[];
  body: string[];
};

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    short: "Diagnostic and interventional cardiac care.",
    imageSlot: "dept-cardiology",
    services: [
      "ECG",
      "Echo",
      "TMT",
      "Holter monitoring",
      "Angiography",
      "Angioplasty",
      "OCT-guided angioplasty",
      "Pacemaker procedures",
    ],
    body: [
      "The cardiology unit at Aramana runs consultation, non-invasive diagnostics, and interventional procedures in the cath lab. Cardiac emergencies are received 24x7.",
      "Led by Dr. Abdul Mansoor, the unit handles routine cardiac OP through to angioplasty and pacemaker procedures.",
    ],
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    short: "OP consultation and inpatient care.",
    imageSlot: "dept-medicine",
    services: [
      "General OP consultation",
      "Routine care",
      "Inpatient management",
      "Preventive screening",
    ],
    body: [
      "General medicine OP and inpatient services, covering routine and acute care across common conditions.",
    ],
  },
  {
    slug: "gynaecology",
    name: "Gynaecology",
    short: "Women's health, antenatal and postnatal care.",
    imageSlot: "dept-gynaec",
    services: ["General gynaecology", "Antenatal care", "Postnatal care", "Consultation"],
    body: [
      "Outpatient gynaecology, antenatal and postnatal follow-up, and women's health consultation.",
    ],
  },
  {
    slug: "dentistry",
    name: "Dentistry",
    short: "General and restorative dental care.",
    imageSlot: "dept-dental",
    services: ["General dentistry", "Restorative procedures", "Routine dental care"],
    body: ["Dental OP for general consultation, restorative procedures, and routine care."],
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    short: "Cardiac and routine diagnostic services.",
    imageSlot: "dept-diagnostics",
    services: ["ECG", "Echo", "TMT", "Holter", "Laboratory", "Imaging"],
    body: [
      "Diagnostics support both cardiac and general clinical workflows, with same-visit reporting for most cardiac investigations.",
    ],
  },
  {
    slug: "icu-critical-care",
    name: "ICU & Cardiac ICU",
    short: "Critical care and cardiac monitoring.",
    imageSlot: "dept-icu",
    services: ["Cardiac ICU", "General ICU", "Continuous monitoring", "Post-procedure care"],
    body: [
      "Cardiac and general intensive care, with continuous monitoring and post-procedure recovery support.",
    ],
  },
  {
    slug: "emergency",
    name: "Emergency Care",
    short: "24x7 emergency reception and cardiac response.",
    imageSlot: "dept-emergency",
    services: [
      "24x7 emergency",
      "Cardiac emergency",
      "Trauma stabilisation",
      "Ambulance coordination",
    ],
    body: [
      "Emergency reception runs 24x7 with cardiac response protocols and stabilisation before admission or transfer.",
    ],
  },
];
