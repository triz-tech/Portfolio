import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Technologies from '@/components/sections/Technologies';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import FeaturedFlowMona from '@/components/sections/FeaturedFlowMona';
import CinemaSection from '@/components/sections/CinemaSection';
import Lab from '@/components/sections/Lab';
import Seeking from '@/components/sections/Seeking';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <FeaturedFlowMona />
      <CinemaSection />
      <Lab />
      <Seeking />
      <Contact />
    </>
  );
}
