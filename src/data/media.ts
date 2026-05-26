export type MediaItem = {
  kind: "camp" | "talk" | "announcement" | "event";
  title: string;
  date: string;
  place?: string;
  summary: string;
  image: string;
};

export const mediaItems: MediaItem[] = [
  {
    kind: "camp",
    title: "Free Cardiac Screening Camp",
    date: "Weekly Weekends",
    place: "Aramana OP Block, Ashwini Nagar",
    summary:
      "ECG and basic cardiac screening for early risk detection. Conducted across selected weekends to reach the rural population of Kasaragod.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    kind: "talk",
    title: "Heart Attack Awareness Session",
    date: "Monthly",
    place: "Community Halls, Kasaragod District",
    summary:
      "Public education on warning signs, golden hour response time, and when to seek emergency cardiac care.",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
  },
  {
    kind: "announcement",
    title: "OCT-Guided Angioplasty Available",
    date: "New Service",
    summary:
      "Optical coherence tomography guided angioplasty for precision stent placement in complex cardiac cases.",
    image:
      "https://images.unsplash.com/photo-1579154234431-da7170a7f21c?auto=format&fit=crop&q=80&w=800",
  },
  {
    kind: "event",
    title: "Diabetes & Heart Health Workshop",
    date: "Quarterly",
    place: "OP Auditorium",
    summary:
      "Workshop for diabetic patients on cardiac risk management, diet control, and lifestyle protocols.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
  },
  {
    kind: "camp",
    title: "Women's Health Awareness Drive",
    date: "Monthly",
    place: "Local Community Partners",
    summary:
      "General gynaecology consultation and women's health awareness across partner locations in North Kerala.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    kind: "talk",
    title: "School Dental Check-up Programme",
    date: "Weekly",
    place: "Schools across Kasaragod",
    summary:
      "Routine dental screening and oral hygiene sessions for school children by our dental department.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  },
];
