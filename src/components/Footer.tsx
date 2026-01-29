import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl font-semibold">
            Thanakrit<span className="text-primary">.</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
              About
            </a>
            <a href="#internship" className="text-sm text-background/70 hover:text-background transition-colors">
              Internship
            </a>
            <a href="#projects" className="text-sm text-background/70 hover:text-background transition-colors">
              Projects
            </a>
            <a href="#resume" className="text-sm text-background/70 hover:text-background transition-colors">
              Resume
            </a>
            <a href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-background/70 flex items-center gap-1">
            © {currentYear} Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Thanakrit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
