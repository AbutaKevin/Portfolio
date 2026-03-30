import { Code, User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Detail-oriented, highly motivated and dedicated professional with a
              strong background in{" "}
              <span className="text-blue-400 font-semibold">
                Applied Computer Science
              </span>
              . Skilled in building modern applications using PHP, MySQL,
              JavaScript, and React.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              I enjoy solving complex problems and transforming ideas into
              efficient, scalable solutions through clean and maintainable code.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">2+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">10+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />,
                  title: "Clean Code",
                  desc: "Scalable & maintainable solutions",
                },
                {
                  icon: <User className="w-8 h-8 text-blue-500 mx-auto mb-3" />,
                  title: "User-Focused",
                  desc: "Designing for real users",
                },
                {
                  icon: (
                    <Briefcase className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  ),
                  title: "Professional",
                  desc: "Committed to growth",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-700/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg
                  hover:scale-105 hover:bg-slate-700/60 transition-all duration-300 cursor-pointer"
                >
                  {item.icon}
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg hover:scale-105 transition"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Timeline) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-50"></div>

            <div className="relative z-10 bg-slate-700/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Education & Experience
              </h3>

              <div className="space-y-8">
                {/* Timeline Item */}
                {[
                  {
                    title:
                      "Bachelor of Science in Applied Computer Science",
                    org: "Chuka University",
                    date: "2020 - 2024",
                    desc: "Full-Stack Web Development & Network Administration",
                  },
                  {
                    title:
                      "Certificate in Data Entry & Analysis (STATA & SPSS)",
                    org: "KESAP Research Centre",
                    date: "2022",
                    desc: "Data Analysis & Management",
                  },
                  {
                    title: "Cloud & Network Security",
                    org: "Cyber Shujaa",
                    date: "2025",
                    desc: "Cybersecurity specialization",
                  },
                  {
                    title: "Cisco Certifications",
                    org: "CCNA",
                    date: "2026",
                    list: [
                      "Networking Basics",
                      "Cyber Security",
                      "Modern AI",
                      "IoT & Digital Transformation",
                    ],
                  },
                  {
                    title: "ICT Intern",
                    org: "State Department of Lands",
                    date: "2025",
                    desc: "System maintenance, network support & security",
                  },
                  {
                    title: "ICT Staff",
                    org: "State Department of Lands",
                    date: "2026",
                    desc: "Technical support & system administration",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 hover:translate-x-2 transition-all duration-300"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full"></div>

                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-blue-400 text-sm">{item.org}</p>
                    <p className="text-gray-400 text-sm">{item.date}</p>

                    {item.desc && (
                      <p className="text-gray-300 mt-2 text-sm">
                        {item.desc}
                      </p>
                    )}

                    {item.list && (
                      <ul className="text-gray-300 mt-2 text-sm list-disc list-inside space-y-1">
                        {item.list.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;