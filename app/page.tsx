import Navbar from '@/components/navbar'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import DisciplinesSection from '@/components/DisciplinesSection'
import WhyUGSection from '@/components/WhyUGSection'
import QuizSection from '@/components/QuizSection'
import AnalogySection from '@/components/AnalogySection'
import CareerPathsSection from '@/components/CareerPathsSection'
import ConclusionFooter from '@/components/ConclusionFooter'
import ComparisonTable from '@/components/ComparisonTable'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <DisciplinesSection />
      <WhyUGSection />
      <QuizSection />
      <AnalogySection />
      <ComparisonTable />
      <CareerPathsSection />
      <ConclusionFooter />
    </div>
  )
}
