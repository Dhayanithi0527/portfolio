import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Background from './components/ui/Background'
import SmoothScroll from './components/ui/SmoothScroll'
import Cursor from './components/ui/Cursor'
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <SmoothScroll>
            <Toaster position="top-right" />
            <div className="min-h-screen relative text-white selection:bg-cyan-500/30">
                <div className="noise-bg"></div>
                <Background />
                <Navbar />

                <main className="relative z-10">
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
            </div>
        </SmoothScroll>
    )
}

export default App
