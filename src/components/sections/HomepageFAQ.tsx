import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

const faqs = [
  {
    question: "When should I consult a cardiologist in Kasaragod?",
    answer: "You should consult a heart specialist if you experience chest pain, shortness of breath, unexplained dizziness, or have a family history of heart disease. Regular screenings are recommended for individuals with high blood pressure or diabetes."
  },
  {
    question: "Does Aramana Hospital provide 24/7 emergency cardiac care?",
    answer: "Yes, our emergency department and cardiac response team are available 24/7. We provide immediate intervention for heart attacks, including emergency angioplasty in our state-of-the-art Cath Lab."
  },
  {
    question: "Is angioplasty available at Aramana Hospital, Kasaragod?",
    answer: "Yes, we are a specialized interventional cardiology center. We perform routine and emergency angioplasty, pacemaker implantations, and other cardiac procedures using advanced imaging technology."
  },
  {
    question: "What diagnostic tests are available for heart screening?",
    answer: "We offer a comprehensive range of cardiac tests including ECG, 2D Echocardiography (Echo), Treadmill Test (TMT), Holter monitoring, and advanced laboratory investigations."
  },
  {
    question: "How can I book an appointment with a specialist?",
    answer: "You can book an appointment by calling our reception at +91 4994 225500 or through our website's appointment request form. We also offer coordination via WhatsApp for your convenience."
  },
  {
    question: "Does the hospital have ICU facilities?",
    answer: "Yes, Aramana Hospital has a dedicated Cardiac ICU and General ICU with 24/7 monitoring by trained intensivists and nursing staff to handle critical clinical cases."
  }
];

export function HomepageFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-white section-padding border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-emerald" />
              <span className="text-emerald font-bold uppercase tracking-[0.3em] text-[10px]">Patient Resources</span>
            </div>
            <h2 className="text-cardiac-blue text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8">
              Frequently Asked <br />
              <span className="text-emerald italic font-serif font-normal text-3xl md:text-4xl lg:text-5xl">Questions.</span>
            </h2>
            <p className="text-editorial text-base md:text-lg mb-10">
              Find answers to common questions about our cardiac services, emergency care, and specialist consultations in Kasaragod.
            </p>
            <div className="bg-soft-grey p-8 rounded-xl border border-slate-100">
              <div className="text-cardiac-blue font-bold text-sm mb-4 uppercase tracking-widest">Need more information?</div>
              <p className="text-muted text-sm mb-6 leading-relaxed">Our coordination team is available to assist you with specific queries regarding treatments or appointments.</p>
              <a href="tel:+914994225500" className="text-emerald font-bold text-sm uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                Call Reception <span>→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-xl transition-all duration-500",
                  openIdx === idx ? "border-emerald/30 bg-soft-grey/50 shadow-sm" : "border-slate-100 bg-white"
                )}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={cn(
                    "text-base md:text-lg font-bold tracking-tight transition-colors",
                    openIdx === idx ? "text-emerald" : "text-cardiac-blue group-hover:text-emerald"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "h-8 w-8 rounded-full border flex items-center justify-center shrink-0 transition-all",
                    openIdx === idx ? "bg-emerald border-emerald text-white" : "border-slate-200 text-slate-400 group-hover:border-emerald group-hover:text-emerald"
                  )}>
                    {openIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIdx === idx ? "auto" : 0, opacity: openIdx === idx ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 text-muted text-sm md:text-base leading-relaxed font-medium max-w-2xl">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
