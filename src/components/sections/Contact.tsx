import { useState } from "react";
import {
  Mail,
  User,
  Pen,
  ArrowUp,
  Linkedin,
  Facebook,
  Twitter,
  MessageCircleMore,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      "service_p5ks92n",     // replace with your actual service ID
      "template_q49y6cs",    // replace with your email template ID
      formData,
      "5tknPjIGVoIZmuplE"      // replace with your public API key from EmailJS
    );

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Failed to send message. Please try again later.",
    });
    console.error(error);
  }

  setIsSubmitting(false);
};


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities, collaborations, and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">abutakevin254@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-400">https://www.linkedin.com/in/kevin-abuta-38a77029a</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Pen className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-400">https://github.com/AbutaKevin</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
 <div className="pt-6">
  <h4 className="text-white font-semibold mb-4">Follow Me</h4>
  <div className="flex gap-4">
    <a
      href="https://wa.me/254758819156"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-green-400 hover:text-white hover:bg-green-500/20 transition-all duration-300"
    >
      <MessageCircleMore className="w-5 h-5" />
    </a>

    <a
      href="https://www.linkedin.com/in/kevin-abuta-38a77029a"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
    >
      <Linkedin className="w-5 h-5" />
    </a>

    <a
      href="https://x.com/AbutaKevin?t=fbdjWDe3sE3JSSGakE3AyA&s=08"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
    >
      <Twitter className="w-5 h-5" />
    </a>

    <a
      href="https://www.facebook.com/share/16eSvirmig/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-blue-600 hover:text-white hover:bg-blue-600/20 transition-all duration-300"
    >
      <Facebook className="w-5 h-5" />
    </a>
  </div>
</div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToTop}
            className="group p-4 bg-slate-700/50 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-600/50">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 Abuta Kevin. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;