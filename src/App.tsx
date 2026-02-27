import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EdgeSlider from './components/EdgeSlider';
import EdgeDetail from './components/EdgeDetail';
import AdvantageBlock from './components/AdvantageBlock';
import GalleryGrid from './components/GalleryGrid';
import AboutSection from './components/AboutSection';
import InvestmentSection from './components/InvestmentSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-deep-space min-h-screen text-white overflow-x-hidden selection:bg-neon-teal selection:text-black">
      <Navbar />
      <Hero />
      <EdgeSlider />
      <EdgeDetail />
      <AdvantageBlock />
      <GalleryGrid />
      <AboutSection />
      <InvestmentSection />
      <Footer />
    </main>
  );
}
