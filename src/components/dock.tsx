"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { name: "About", id: "about", icon: User },
  { name: "Projects", id: "projects", icon: Briefcase },
  { name: "GitHub", url: "https://github.com/cknwamz", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ck-codes", icon: Linkedin },
  { name: "Contact", id: "contact", icon: Mail },
];

const playChimeSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const audioCtx = new AudioContextClass();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    // Create a pleasant, soft chime sound
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    console.error("Audio playback stopped or failed", e);
  }
};

export function Dock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        onClickCapture={playChimeSound}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center gap-2 p-2 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-apple-glass-border shadow-2xl"
      >
        {NAV_ITEMS.map((item) => (
          <DockItem key={item.name} item={item} />
        ))}
        <div className="w-[1px] h-8 bg-black/10 dark:bg-white/10 mx-1" />
        <ThemeToggle />
      </motion.nav>
    </div>
  );
}

function DockItem({ item }: { item: typeof NAV_ITEMS[0] }) {
  const Icon = item.icon;

  // Native anchor behavior for # links is smoother and more reliable in Next.js App Router
  const props = item.url
    ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
    : { href: `#${item.id}` };

  return (
    <motion.div
      whileHover={{ scale: 1.2, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="relative group flex items-center justify-center p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    >
      <a {...props} className="text-foreground/80 hover:text-foreground">
        <Icon className="w-6 h-6" />
        <span className="sr-only">{item.name}</span>
      </a>
      
      {/* Tooltip */}
      <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs px-2 py-1 rounded-md mb-2 pointer-events-none whitespace-nowrap">
        {item.name}
      </span>
    </motion.div>
  );
}
