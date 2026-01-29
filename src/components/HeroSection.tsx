import { ArrowDown, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-sm md:text-base font-medium text-primary mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Thanakrit
            <span className="block text-primary">Chutiwongthanaphat</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            UX/UI Designer & Computer Engineering Student
          </p>

          {/* Value Statement */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Crafting intuitive digital experiences through user-centered design, 
            prototyping, and innovative problem-solving.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="xl" variant="hero">
              <a href="#projects">
                <ExternalLink className="h-5 w-5" />
                View Portfolio
              </a>
            </Button>
            <Button asChild size="xl" variant="heroOutline">
              <a href="/resume/Thanakrit_Chutiwongthanaphat-CV.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

