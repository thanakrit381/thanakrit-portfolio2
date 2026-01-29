import { Palette, Lightbulb, Users, Code } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "User journey, wireframing, mockups, prototypes",
  },
  {
    icon: Lightbulb,
    title: "Prototyping",
    description: "Interactive prototypes with Figma variables & conditions",
  },
  {
    icon: Users,
    title: "User Flow",
    description: "Creating intuitive paths through digital experiences",
  },
  {
    icon: Code,
    title: "Development",
    description: "Python, C, MySQL, HTML/CSS, Deep Learning",
  },
];

const tools = ["Figma", "FigJam", "Prototype", "Design Systems", "Photoshop", "Canva"];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Motivated with hands-on experience in UX/UI design
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a 4th-year Computer Engineering student at Mahidol University, 
              expected to graduate in 2026. Motivated with hands-on experience in 
              UX/UI design, product thinking, and cross-functional collaboration.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I completed a 6-month UX/UI Designer internship at CubeSoftTech, 
              where I worked on real-world products from research to high-fidelity 
              prototypes. This experience has strengthened my skills in creating 
              user-centered designs and solving complex problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have a strong interest in technology-driven business and operations. 
              I'm seeking a full-time role through graduate development programs to 
              grow into a future leader in the tech and e-commerce ecosystem.
            </p>

            {/* Tools */}
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-4">Tools I use</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 bg-background rounded-xl card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
