import PageWrapper from "../components/layout/PageWrapper";
import Reveal from "../components/ui/Reveal";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </PageWrapper>
  );
}