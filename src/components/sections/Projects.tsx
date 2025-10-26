
import { useState } from "react";
import { Link, Code, Image as ImageIcon } from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

const projects = [
  {
    id: 1,
    title: "Online Bus Booking System",
    description: "A full-stack web application developed with PHP, JavaScript, HTML,Bootstrap, CSS and MYSQL. Key features include seat reservation, user authentication using JWT, payment integration with Stripe, schedule management, and an admin dashboard for route and booking control.",
    technologies: ["PHP", "JavaScript", "MYSQL", "HTML","Bootstrap", "CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
    category: "Web App"
  },

   {
  id: 2,
  title: "Portfolio Website",
  description: "A responsive personal portfolio website showcasing web projects, skills, and contact information. Built using HTML, CSS, JavaScript, and Bootstrap, it features smooth navigation, project galleries, and mobile-friendly design. Designed to represent my development profile and provide easy access to my work and resume.",
  technologies: ["Node.js", "Typescript","HTML", "CSS", "JavaScript", "Bootstrap"],
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  liveUrl: "#",
  codeUrl: "#",
  category: "Portfolio"
},

    /*{
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and project analytics. Built using React, TypeScript, and Firebase.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "PWA"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      liveUrl: "#",
      codeUrl: "#",
      category: "Web App"
    },
    {
      id: 4,
      title: "Machine Learning Classifier",
      description: "Image classification system using TensorFlow and Python. Trained custom models for object recognition with 95% accuracy rate and deployed via REST API.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      liveUrl: "#",
      codeUrl: "#",
      category: "Machine Learning"
    }*/
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work spanning web development
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Full-Stack", "Cybersecurity", "Web App", ].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-slate-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-700/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105"
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Link className="w-4 h-4" />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
