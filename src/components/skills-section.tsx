"use client";

import React from "react";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "HTML", "CSS", "PHP"],
    color: "text-blue-400",
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "React Native", "MERN Stack"],
    color: "text-emerald-400",
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "MongoDB", "AtlasDB", "Supabase", "Firebase"],
    color: "text-purple-400",
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "CodeRabbit", "Antigravity", "Pinterest"],
    color: "text-orange-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300 } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Skills & Tech Stack
        </h2>
        <p className="text-foreground/50 font-mono text-sm">## system_specs.json</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden bg-[#1e1e1e] dark:bg-black/80 border border-apple-glass-border shadow-2xl"
      >
        {/* IDE Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] dark:bg-white/5 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs font-mono text-white/50 px-4">
            ck_nwamu_tools.config.js
          </div>
          <div className="w-12" /> {/* Spacer for centering */}
        </div>

        {/* IDE Content */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base text-gray-300">
          <div className="mb-4">
            <span className="text-pink-400">const</span> <span className="text-blue-300">techStack</span> <span className="text-pink-400">=</span> {"{"}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="pl-6 md:pl-8 space-y-6"
          >
            {SKILL_GROUPS.map((group, index) => (
              <div key={group.category} className="group">
                <div className="mb-3">
                  <span className="text-blue-300">"{group.category}"</span><span className="text-gray-400">: [</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-4 md:pl-6">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default ${group.color}`}
                    >
                      "{skill}"{skillIndex < group.skills.length - 1 ? <span className="text-gray-400">,</span> : ""}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-3 text-gray-400">
                  ]{index < SKILL_GROUPS.length - 1 ? "," : ""}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="mt-4">
            {"}"};
          </div>
        </div>
      </motion.div>
    </section>
  );
}
