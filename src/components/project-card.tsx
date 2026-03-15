"use client";

import React from "react";
import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-white/60 dark:bg-black/50 backdrop-blur-xl border border-apple-glass-border shadow-lg",
        "p-6 h-full",
        className
      )}
    >
      {/* macOS Window dots aesthetic */}
      <div className="flex gap-1.5 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <Folder className="w-10 h-10 text-foreground/70" />
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 tracking-tight">{title}</h3>
        <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-foreground/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
