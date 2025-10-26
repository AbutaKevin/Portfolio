
import { File, ArrowDown } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    console.log("Downloading resume...");
    // You would typically link to a PDF file in the public folder
    const link = document.createElement('a');
     link.href = '/resume.pdf';
     link.download = 'Abuta_Kevin_Resume.pdf';
     link.click();
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, education, and achievements
          </p>
        </div>

        <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Resume Preview */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                  <File className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Professional Resume</h3>
                  <p className="text-gray-400">Updated December 2025</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-600/30 rounded-lg">
                  <span className="text-white font-medium">Format</span>
                  <span className="text-blue-400">PDF</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-600/30 rounded-lg">
                  <span className="text-white font-medium">Size</span>
                  <span className="text-blue-400">2.1 MB</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-600/30 rounded-lg">
                  <span className="text-white font-medium">Pages</span>
                  <span className="text-blue-400">2</span>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-32 h-40 bg-slate-600/50 rounded-lg mx-auto flex items-center justify-center relative overflow-hidden">
                  <File className="w-16 h-16 text-gray-400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Abuta Kevin</h4>
                <p className="text-gray-400 mb-6">Applied Computer Science Graduate</p>
                
                <button
                  onClick={handleDownload}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                >
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="mt-12 pt-8 border-t border-slate-600/50">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">Resume Highlights</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-400 font-bold text-lg">3.8</span>
                </div>
                <h5 className="text-white font-medium mb-1">GPA</h5>
                <p className="text-gray-400 text-sm">Applied Computer Science Degree</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-500 font-bold text-lg">15+</span>
                </div>
                <h5 className="text-white font-medium mb-1">Projects</h5>
                <p className="text-gray-400 text-sm">Academic & Personal</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-400 font-bold text-lg">5+</span>
                </div>
                <h5 className="text-white font-medium mb-1">Technologies</h5>
                <p className="text-gray-400 text-sm">Programming Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
