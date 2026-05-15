import Navbar from '@/components/navigation/Navbar/Navbar';
import GradientOverlay from '@/components/decorative/GradientOverlay/GradientOverlay';
import WaveDivider from '@/components/decorative/WaveDivider/WaveDivider';
import { COLORS } from '@/utils/constants';
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
        <WaveDivider colorAbove={COLORS.bg} colorBelow={COLORS.bg} />
        <Storytelling />
        <WaveDivider colorAbove={COLORS.bg} colorBelow={COLORS.bgAlt} />
        <Prestations />
        <Details />
        <WaveDivider colorAbove={COLORS.bgAlt} colorBelow={COLORS.bg} />
        <Workshops />
        <WaveDivider colorAbove={COLORS.bg} colorBelow={COLORS.bgAlt} />
        <Myths />
        <WaveDivider colorAbove={COLORS.bgAlt} colorBelow={COLORS.bg} />
        <Testimonials />
        <Pricing />
        <WaveDivider colorAbove={COLORS.bg} colorBelow={COLORS.bgAlt} flip />
        <FAQ />
        <WaveDivider colorAbove={COLORS.bgAlt} colorBelow={COLORS.bg} />
        <Contact />
      </main>
      {
      // <ScrollToTop />
      }
    </>
  );
}

export default App;
