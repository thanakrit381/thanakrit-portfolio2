import ProjectCard from "./ProjectCard";
import CubeSoftTechWebsite from "../assets/cubesofttech-website.png";
import CubeSoftTechHRM from "../assets/cubesofttech-hrm.png";
import CubeSoftTechLineOA from "../assets/cubesofttech-line-oa.png";
import CubeSoftTechNameCard from "../assets/cubesofttech-name-card.png";

const internshipProjects = [
  {
    title: "CubeSoftTech Website",
    role: "UI Design",
    description: "Corporate landing page design with modern aesthetics",
    figmaUrl: "https://www.figma.com/design/BK0871Kyq7jq3DOaPjvyik/CubeSoftTech-Landing-page",
    thumbnail: CubeSoftTechWebsite, // Use imported image
  },
  {
    title: "CubeSoftTech HRM",
    role: "UX/UI Design",
    description: "Human Resource Management system interface design",
    figmaUrl: "https://www.figma.com/design/sF3YeVxdsMAgVZfwYHkUpm/Hrm-CA2",
    thumbnail: CubeSoftTechHRM, // Use imported image
  },
  {
    title: "CubeSoftTech HRM LINE OA",
    role: "Design & Prototype",
    description: "LINE Official Account integration for HRM system",
    figmaUrl: "https://www.figma.com/design/tG1bSSJF2pz6Sy4iZmaVuz/Line-Hrm",
    thumbnail: CubeSoftTechLineOA, // Use imported image
  },
  {
    title: "CubeSoftTech Name Card",
    role: "Landing Page Design",
    description: "Digital name card landing page for company team",
    figmaUrl: "https://www.figma.com/design/RcjSg12Sv1KbptyZLjScK6/landing-name-card",
    thumbnail: CubeSoftTechNameCard, // Use imported image
  },
];

const InternshipSection = () => {
  return (
    <section id="internship" className="bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Professional Experience</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Internship Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projects completed during my internship at CubeSoftTech, 
            focusing on enterprise solutions and user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {internshipProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
