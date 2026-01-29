import ProjectCard from "./ProjectCard";

// Import images from the assets folder
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.png";
import Image5 from "../assets/5.png";
import Image6 from "../assets/6.png";
import Image7 from "../assets/7.png";
import Image8 from "../assets/8.png";

const personalProjects = [
  {
    title: "Portfolio Prototype",
    role: "Interactive Prototype",
    description: "Personal portfolio with advanced Figma interactions",
    figmaUrl: "https://www.figma.com/proto/QQokGenyRVF1OvJHP6mIwr/PORTFOLIO-Thanakrit-Chutiwongthanaphat",
    thumbnail: Image1,
  },
  {
    title: "WE Space User Flow",
    role: "FigJam User Flow",
    description: "Comprehensive user flow mapping for WE Space application",
    figmaUrl: "https://www.figma.com/board/i3IIlCBYpHwPiRye1CCyNc/User-Flow-of-WE-Space",
    thumbnail: Image2,
  },
  {
    title: "Tee Yai Mobile App",
    role: "Design & Hi-Fi Prototype",
    description: "Restaurant reservation app with advanced prototyping",
    figmaUrl: "https://www.figma.com/design/SJgr4o9SsqimUARVgw35Wa/Restaurant-Reservation-App",
    thumbnail: Image3,
  },
  {
    title: "Image Segmentation Website",
    role: "Web Design",
    description: "UI for AI-powered image segmentation tool",
    figmaUrl: "https://www.figma.com/design/k7RhuUTAv6MqcNrrgXHrgE/Image-Segmentation-Website",
    thumbnail: Image4,
  },
  {
    title: "AI Agent Interface",
    role: "Draft Design",
    description: "Conceptual design for AI agent interaction",
    figmaUrl: "https://www.figma.com/design/l3WALChzsBSPar1RC1Ozxe/Untitled",
    thumbnail: Image5,
  },
  {
    title: "AI Agent 2",
    role: "UI Design",
    description: "Refined AI agent interface design",
    figmaUrl: "https://www.figma.com/design/eixp37nEDTpnAh2OaQaJzU/Ai-Agent",
    thumbnail: Image6,
  },
  {
    title: "Other Web Design",
    role: "Various Projects",
    description: "Collection of web design explorations",
    figmaUrl: "https://www.figma.com/design/CM57awC3YmJkwtYmFX2o4N/other-web-design",
    thumbnail: Image7,
  },
  {
    title: "Other Design Work",
    role: "Design Collection",
    description: "Various design experiments and concepts",
    figmaUrl: "https://www.figma.com/design/iSl4XyioVJo2qKuC90GmtV/other-design",
    thumbnail: Image8,
  },
];

const PersonalProjectsSection = () => {
  return (
    <section id="projects" className="bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Creative Work</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Personal Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Self-initiated projects exploring UX/UI design, prototyping, 
            and innovative digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
