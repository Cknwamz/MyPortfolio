"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl bg-black/5 dark:bg-white/5 border border-apple-glass-border p-6 overflow-hidden mt-12"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-apple-glass-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
        </div>
        <span className="ml-2 text-xs font-mono text-foreground/50">education.sh</span>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
          <GraduationCap className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            BSc. Software Engineering
          </h3>
          <p className="text-emerald-500 font-mono text-sm mt-1 mb-2">
            const status = "3rd Year Undergrad"; // Exp. 2027
          </p>
          <div className="text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <span className="font-semibold block mb-1 text-foreground">Babcock University, Nigeria</span>
            <p className="mb-2">Developing a comprehensive foundation in modern software architecture and engineering practices.</p>
            <span className="text-xs font-mono text-foreground/50">
              <span className="text-blue-400">Relevant Coursework:</span> Data Structures, Web Development, Computer Networks, Database Systems, Intro to Machine Learning, Differential Equations, Introduction to AI.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
