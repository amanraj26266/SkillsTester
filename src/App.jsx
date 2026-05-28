import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PersonaSection from './components/PersonaSection';
import SkillsSection from './components/SkillsSection';
import HowItWorksSection from './components/HowItWorksSection';
import FileStructureSection from './components/FileStructureSection';
import PlaygroundSection from './components/PlaygroundSection';
import DeveloperSection from './components/DeveloperSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f' }}>
      <Header />
      <HeroSection />
      <PersonaSection />
      <SkillsSection />
      <HowItWorksSection />
      <FileStructureSection />
      <PlaygroundSection />
      <DeveloperSection />
      <Footer />
    </div>
  );
}
