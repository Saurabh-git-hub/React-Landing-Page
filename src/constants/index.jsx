import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";


export const navItems = [
  { label: "Features", href: "#features-section" },
  { label: "Workflow", href: "#workflow-section" },
  { label: "Pricing", href: "#pricing-section" },
  { label: "Testimonials", href: "#testimonials-section" },
];

export const testimonials = [
  {
    text: "CodeFlow has revolutionized our development process-mart features and smooth integration greatly boosted productivity.",
    user: "Sarah Chen",
    company: "Tech Lead at CloudScale",
    image: user3
  },
  {
    text: "The collaborative features and real-time debugging capabilities have made our remote development workflow smoother than ever before.",
    user: "Marcus Rodriguez",
    company: "Sr. Developer at DevForge",
    image: user5
  },
  {
    text: "As a full-stack developer, having all my tools integrated in one platform has been a game-changer. CodeFlow is now an essential part of our tech stack.",
    user: "Emma Thompson",
    company: "CTO at NextGen Solutions",
    image: user1
  }
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Smart Code Editor",
    description:
      "Intelligent code completion and syntax highlighting with advanced editing features.",
  },
  {
    icon: <Fingerprint />,
    text: "Cross-Platform Development",
    description:
      "Write code once and deploy across multiple platforms with native performance.",
  },
  {
    icon: <ShieldHalf />,
    text: "Code Templates",
    description:
      "Start quickly with industry-standard templates and best practices built-in.",
  },
  {
    icon: <BatteryCharging />,
    text: "Live Preview",
    description:
      "See your changes instantly with hot-reload and real-time preview capabilities.",
  },
  {
    icon: <PlugZap />,
    text: "Team Collaboration",
    description:
      "Built-in version control and real-time collaboration features for seamless teamwork.",
  },
  {
    icon: <GlobeLock />,
    text: "Performance Metrics",
    description:
      "Monitor your application's performance with integrated debugging and profiling tools.",
  },
];

export const checklistItems = [
  {
    title: "Smart Version Control",
    description: "Seamlessly manage your code versions with built-in Git integration.",
  },
  {
    title: "Code Review Tools",
    description: "Streamline your review process with integrated diff tools and comments.",
  },
  {
    title: "AI-Powered Development",
    description: "Leverage AI to write better code and identify potential issues early.",
  },
  {
    title: "Instant Deployment",
    description: "Deploy your applications with one click to your preferred platform.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Basic Code Editor Access",
      "3 Development Projects",
      "Community Templates Library",
      "Basic Git Integration",
      "Standard Build Tools",
    ],
  },
  {
    title: "Pro",
    price: "$29",
    features: [
      "Advanced IDE Features",
      "Unlimited Projects",
      "Custom Code Snippets",
      "CI/CD Pipeline Integration",
      "Priority Code Reviews",
    ],
  },
  {
    title: "Enterprise",
    price: "$299",
    features: [
      "Custom Development Environment",
      "Advanced Security Controls",
      "Dedicated API Gateway",
      "Enterprise Build Agents",
      "24/7 DevOps Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Quick Start Guide" },
  { href: "#", text: "Developer Docs" },
  { href: "#", text: "Code Examples" },
  { href: "#", text: "SDK Reference" },
  { href: "#", text: "Knowledge Base" },
];

export const platformLinks = [
  { href: "#", text: "Core Features" },
  { href: "#", text: "Platform Status" },
  { href: "#", text: "Tech Specs" },
  { href: "#", text: "Installation" },
  { href: "#", text: "Change Log" },
];

export const communityLinks = [
  { href: "#", text: "Developer Hub" },
  { href: "#", text: "Local Groups" },
  { href: "#", text: "Tech Talks" },
  { href: "#", text: "Code Challenges" },
  { href: "#", text: "Career Board" },
];
