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

const REPO_BASE = '/PlanIt-Case-Study/';
const BASE_PATH = window.location.pathname.startsWith(REPO_BASE) ? REPO_BASE : '/';
const HERO_IMAGE = `${BASE_PATH}images/final-preview.png`;

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <StickyNav />
      <HeroSection />
      <section className="-mt-24 px-6 pb-2 md:px-10 lg:px-20">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-[0_24px_80px_rgba(19,34,25,0.14)]">
          <img
            src={HERO_IMAGE}
            alt="PlanIt app mockup with two mobile screens"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
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