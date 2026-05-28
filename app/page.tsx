import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Skills } from '@/components/portfolio/skills';
import { Projects } from '@/components/portfolio/projects';
import { Education } from '@/components/portfolio/education';
import { HowIWork } from '@/components/portfolio/how-i-work';
import { Contact } from '@/components/portfolio/contact';
import { Footer } from '@/components/portfolio/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <HowIWork />
      <Contact />
      <Footer />
    </main>
  );
}
