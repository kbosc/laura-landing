import Navbar from '@/components/navigation/Navbar/Navbar';
import GradientOverlay from '@/components/decorative/GradientOverlay/GradientOverlay';
import WaveDivider from '@/components/decorative/WaveDivider/WaveDivider';
import ScrollToTop from '@/components/ui/ScrollToTop/ScrollToTop';
import Hero from '@/sections/Hero/Hero';
import Storytelling from '@/sections/Storytelling/Storytelling';
import Prestations from '@/sections/Prestations/Prestations';
import Details from '@/sections/Details/Details';
import Workshops from '@/sections/Workshops/Workshops';
import Myths from '@/sections/Myths/Myths';
import Testimonials from '@/sections/Testimonials/Testimonials';
import Pricing from '@/sections/Pricing/Pricing';
import FAQ from '@/sections/FAQ/FAQ';
import Contact from '@/sections/Contact/Contact';

function App() {
  return (
    <>
      <GradientOverlay />
      <Navbar />
      <main>
        <Hero />
        <WaveDivider color="#FAF8F5" />
        <Storytelling />
        <WaveDivider color="#F3EDE4" />
        <Prestations />
        <WaveDivider color="#FAF8F5" />
        <Details />
        <WaveDivider color="#F3EDE4" />
        <Workshops />
        <WaveDivider color="#F3EDE4" />
        <Myths />
        <WaveDivider color="#FAF8F5" />
        <Testimonials />
        <WaveDivider color="#F3EDE4" />
        <Pricing />
        <WaveDivider color="#FAF8F5" flip />
        <FAQ />
        <WaveDivider color="#3A2E2A" />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
