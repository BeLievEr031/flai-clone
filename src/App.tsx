import NavBar from "./components/NavBar"
import ChallengeSection from "./sections/ChallengeSection"
import CustomeWorkflowSection from "./sections/CustomeWorkflowSection"
import HeroSection from "./sections/HeroSection"
import HowItWorksSection from "./sections/HowItWorksSection"
import WhatWeDoSection from "./sections/WhatWeDoSection"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ChallengeSection />
        <HowItWorksSection />
        <CustomeWorkflowSection />
      </main>
    </div>
  )
}

export default App