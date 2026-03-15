import React from "react";
import { Dock } from "@/components/dock";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

const PROJECTS = [
  {
    title: "Tireni Needs",
    description: "Designed a full mobile UI including authentication screens, workout tracking screens, and dashboards. Currently developing backend structure, navigation flow, and API logic.",
    tags: ["React Native", "Expo", "Authentication"],
    githubUrl: "https://github.com/cknwamz",
  },
  {
    title: "To-Do List Application",
    description: "Implemented full CRUD features, persistent storage, and responsive UI for efficient task management.",
    tags: ["JavaScript", "Node.js", "CRUD"],
    githubUrl: "https://github.com/cknwamz",
  },
  {
    title: "Weather Dashboard",
    description: "Fetches and displays live weather data with dynamic UI updates using an external API.",
    tags: ["JavaScript", "Open Weather API"],
    githubUrl: "https://github.com/cknwamz",
  },
  {
    title: "Deepwoken Inventory System",
    description: "A specialized web inventory application built for in-game item management and tracking.",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://github.com/cknwamz",
  },
  {
    title: "Student Management System",
    description: "An Object-Oriented Programming (OOP) project developed using classes, inheritance, constructors, and file handling.",
    tags: ["C++", "OOP", "File Handling"],
    githubUrl: "https://github.com/cknwamz",
  },
  {
    title: "Basic ML Models",
    description: "Practiced linear regression, classification basics, and model evaluation utilizing Python frameworks.",
    tags: ["Python", "Machine Learning"],
    githubUrl: "https://github.com/cknwamz",
  },
  {
    title: "Aunty Ogay Snaps",
    description: "Photography business platform featuring automated session booking and customer detail management via the Resend API.",
    tags: ["Next.js", "Resend API", "Booking System"],
    // TODO: Update this to the actual GitHub or Live URL
    githubUrl: "https://github.com/cknwamz", 
  },
  {
    title: "Rave Plus Collections",
    description: "E-commerce platform for African clothing featuring Paystack payment integration and Instagram Professional API for automatic product catalogue syncing.",
    tags: ["E-commerce", "Paystack", "Instagram API"],
    // TODO: Update this to the actual GitHub or Live URL
    githubUrl: "https://github.com/cknwamz",
  },
  {
    title: "Coming Soon",
    description: "More advanced React and Full-Stack projects currently under development.",
    tags: ["React Native", "Mobile"],
    // TODO: Add liveUrl or githubUrl here when ready
  },
  {
    title: "Coming Soon",
    description: "More advanced React and Full-Stack projects currently under development.",
    tags: ["Backend", "AI"],
    // TODO: Add liveUrl or githubUrl here when ready
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[100px]" />
        
        {/* IDE Grid Overlay Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Hero Section */}
        <section
          id="about"
          className="min-h-[85vh] flex flex-col justify-center items-start pt-20"
        >
          {/* Terminal Prompt Header */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/10 border border-apple-glass-border font-mono text-sm backdrop-blur-md text-foreground/80">
            <span className="text-emerald-500">~/ck-nwamu</span>
            <span className="text-foreground/50">$</span>
            <span className="text-blue-500">./execute</span>
            <span>init_portfolio.sh</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50">
            I'm CK NWAMU.
          </h1>
          
          <div className="text-2xl md:text-3xl text-foreground/80 mb-6 font-light max-w-3xl">
            Aspiring Software Engineer skilled in C++, JavaScript, React Native, Linux, and AI fundamentals.
          </div>

          <div className="text-xl md:text-2xl text-foreground/60 mb-8 font-mono min-h-[4rem] sm:min-h-[3rem]">
            &gt;{" "}
            <Typewriter 
              words={["Software Engineering Intern", "Web Developer", "Mobile App Developer"]} 
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
            />
          </div>

          <p className="text-lg text-foreground/50 max-w-2xl leading-relaxed font-light mb-10">
            Seeking opportunities to contribute to impactful engineering teams while building professional experience and strong technical depth. I blend modern aesthetics with hardcore developer functionality to create fluid, scalable applications.
          </p>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Experience
            </h2>
            <p className="text-foreground/50 font-mono text-sm">## Professional Journey</p>
          </div>
          
          <ExperienceTimeline />
          <EducationSection />
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Selected Works
            </h2>
            <p className="text-foreground/50 font-mono text-sm">[{PROJECTS.length} items found in /projects]</p>
          </div>
          
          {/* Updated grid to handle more projects gracefully (3 columns on large screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>

      <Dock />
    </main>
  );
}
