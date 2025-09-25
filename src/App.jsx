import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <header className="max-w-5xl mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Alger Da Costa</h1>
        <p className="text-lg text-gray-600">Software Engineer | MSc Computer Science @ Bath</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Alger2829" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:algerdacosta02@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/algerdacosta" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* About Me */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a passionate software engineer with experience in Android development, web technologies, and 
          research in homomorphic encryption. Currently pursuing an MSc in Computer Science at the University 
          of Bath, I enjoy building scalable, user-friendly applications and exploring network security.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Homomorphic Encryption Research</h3>
              <p className="text-gray-700 mb-4">
                Implemented techniques for secure voting, encrypted queries, and biometric authentication using
                Microsoft SEAL and TenSEAL.
              </p>
              <Button asChild>
                <a href="https://github.com/your-username/homomorphic-encryption">View Project</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Inside Immune (Game)</h3>
              <p className="text-gray-700 mb-4">
                Educational game built with Python and PyGame to teach biological immune responses. Developed in
                a Scrum team with version control via Git.
              </p>
              <Button asChild>
                <a href="https://github.com/your-username/inside-immune">View Project</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">Tangentia India Technologies</h3>
              <p className="text-gray-600">Project Intern | Jun 2024 – Sep 2024</p>
              <p className="text-gray-700 mt-2">
                Assisted onboarding for the Liquor Control Board of Ontario’s grocery management site, resolving
                client issues and delivering high-quality support.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">Nexocide Pvt. Ltd</h3>
              <p className="text-gray-600">Software Engineering Intern | Jul 2023 – Sep 2023</p>
              <p className="text-gray-700 mt-2">
                Built Android apps using Java/Kotlin with Firebase integration, optimizing UI/UX with RecyclerViews
                and XML layouts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <li>Python</li>
          <li>Java / Kotlin</li>
          <li>C / C++</li>
          <li>JavaScript / TypeScript</li>
          <li>React / Tailwind</li>
          <li>Django / Flask</li>
          <li>MySQL / MongoDB</li>
          <li>AWS</li>
          <li>Git / GitHub</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t">
        <p>© {new Date().getFullYear()} Alger Da Costa. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
