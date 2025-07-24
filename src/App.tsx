import NavBar from "./components/NavBar"
import ChallengeSection from "./sections/ChallengeSection"
import HeroSection from "./sections/HeroSection"
import WhatWeDoSection from "./sections/WhatWeDoSection"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ChallengeSection />
      </main>
    </div>
  )
}

export default App