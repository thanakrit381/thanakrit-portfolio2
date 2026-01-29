import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  role: string;
  description?: string;
  figmaUrl: string;
  thumbnail?: string;
}

const ProjectCard = ({ title, role, description, figmaUrl, thumbnail }: ProjectCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden card-hover">
      {/* Thumbnail */}
      <div className="aspect-[4/3] bg-muted overflow-hidden relative">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent to-muted flex items-center justify-center">
            <span className="text-6xl font-serif font-bold text-primary/20">
              {title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="project-overlay flex items-end p-6">
          <Button asChild variant="hero" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View in Figma
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
          {role}
        </p>
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const ProjectList = ({ internshipProjects }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {internshipProjects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectCard;
