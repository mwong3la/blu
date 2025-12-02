"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Users,
  Globe,
  Gamepad2,
  ExternalLink,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "xmobit",
    name: "Xmobit",
    tagline: "Buy/Sell Crypto in Africa",
    icon: Layers,
    tags: ["Web", "Crypto Platform", "Full-Stack", "Payments Integration"],
    url: "https://xmobit.com/",
    overview:
      "Xmobit is Africa’s leading cryptocurrency marketplace, making it easy, secure, and fast for users across the continent to buy and sell Bitcoin and Monero using local payment methods like M-Pesa and MTN Mobile Money.",
    responsibilities: [
      "Designed and implemented core trading platform features (buy/sell, wallet management, escrow system)",
      "Integrated local African payment systems for seamless transactions",
      "Built dispute resolution workflows for secure trading",
      "Ensured end-to-end encryption and secure 256-bit SSL communication",
      "Developed user onboarding and verification system",
    ],
    outcomes: [
      "Onboarded over 32,000 users across multiple African countries",
      "Enabled secure and fast cryptocurrency transactions without relying on traditional banks",
      "Built trust in crypto trading via dispute management and strong ID checks",
      "Created a scalable platform ready for future expansion across Africa",
    ],
    color: "from-primary/20 to-secondary/20",
  },
  {
    id: "octacom",
    name: "Octacom",
    tagline: "AI-Powered Communications Platform",
    icon: Users,
    tags: ["Web", "AI", "Customer Support", "Full-Stack"],
    url: "https://octocom.ai/",
    overview:
      "Octacom is an AI-driven communications platform designed to automate customer support and internal messaging, helping teams resolve issues faster and improve productivity.",
    responsibilities: [
      "Built real-time messaging infrastructure with WebSockets",
      "Integrated AI-powered summarization and auto-reply for customer support",
      "Designed dashboard for analytics and workflow management",
      "Implemented user authentication, role-based access, and data security",
      "Coordinated deployment pipelines for high-availability SaaS",
    ],
    outcomes: [
      "Reduced customer response time through AI automation",
      "Improved team productivity and communication efficiency",
      "Delivered insights and metrics to support operational decisions",
      "Built a scalable platform capable of handling thousands of simultaneous users",
    ],
    color: "from-primary/20 to-secondary/20",
  },
];

export function PortfolioPageContent() {
  const [activeProject, setActiveProject] = useState("xmobit");
  const project = projects.find((p) => p.id === activeProject)!;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="text-primary">✨</span>
              <span className="text-sm text-muted-foreground">
                Selected Works
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Four Projects. Four Domains.{" "}
              <span className="gradient-text">One Team.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From mobile applications to full SaaS systems — explore our work
              across wellness, community, gaming, and property management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Selector */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setActiveProject(p.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "glass-card p-6 text-left transition-all",
                  activeProject === p.id
                    ? "border-primary bg-card"
                    : "hover:border-muted-foreground/30"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    activeProject === p.id ? "bg-primary/20" : "bg-muted"
                  )}
                >
                  <p.icon
                    className={cn(
                      "w-6 h-6",
                      activeProject === p.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  />
                </div>
                <h3
                  className={cn(
                    "font-semibold mb-1",
                    activeProject === p.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {p.name}
                </h3>
                <p className="text-muted-foreground text-sm">{p.tagline}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn("rounded-2xl p-8 bg-gradient-to-br", project.color)}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {project.name}
                  </h2>
                  <p className="text-muted-foreground">{project.tagline}</p>
                </div>
              </div>
              {project.url && (
                <Button variant="heroOutline" asChild>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="glass-card p-6 mb-6">
              <h3 className="text-foreground font-semibold mb-3">Overview</h3>
              <p className="text-muted-foreground">{project.overview}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-foreground font-semibold mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {project.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-foreground font-semibold mb-4">
                  Impact & Outcomes
                </h3>
                <ul className="space-y-3">
                  {project.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
