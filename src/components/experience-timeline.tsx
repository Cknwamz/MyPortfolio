"use client";

import React from "react";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "INITS limited",
    role: "Software Engineering Intern",
    period: "Current",
    description: [
      "Assisting in the development and optimization of web applications and robust digital solutions.",
      "Collaborating seamlessly with the engineering team to write clean, maintainable code.",
      "Participating in agile workflows and applying software engineering best practices.",
    ],
  },
  {
    company: "Idaho Springs, Colorado, USA",
    role: "Cultural Exchange Participant",
    period: "Summer 2025",
    description: [
      "Selected for an international work-and-study program, gaining global exposure and independent living experience.",
      "Strengthened communication, teamwork, and problem-solving skills in a multicultural work environment.",
      "Developed adaptability and customer interaction skills through service-based roles.",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <div className="relative border-l border-apple-glass-border/50 ml-3 md:ml-0 md:border-none space-y-12">
      {/* For desktop, we can use a centered timeline. For simplicity and cleanliness, we use left-aligned. */}
      {EXPERIENCES.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-0"
        >
          {/* Timeline Node */}
          <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-blue-500 ring-4 ring-background md:hidden" />

          <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
            <div className="md:col-span-1 mb-2 md:mb-0 md:text-right pt-1">
              <span className="text-sm font-mono text-foreground/50 tracking-wider">
                {exp.period}
              </span>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
              <h4 className="text-blue-500 font-medium mb-4">{exp.company}</h4>
              <ul className="space-y-2 text-foreground/70 text-sm leading-relaxed">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-500 font-mono mt-0.5">{`>`}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
