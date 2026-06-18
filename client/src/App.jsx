import { useRef } from "react"
import Hero from "./components/Hero.jsx"
import WorkshopDetails from "./components/WorkshopDetails.jsx"
import LearningOutcomes from "./components/LearningOutcomes.jsx"
import FAQ from "./components/FAQ.jsx"
import RegistrationForm from "./components/RegistrationForm.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  const formRef = useRef(null)

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="font-body">
      <Hero onEnrollClick={scrollToForm} />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm formRef={formRef} />
      <Footer />
    </div>
  )
}
