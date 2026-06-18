const details = [
  { label: "Age group", value: "8–14 years" },
  { label: "Duration", value: "4 weeks" },
  { label: "Mode", value: "Online (live)" },
  { label: "Fee", value: "₹2,999" },
  { label: "Start date", value: "15 July 2026" },
]

export default function WorkshopDetails() {
  return (
    <section className="border-b border-ink/5 bg-cream py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Workshop details
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {details.map((d) => (
            <div
              key={d.label}
              className="rounded-xl border border-ink/10 bg-white px-5 py-6 text-center shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate">
                {d.label}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-ink">
                {d.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
