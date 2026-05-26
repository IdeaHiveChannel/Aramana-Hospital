import { Link } from "@tanstack/react-router";
import { mediaItems } from "../../data/media";
import { IconArrow } from "../site/Icons";

export function MediaLayer() {
  return (
    <section className="bg-white section-y border-t border-[#DED8CC]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-hairline opacity-60 mb-6">06 / Camps &amp; media</div>
            <h2 className="text-display text-4xl md:text-5xl leading-[1.05] max-w-xl">
              An active{" "}
              <em className="not-italic font-serif italic">institution, not a static page.</em>
            </h2>
          </div>
          <Link to="/media" className="quiet-link">
            All updates <IconArrow size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DED8CC] border border-[#DED8CC]">
          {mediaItems.slice(0, 6).map((m, idx) => (
            <div key={idx} className="bg-white px-6 py-8 flex flex-col gap-6">
              <div className="flex items-center justify-between text-hairline opacity-60">
                <span>{m.kind}</span>
                <span>{m.date}</span>
              </div>
              <div className="text-xl leading-snug font-medium">{m.title}</div>
              <p className="text-sm text-[#59666C] leading-relaxed flex-1">{m.summary}</p>
              {m.place && (
                <div className="text-xs text-[#59666C] border-t border-[#DED8CC] pt-4">
                  {m.place}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
