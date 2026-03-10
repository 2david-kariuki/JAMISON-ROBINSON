import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import Education from '@/components/Education';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsGrid from '@/components/ProjectsGrid';
import TechToolkit from '@/components/TechToolkit';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MetricsBar />
      <Education />
      <ExperienceTimeline />
      <ProjectsGrid />
      <TechToolkit />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
