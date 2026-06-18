import { useState } from "react"

const faqs = [
  {
    q: "Does my child need any prior coding experience?",
    a: "No prior experience is required. We start from the basics using visual, drag-and-drop tools before introducing any text-based code, so first-timers are completely comfortable.",
  },
  {
    q: "What equipment do we need at home?",
    a: "A laptop or desktop with a stable internet connection and a webcam is enough. If a robotics kit is needed for hands-on sessions, we'll share the exact list at least a week before the start date.",
  },
  {
    q: "What happens if my child misses a live session?",
    a: "Every live session is recorded and shared within 24 hours, so your child can catch up at their own pace without losing track of the course.",
  },
  {
    q: "Is there a certificate at the end?",
    a: "Yes, every child who completes the 4-week program and final project receives a certificate of completion they can showcase.",
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10 py-2">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-medium text-ink sm:text-lg">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 text-2xl text-violet transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-slate">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
