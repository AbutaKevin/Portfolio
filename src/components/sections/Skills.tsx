
import { useState, useEffect } from "react";
import { Code } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "PHP,HTML & CSS", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "JavaScript/TypeScript", level: 85, color: "from-blue-400 to-cyan-500" },
    { name: "React", level: 80, color: "from-green-400 to-emerald-500" },
    { name: "Python", level: 85, color: "from-blue-500 to-blue-600" },
    { name: "SQL", level: 75, color: "from-blue-600 to-cyan-500" },
    { name: "Java", level: 75, color: "from-red-400 to-rose-500" },
    { name: "C/C++", level: 80, color: "from-gray-400 to-slate-600" },
    { name: "Git", level: 70, color: "from-orange-400 to-red-500" },
  ];

  const technologies = [
    "PHP","React", "JavaScript", "Node.js", "Python", "Java", "SQL", "MongoDB",
    "C", "Windows/Linux", "Bootstrap CSS", "Git", "HTML", "CSS"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="group p-4 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white font-medium text-sm">{tech}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-8 p-6 bg-slate-700/20 backdrop-blur-sm rounded-lg border border-slate-600/30">
              <h4 className="text-xl font-semibold text-white mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Algorithm Design", "System Architecture", "Database Design", "Security Best Practices", "Agile Development", "Code Review"].map((competency) => (
                  <span
                    key={competency}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {competency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
