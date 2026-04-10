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

const HERO_IMAGE = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 900">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#183b31" />
      </linearGradient>
      <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#d9ff6f" />
        <stop offset="100%" stop-color="#88c451" />
      </linearGradient>
    </defs>
    <rect width="1400" height="900" fill="url(#bg)" />
    <circle cx="320" cy="240" r="180" fill="#ffffff" opacity="0.08" />
    <circle cx="1090" cy="200" r="220" fill="#d9ff6f" opacity="0.12" />
    <rect x="220" y="220" width="520" height="360" rx="36" fill="#f8fafc" opacity="0.92" />
    <rect x="270" y="270" width="220" height="28" rx="14" fill="#183b31" opacity="0.9" />
    <rect x="270" y="320" width="360" height="18" rx="9" fill="#64748b" opacity="0.7" />
    <rect x="270" y="360" width="420" height="18" rx="9" fill="#64748b" opacity="0.55" />
    <rect x="270" y="430" width="170" height="52" rx="26" fill="url(#accent)" />
    <rect x="470" y="430" width="170" height="52" rx="26" fill="#dbeafe" />
    <rect x="795" y="245" width="340" height="410" rx="44" fill="#ffffff" opacity="0.14" stroke="#d9ff6f" stroke-opacity="0.24" />
    <rect x="840" y="295" width="250" height="26" rx="13" fill="#d9ff6f" opacity="0.9" />
    <rect x="840" y="345" width="190" height="18" rx="9" fill="#ffffff" opacity="0.85" />
    <rect x="840" y="390" width="240" height="18" rx="9" fill="#ffffff" opacity="0.7" />
    <rect x="840" y="435" width="210" height="18" rx="9" fill="#ffffff" opacity="0.55" />
    <rect x="840" y="500" width="260" height="98" rx="28" fill="#d9ff6f" opacity="0.16" />
  </svg>
`);

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