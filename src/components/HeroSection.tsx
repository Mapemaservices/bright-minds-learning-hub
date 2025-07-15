import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Heart } from 'lucide-react';
import heroBackground from '@/assets/hero-books.jpg';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/80 via-background/70 to-accent-light/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-secondary/30 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce-gentle">
        <div className="w-8 h-8 bg-accent/40 rounded-lg rotate-45"></div>
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-highlight/30 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-soft">
            <Heart className="w-4 h-4 text-accent" />
            <span className="font-body text-xs sm:text-sm text-foreground">Supporting ADHD-Friendly Learning</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 sm:mb-6 leading-tight">
            Books & Curriculum<br />
            Tailored for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bright Young Minds
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Empowering homeschooling families with ADHD-friendly learning tools that celebrate 
            neurodiversity and foster joyful education at home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('bookstore')}
              className="group w-full sm:w-auto"
            >
              <BookOpen className="w-5 h-5 group-hover:animate-bounce-gentle" />
              Browse Books
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('curriculum')}
              className="group w-full sm:w-auto"
            >
              <GraduationCap className="w-5 h-5 group-hover:animate-bounce-gentle" />
              Explore Curriculum
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col xs:flex-row gap-6 sm:gap-8 justify-center items-center px-4 sm:px-0">
            <div className="text-center">
              <div className="font-heading font-bold text-xl sm:text-2xl text-primary">500+</div>
              <div className="font-body text-xs sm:text-sm text-muted-foreground">Happy Families</div>
            </div>
            <div className="hidden xs:block w-px h-6 sm:h-8 bg-border"></div>
            <div className="text-center">
              <div className="font-heading font-bold text-xl sm:text-2xl text-secondary">1000+</div>
              <div className="font-body text-xs sm:text-sm text-muted-foreground">ADHD-Friendly Resources</div>
            </div>
            <div className="hidden xs:block w-px h-6 sm:h-8 bg-border"></div>
            <div className="text-center">
              <div className="font-heading font-bold text-xl sm:text-2xl text-accent">5 Years</div>
              <div className="font-body text-xs sm:text-sm text-muted-foreground">Supporting Neurodiversity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};