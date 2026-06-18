import { useState } from "react"

const initialState = { name: "", email: "", phone: "" }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Enter your child's full name"
  if (!values.email.trim()) {
    errors.email = "Enter an email address"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address"
  }
  if (!values.phone.trim()) {
    errors.phone = "Enter a phone number"
  } else if (!/^[0-9]{10}$/.test(values.phone.trim())) {
    errors.phone = "Enter a 10-digit phone number"
  }
  return errors
}

export default function RegistrationForm({ formRef }) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("")

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus("loading")
    setServerMessage("")

    try {
      const API_URL = import.meta.env.VITE_API_URL || "/api/enquiry"
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        setValues(initialState)
      } else {
        setStatus("error")
        setServerMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setStatus("error")
      setServerMessage("Could not reach the server. Please try again in a moment.")
    }
  }

  return (
    <section ref={formRef} className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Reserve a seat
        </h2>
        <p className="mt-2 text-cream/70">
          Tell us where to send enrollment details. We'll follow up within
          one business day.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-xl border border-amber/30 bg-amber/10 p-6">
            <p className="font-display text-lg font-semibold text-amber">
              You're on the list!
            </p>
            <p className="mt-1 text-cream/80">
              We've received the enquiry and will reach out shortly with
              next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cream/80">
                Child's full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="e.g. Aanya Sharma"
                className="mt-1.5 w-full rounded-lg border border-cream/20 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/30 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-amber">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cream/80">
                Parent/guardian email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-lg border border-cream/20 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/30 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-amber">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-cream/80">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="mt-1.5 w-full rounded-lg border border-cream/20 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/30 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
              />
              {errors.phone && (
                <p className="mt-1.5 text-sm text-amber">{errors.phone}</p>
              )}
            </div>

            {status === "error" && (
              <p className="text-sm text-amber">{serverMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center rounded-lg bg-amber px-6 py-3 font-display font-semibold text-ink transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin text-ink"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit enquiry"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
