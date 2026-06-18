const outcomes = [
  "Build and train a simple image-recognition model using a visual, block-based AI tool",
  "Program a robot car to follow lines, avoid obstacles, and respond to sensors",
  "Understand core AI concepts — data, patterns, and predictions — through hands-on play",
  "Design and test a mini robotics project from idea to working prototype",
  "Present a final project to family and peers, building confidence in explaining tech ideas",
]

export default function LearningOutcomes() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          What your child will learn
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {outcomes.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl bg-cream p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet/15 font-display text-xs font-semibold text-violet">
                {i + 1}
              </span>
              <span className="text-slate">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
