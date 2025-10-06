import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Converter Landing Page",
    description: "A beautiful landing page app using Html, Css and Javascript.",
    image: "/projects/Currency-converter.jpeg",
    tags: ["Html", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Akash-098/Currency-converter",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-transform duration-500 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="glow-button-small flex items-center justify-center p-2 rounded-md"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="glow-button-small flex items-center justify-center p-2 rounded-md"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="glow-button px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            target="_blank"
            href="https://github.com/Akash-098"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes neonGlow {
          0% {
            box-shadow: 0 0 5px #a855f7, 0 0 10px #ec4899, 0 0 15px #fcd34d;
          }
          50% {
            box-shadow: 0 0 15px #a855f7, 0 0 25px #ec4899, 0 0 35px #fcd34d;
          }
          100% {
            box-shadow: 0 0 5px #a855f7, 0 0 10px #ec4899, 0 0 15px #fcd34d;
          }
        }

        .glow-button {
          border: 2px solid #a855f7;
          color: #a855f7;
          background: transparent;
          transition: all 0.3s ease;
          animation: neonGlow 2s infinite;
        }

        .glow-button:hover {
          background: linear-gradient(
            90deg,
            #a855f7,
            #ec4899,
            #fcd34d
          );
          color: white;
          transform: scale(1.05);
        }

        .glow-button-small {
          border: 2px solid #a855f7;
          color: #a855f7;
          background: transparent;
          transition: all 0.3s ease;
          animation: neonGlow 2s infinite;
        }

        .glow-button-small:hover {
          background: linear-gradient(
            90deg,
            #a855f7,
            #ec4899,
            #fcd34d
          );
          color: white;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
