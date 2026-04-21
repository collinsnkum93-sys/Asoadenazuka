import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Where do you source your ingredients?",
    answer: "We source our botanicals directly from small-scale farming cooperatives across West and East Africa, including Ghana, Nigeria, and Kenya. This ensures the highest quality while providing fair wages to local communities."
  },
  {
    question: "Are your drinks carbonated?",
    answer: "No, Asoaden Azuka drinks are still, botanical elixirs. We believe the full profile of our natural extracts is best experienced without the distraction of carbonation."
  },
  {
    question: "Is there added sugar?",
    answer: "We use minimal amounts of raw cane sugar or organic honey to balance the natural tartness of botanicals like hibiscus and tamarind. Most of our drinks contain less than 6g of sugar per serving."
  },
  {
    question: "How long is the shelf life?",
    answer: "Due to our cold-fill sterilization process, our drinks have a shelf life of 9 months when stored in a cool, dry place. Once opened, please refrigerate and consume within 3 days."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! While we are based in Accra, we ship to most countries globally. Shipping rates and times vary depending on the destination."
  }
];

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-brand-red"
      >
        <span className="text-xl font-bold uppercase tracking-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-lg leading-relaxed text-gray-500">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <h4 className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-brand-red">Support</h4>
          <h1 className="mb-8 text-6xl font-black uppercase tracking-tighter md:text-8xl">FAQS</h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600">
            Everything you need to know about our elixirs, sourcing, and delivery.
          </p>
        </header>

        <div className="mx-auto max-w-4xl rounded-[3rem] bg-gray-50 p-12 lg:p-20 shadow-xl shadow-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <AccordionItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="mb-6 text-2xl font-black uppercase tracking-tight">Still have questions?</h3>
          <p className="mb-8 text-gray-500 font-medium">Our team is here to help you stay vibrant.</p>
          <a href="/contact" className="inline-block rounded-full bg-brand-black px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-red">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
