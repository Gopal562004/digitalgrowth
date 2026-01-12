export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  duration: string;
  technologies: string[];
  results: { value: string; label: string }[];
  color: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Organic Food Marketplace",
    client: "GreenHarvest Co.",
    category: "ecommerce",
    description:
      "A complete e-commerce platform for organic food delivery with inventory management and payment integration.",
    duration: "3 months",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    results: [
      { value: "40%", label: "Sales Increase" },
      { value: "5k+", label: "Monthly Users" },
      { value: "4.8", label: "App Rating" },
    ],
    color: "#10b981",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Fitness App & Dashboard",
    client: "FitLife Gym",
    category: "website",
    description:
      "A comprehensive fitness tracking application with workout plans and progress analytics.",
    duration: "2 months",
    technologies: ["Next.js", "TypeScript", "Firebase", "Chart.js"],
    results: [
      { value: "60%", label: "User Growth" },
      { value: "95%", label: "Retention" },
      { value: "2.5s", label: "Load Time" },
    ],
    color: "#3b82f6",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "SEO Optimization Campaign",
    client: "Local Restaurant Chain",
    category: "seo",
    description:
      "Complete SEO overhaul resulting in first-page rankings for 15+ competitive keywords.",
    duration: "Ongoing",
    technologies: ["Google Analytics", "Search Console", "Ahrefs", "SEMrush"],
    results: [
      { value: "300%", label: "Traffic Growth" },
      { value: "15+", label: "Page 1 Rankings" },
      { value: "45%", label: "Conversion Rate" },
    ],
    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    client: "UrbanLiving Properties",
    category: "website",
    description:
      "Modern property listing platform with virtual tours and AI-powered recommendations.",
    duration: "4 months",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Mapbox"],
    results: [
      { value: "2M+", label: "Monthly Visits" },
      { value: "50%", label: "Lead Increase" },
      { value: "99.9%", label: "Uptime" },
    ],
    color: "#f59e0b",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Brand Identity Redesign",
    client: "TechStart Inc.",
    category: "branding",
    description:
      "Complete brand overhaul including logo, website, and marketing materials.",
    duration: "6 weeks",
    technologies: ["Figma", "Adobe Suite", "Webflow", "Mailchimp"],
    results: [
      { value: "70%", label: "Brand Recognition" },
      { value: "25%", label: "Engagement" },
      { value: "120%", label: "Social Growth" },
    ],
    color: "#ec4899",
  },
  {
    id: 6,
    title: "Healthcare Portal",
    client: "MediCare Group",
    category: "website",
    description:
      "Secure patient portal with appointment scheduling and telemedicine features.",
    duration: "5 months",
    technologies: ["React Native", "Node.js", "MongoDB", "Twilio"],
    results: [
      { value: "80%", label: "Patient Adoption" },
      { value: "50%", label: "Admin Time Saved" },
      { value: "HIPAA", label: "Compliant" },
    ],
    color: "#06b6d4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
