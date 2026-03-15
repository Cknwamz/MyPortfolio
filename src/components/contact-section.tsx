"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT_METHODS = [
  {
    name: "Email",
    value: "cknwamu@gmail.com",
    href: "mailto:cknwamu@gmail.com",
    icon: Mail,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "iMessage",
    value: "cknwamu@gmail.com",
    href: "sms:cknwamu@gmail.com", // Simple fallback, users on Mac will open Messages
    icon: MessageCircle,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    name: "WhatsApp",
    value: "+234 904 413 2641",
    href: "https://wa.me/2349044132641",
    icon: Phone,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Instagram",
    value: "@heisck_",
    href: "https://instagram.com/heisck_",
    icon: Instagram,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Let's Connect
        </h2>
        <p className="text-foreground/50 font-mono text-sm">## contact_info.sh</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONTACT_METHODS.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.name !== "Email" && method.name !== "iMessage" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-apple-glass-border shadow-sm hover:shadow-md transition-all group"
            >
              <div className={cn("p-4 rounded-xl transition-colors", method.bg, method.color)}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/50 mb-1">{method.name}</h3>
                <p className="text-lg font-mono tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
                  {method.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
