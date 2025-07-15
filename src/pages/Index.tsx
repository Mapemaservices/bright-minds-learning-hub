import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { BookstoreSection } from '@/components/BookstoreSection';
import { CurriculumSection } from '@/components/CurriculumSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { AdminPanel } from '@/components/AdminPanel';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BookstoreSection />
        <CurriculumSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
