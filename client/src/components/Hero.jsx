export default function Hero({ onEnrollClick }) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Circuit constellation background */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#7C5CFF" strokeWidth="1.5" fill="none" opacity="0.5">
          <path d="M80 120 L280 120 L280 260 L460 260" />
          <path d="M460 260 L460 90 L680 90" />
          <path d="M680 90 L680 220 L900 220 L900 380" />
          <path d="M900 380 L1120 380" />
          <path d="M120 420 L320 420 L320 560" />
          <path d="M320 560 L560 560 L560 640" />
          <path d="M600 480 L800 480 L800 600 L1040 600" />
        </g>
        <g fill="#FFB627">
          <circle cx="80" cy="120" r="5" />
          <circle cx="280" cy="120" r="4" />
          <circle cx="280" cy="260" r="5" />
          <circle cx="460" cy="260" r="6" />
          <circle cx="460" cy="90" r="4" />
          <circle cx="680" cy="90" r="5" />
          <circle cx="680" cy="220" r="4" />
          <circle cx="900" cy="220" r="6" />
          <circle cx="900" cy="380" r="4" />
          <circle cx="1120" cy="380" r="5" />
          <circle cx="120" cy="420" r="4" />
          <circle cx="320" cy="420" r="5" />
          <circle cx="320" cy="560" r="4" />
          <circle cx="560" cy="560" r="6" />
          <circle cx="560" cy="640" r="4" />
          <circle cx="600" cy="480" r="5" />
          <circle cx="800" cy="480" r="4" />
          <circle cx="800" cy="600" r="5" />
          <circle cx="1040" cy="600" r="6" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet/20 px-4 py-1.5 text-sm font-medium text-violet ring-1 ring-violet/40">
            Ages 8–14 · Fully Online
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            AI & Robotics
            <span className="block text-amber">Summer Workshop</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Four weeks of hands-on building — from teaching a machine
            to recognize pictures, to programming a robot that follows
            instructions. No experience needed, just curiosity.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onEnrollClick}
              className="rounded-lg bg-amber px-7 py-3.5 font-display text-base font-semibold text-ink transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-amber/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Enroll Now — ₹2,999
            </button>
            <span className="text-sm text-cream/60">
              Starts 15 July 2026 · Limited seats
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
