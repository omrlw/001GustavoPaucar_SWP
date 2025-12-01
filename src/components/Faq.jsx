import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { FAQ_CONTENT, FAQS } from '../data/content';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-light">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle title={FAQ_CONTENT.title} subtitle={FAQ_CONTENT.subtitle} align="center" />
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={faq.question} className="border border-slate-200 bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-medium text-dark text-lg">{faq.question}</span>
                <ChevronRight
                  className={`text-secondary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-panel-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-dark/70 bg-white border-t border-slate-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
