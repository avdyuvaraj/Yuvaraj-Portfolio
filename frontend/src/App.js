import React from 'react';
import './App.css';

const App = () => {
  const skills = [
    {
      title: "Programming Languages",
      technologies: ["Python", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Web Development",
      technologies: ["React", "Node.js", "Express", "REST APIs"]
    },
    {
      title: "Emerging Technologies",
      technologies: ["Machine Learning", "Artificial Intelligence", "Deep Learning", "Blockchain"]
    },
    {
      title: "Database & Cloud",
      technologies: ["DBMS", "SQL", "Cloud Fundamentals", "AWS Basics"]
    },
    {
      title: "Tools & Technologies",
      technologies: ["Git", "GitHub", "VS Code", "TensorFlow"]
    },
    {
      title: "Computer Science Fundamentals",
      technologies: ["Data Structures", "Algorithms", "Computer Networks", "Software Engineering"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Vehicle Hub Website",
      description: "Full-stack web application for vehicle management and services",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      githubLink: "https://github.com/avdyuvaraj",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "ASL Recognition using TensorFlow",
      description: "Machine learning project for American Sign Language recognition",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTA0MTIzOTJ8MA&ixlib=rb-4.1.0&q=85",
      githubLink: "https://github.com/avdyuvaraj",
      technologies: ["Python", "TensorFlow", "Computer Vision"]
    },
    {
      id: 3,
      title: "Fibonacci & Grade Tracker (CodeAlpha)",
      description: "Educational tools developed during internship at CodeAlpha",
      image: "https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg",
      githubLink: "https://github.com/avdyuvaraj",
      technologies: ["Python", "Algorithm Implementation"]
    }
  ];

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Code Alpha",
      duration: "Jan 2025 – Mar 2025",
      description: "Developed practical software solutions and gained hands-on experience in full-stack development."
    },
    {
      title: "Research Assistant",
      company: "Atria Institute of Technology",
      duration: "Oct 2024 – Present",
      description: "Assisting in research projects and contributing to innovative technology solutions."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-400">Yuvaraj M</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-orange-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-orange-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-orange-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              I'm <span className="text-orange-400">Yuvaraj</span>,
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-400 mb-6">
              Software Developer & CS Student
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Passionate B.E. CSE student at Atria Institute of Technology, focused on developing innovative software solutions 
            and applying practical skills gained from real-world projects and internships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Connect with me
            </button>
            <a 
              href="#" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              My Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A passionate Computer Science student who believes in building with purpose. As a third-year B.E. CSE student 
                at Atria Institute of Technology, I'm driven by curiosity and the excitement of solving complex problems.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My journey includes hands-on experience through internships and research projects, where I've developed 
                practical skills in software development, machine learning, and emerging technologies.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-orange-400 font-bold text-2xl">7.9</div>
                  <div className="text-gray-300">CGPA</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-purple-400 font-bold text-2xl">3+</div>
                  <div className="text-gray-300">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-orange-400 font-bold text-2xl">6+</div>
                  <div className="text-gray-300">Skills Areas</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-purple-400 font-bold text-2xl">2</div>
                  <div className="text-gray-300">Internships</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Experience</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-orange-400 mb-2">{exp.title}</h4>
                  <div className="text-purple-400 font-medium mb-2">{exp.company}</div>
                  <div className="text-gray-400 text-sm mb-3">{exp.duration}</div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">{skill.title}</h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-purple-600 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            I'm currently open to exciting opportunities, internships, or collaborations. Whether it's a project idea, 
            a chance to work together, or just a tech chat — feel free to reach out anytime!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-orange-400 text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:myuvaraj069@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                myuvaraj069@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-purple-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+919353528885" className="text-gray-300 hover:text-purple-400 transition-colors">
                +91 9353528885
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-orange-400 text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Bangalore, Karnataka</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/yuvaraj-m-159a70218"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/avdyuvaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-800 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400">
            © 2025 Yuvaraj M. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;