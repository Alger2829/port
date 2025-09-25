import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-slate-800 p-6">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-slate-600/90 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-slate-700 hover:scale-110 z-50 backdrop-blur-sm ${
          scrollY > 400 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Header */}
      <header className={`max-w-5xl mx-auto py-10 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-4xl font-bold mb-2 text-slate-800">
          Alger Da Costa
        </h1>
        <p className="text-lg text-slate-600">Software Engineer | MSc Computer Science @ University Of Bath</p>
        <div className="flex justify-center gap-4 mt-4">
          {[
            { icon: Github, href: "https://github.com/Alger2829", color: "hover:text-slate-900" },
            { icon: Mail, href: "mailto:algerdacosta02@gmail.com", color: "hover:text-slate-700" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/algerdacosta", color: "hover:text-slate-700" }
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 ${color} border border-slate-200/50`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </header>

      {/* About Me */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">About Me</h2>
        <div className={`bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm transition-all duration-700 hover:shadow-md border border-slate-200/50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-slate-700 leading-relaxed">
            I am a passionate software engineer with experience in Android development, web technologies, and 
            research in homomorphic encryption. Currently pursuing an MSc in Computer Science at the University 
            of Bath, I enjoy building scalable, user-friendly applications and exploring network security.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-700">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Homomorphic Encryption Research",
              description: "Implemented techniques for secure voting, encrypted queries, and biometric authentication using Microsoft SEAL and TenSEAL.",
              link: "https://github.com/your-username/homomorphic-encryption",
              accent: "border-l-4 border-l-slate-400"
            },
            {
              title: "Inside Immune (Game)",
              description: "Educational game built with Python and PyGame to teach biological immune responses. Developed in a Scrum team with version control via Git.",
              link: "https://github.com/your-username/inside-immune",
              accent: "border-l-4 border-l-slate-400"
            },
            {
              title: "Contactless Touch Interaction",
              description: "Developed a Leap Motion–based system for contactless display interaction, focusing on real-time gesture recognition and probabilistic algorithms to improve touch intent detection. The project enhances user experience by enabling precise and hygienic touchless control of digital interfaces.",
              link: "https://github.com/your-username/contactless-display",
              accent: "border-l-4 border-l-slate-400"
            }
          ].map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="shadow-sm border-slate-200/60 overflow-hidden group cursor-pointer bg-white/60 backdrop-blur-sm">
                <CardContent className={`p-6 ${project.accent}`}>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Button asChild className="bg-slate-700 hover:bg-slate-800 transition-all duration-300 text-white">
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-700">Experience</h2>
        <div className="space-y-6">
          {[
            {
              company: "Tangentia India Technologies",
              role: "Project Intern",
              period: "Jun 2024 – Sep 2024",
              description: "Assisted onboarding for the Liquor Control Board of Ontario's grocery management site, resolving client issues and delivering high-quality support."
            },
            {
              company: "Nexocide Pvt. Ltd",
              role: "Software Engineering Intern",
              period: "Jul 2023 – Sep 2023",
              description: "Built Android apps using Java/Kotlin with Firebase integration, optimizing UI/UX with RecyclerViews and XML layouts."
            }
          ].map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="shadow-sm border-slate-200/60 hover:shadow-md transition-all duration-300 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6 border-l-4 border-l-slate-400">
                  <h3 className="text-lg font-bold text-slate-800">{exp.company}</h3>
                  <p className="text-slate-600 font-medium">{exp.role} | {exp.period}</p>
                  <p className="text-slate-700 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">Skills</h2>
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {[
            "Python", "Java / Kotlin", "C / C++", "JavaScript / TypeScript", 
            "React / Tailwind", "Django / Flask", "MySQL / MongoDB", "AWS", "Git / GitHub"
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-3 text-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default border border-slate-200/50"
            >
              <span className="font-medium text-slate-700">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 py-6 border-t border-slate-200/30">
        <p className="transition-all duration-300 hover:text-slate-600">
          © {new Date().getFullYear()} Alger Da Costa. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
