import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default App