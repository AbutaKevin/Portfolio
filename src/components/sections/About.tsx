
import { Code, User, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Detail-oriented, highly motivated and dedicated professional 
              with a solid foundation in Applied Computer Science. 
              Skilled in building dynamic applications using PHP, MySQL, JavaScript, and React, 
              with real-world projects such as online booking systems and user management platforms. 
              Proficient in using Git, GitHub, and modern development tools. 
              Eager to leverage my diverse skill set in a dynamic role that offers opportunities 
              for growth and the chance to contribute meaningfully to the success of the organization.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With experience in full-stack development, IT support and modern web technologies, 
              I enjoy tackling complex problems and turning ideas into reality through clean, 
              efficient code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg backdrop-blur-sm">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-400 text-sm">Writing maintainable, scalable solutions</p>
              </div>
              
              <div className="text-center p-6 bg-slate-700/50 rounded-lg backdrop-blur-sm">
                <User className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">User-Focused</h3>
                <p className="text-gray-400 text-sm">Designing with the end user in mind</p>
              </div>
              
              <div className="text-center p-6 bg-slate-700/50 rounded-lg backdrop-blur-sm">
                <Briefcase className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Professional</h3>
                <p className="text-gray-400 text-sm">Committed to excellence and growth</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Education & Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Science in Applied Computer Science</h4>
                  <p className="text-blue-400 font-medium">Chuka University</p>
                  <p className="text-gray-400">2020 - 2024 </p>
                  <p className="text-gray-300 mt-2">Specialized in Full-Stack Web Development and Network Administration</p>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Certificate in Data Entry and Analysis (STATA and SPSS)</h4>
                  <p className="text-blue-400 font-medium">KESAP Research Centre</p>
                  <p className="text-gray-400">2022 </p>
                  <p className="text-gray-300 mt-2">Specialized in Data Entry and Analysis</p>
                </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Certificate in Cloud and Network security</h4>
                  <p className="text-blue-400 font-medium">Cyber Shujaa</p>
                  <p className="text-gray-400">2025 </p>
                  <p className="text-gray-300 mt-2">Specialized in Cybersecurity</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Networking Basics, Introduction to Cyber Security, Digital Safety and Security Awareness, Introduction to Modern AI, Introduction to IOT and Digital Transformation & Industrial Networking Essentials</h4>
                  <p className="text-blue-400 font-medium">Cisco Certified Network Associate (CCNA)</p>
                  <p className="text-gray-400">2026 </p>
                  <p className="text-gray-300 mt-2">Cisco Certified</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">ICT Intern</h4>
                  <p className="text-blue-500 font-medium">State Department of Lands and Physical Planning</p>
                  <p className="text-gray-400">2025</p>
                  <p className="text-gray-300 mt-2">System Maintenance, Network Management, Technical Support, Data Management, System Security & Software Installation and Updates</p>
                </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">ICT Staff</h4>
                  <p className="text-blue-500 font-medium">State Department of Lands and Physical Planning</p>
                  <p className="text-gray-400">2026</p>
                  <p className="text-gray-300 mt-2">System Maintenance, Network Management, Technical Support, Data Management, System Security & Software Installation and Updates</p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
