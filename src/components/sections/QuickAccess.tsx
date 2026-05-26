import { Link } from "@tanstack/react-router";
import { departments } from "../../data/departments";
import { doctors } from "../../data/doctors";
import { IconArrow } from "../site/Icons";

export function QuickAccess() {
  return (
    <section className="bg-[#F6F4EF] -mt-12 relative z-10">
      <div className="container-x">
        <div className="institutional-panel backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E3DFD6]">
            <QuickItem label="Department" hint="Browse all">
              <select className="w-full bg-transparent text-base font-medium outline-none">
                <option>Select department</option>
                {departments.map((d) => (
                  <option key={d.slug}>{d.name}</option>
                ))}
              </select>
            </QuickItem>
            <QuickItem label="Doctor" hint="Find consultant">
              <select className="w-full bg-transparent text-base font-medium outline-none">
                <option>Select doctor</option>
                {doctors.map((d) => (
                  <option key={d.slug}>{d.name}</option>
                ))}
              </select>
            </QuickItem>
            <QuickItem label="Service" hint="Diagnostics, OP, procedures">
              <select className="w-full bg-transparent text-base font-medium outline-none">
                <option>Select service</option>
                <option>ECG</option>
                <option>Echo</option>
                <option>TMT</option>
                <option>Angiography</option>
                <option>Angioplasty</option>
                <option>General OP</option>
              </select>
            </QuickItem>
            <Link
              to="/appointment"
              className="bg-[#0E1418] text-[#F6F4EF] flex items-center justify-between px-6 py-7 group hover:bg-[#0C3D46] transition-colors duration-700"
            >
              <div>
                <div className="text-hairline opacity-60 mb-1">Appointment</div>
                <div className="text-base font-medium">Book consultation</div>
              </div>
              <IconArrow
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickItem({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 py-7">
      <div className="text-hairline opacity-60 mb-1">{label}</div>
      <div className="text-[11px] opacity-50 mb-3">{hint}</div>
      {children}
    </div>
  );
}
