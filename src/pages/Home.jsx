import StickyNav from '../components/portfolio/StickyNav';
import HeroSection from '../components/portfolio/HeroSection';
import ProjectSnapshot from '../components/portfolio/ProjectSnapshot';
import ProblemSection from '../components/portfolio/ProblemSection';
import ResearchInsights from '../components/portfolio/ResearchInsights';
import UserPersonas from '../components/portfolio/UserPersonas';
import SolutionSection from '../components/portfolio/SolutionSection';
import DesignDecisions from '../components/portfolio/DesignDecisions';
import ProductThinkingSection from '../components/portfolio/ProductThinkingSection';
import DesignSystemSection from '../components/portfolio/DesignSystemSection';
import OutcomesReflection from '../components/portfolio/OutcomesReflection';
import Footer from '../components/portfolio/Footer';
import FinalScreensSection from '../components/portfolio/FinalScreensSection';

const HERO_IMAGE = '/images/hero.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <StickyNav />
      <HeroSection heroImage={HERO_IMAGE} />
      <ProjectSnapshot />
      <ProblemSection />
      <ResearchInsights />
      <UserPersonas />
      <SolutionSection />
      <ProductThinkingSection />
      <DesignDecisions />
      <DesignSystemSection />
      <OutcomesReflection />
      <FinalScreensSection />
      <Footer />
    </div>
  );
}