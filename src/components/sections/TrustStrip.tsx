import { hospital } from "../../data/hospital";

const facts = [
  { k: "24x7", v: "Emergency reception" },
  { k: "Cath Lab", v: "Interventional cardiology" },
  { k: "ICU", v: "Cardiac and general critical care" },
  { k: "Mon-Sat", v: "OP consultation 9:00 - 6:30" },
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-[#DED8CC]">
      <div className="container-x py-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
        {facts.map((f) => (
          <div key={f.k}>
            <div className="text-display text-3xl md:text-4xl">{f.k}</div>
            <div className="mt-2 text-sm text-[#59666C] uppercase tracking-[0.12em]">{f.v}</div>
          </div>
        ))}
      </div>
      <div className="container-x pb-10 text-sm text-[#59666C] flex flex-col md:flex-row md:items-center justify-between gap-2">
        <span>{hospital.address.full}</span>
        <span>{hospital.phones.main} / {hospital.phones.mobile1} / {hospital.phones.mobile2}</span>
      </div>
    </section>
  );
}
