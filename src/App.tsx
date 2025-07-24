import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import WhatWeDoSection from "./sections/WhatWeDoSection"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
      </main>
    </div>
  )
}

export default App