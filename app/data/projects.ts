// export interface Project {
//   id: number;
//   title: string;
//   client: string;
//   category: string;
//   description: string;
//   duration: string;
//   technologies: string[];
//   results: { value: string; label: string }[];
//   color: string;
//   liveUrl?: string;
//   githubUrl?: string;
// }

// // export const projects: Project[] = [
// //   {
// //     id: 1,
// //     title: "Organic Food Marketplace",
// //     client: "GreenHarvest Co.",
// //     category: "ecommerce",
// //     description:
// //       "A complete e-commerce platform for organic food delivery with inventory management and payment integration.",
// //     duration: "3 months",
// //     technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
// //     results: [
// //       { value: "40%", label: "Sales Increase" },
// //       { value: "5k+", label: "Monthly Users" },
// //       { value: "4.8", label: "App Rating" },
// //     ],
// //     color: "#10b981",
// //     liveUrl: "https://example.com",
// //     githubUrl: "https://github.com",
// //   },
// //   {
// //     id: 2,
// //     title: "Fitness App & Dashboard",
// //     client: "FitLife Gym",
// //     category: "website",
// //     description:
// //       "A comprehensive fitness tracking application with workout plans and progress analytics.",
// //     duration: "2 months",
// //     technologies: ["Next.js", "TypeScript", "Firebase", "Chart.js"],
// //     results: [
// //       { value: "60%", label: "User Growth" },
// //       { value: "95%", label: "Retention" },
// //       { value: "2.5s", label: "Load Time" },
// //     ],
// //     color: "#3b82f6",
// //     liveUrl: "https://example.com",
// //   },
// //   {
// //     id: 3,
// //     title: "SEO Optimization Campaign",
// //     client: "Local Restaurant Chain",
// //     category: "seo",
// //     description:
// //       "Complete SEO overhaul resulting in first-page rankings for 15+ competitive keywords.",
// //     duration: "Ongoing",
// //     technologies: ["Google Analytics", "Search Console", "Ahrefs", "SEMrush"],
// //     results: [
// //       { value: "300%", label: "Traffic Growth" },
// //       { value: "15+", label: "Page 1 Rankings" },
// //       { value: "45%", label: "Conversion Rate" },
// //     ],
// //     color: "#8b5cf6",
// //   },
// //   {
// //     id: 4,
// //     title: "Real Estate Platform",
// //     client: "UrbanLiving Properties",
// //     category: "website",
// //     description:
// //       "Modern property listing platform with virtual tours and AI-powered recommendations.",
// //     duration: "4 months",
// //     technologies: ["Vue.js", "Python", "PostgreSQL", "Mapbox"],
// //     results: [
// //       { value: "2M+", label: "Monthly Visits" },
// //       { value: "50%", label: "Lead Increase" },
// //       { value: "99.9%", label: "Uptime" },
// //     ],
// //     color: "#f59e0b",
// //     liveUrl: "https://example.com",
// //   },
// //   {
// //     id: 5,
// //     title: "Brand Identity Redesign",
// //     client: "TechStart Inc.",
// //     category: "branding",
// //     description:
// //       "Complete brand overhaul including logo, website, and marketing materials.",
// //     duration: "6 weeks",
// //     technologies: ["Figma", "Adobe Suite", "Webflow", "Mailchimp"],
// //     results: [
// //       { value: "70%", label: "Brand Recognition" },
// //       { value: "25%", label: "Engagement" },
// //       { value: "120%", label: "Social Growth" },
// //     ],
// //     color: "#ec4899",
// //   },
// //   {
// //     id: 6,
// //     title: "Healthcare Portal",
// //     client: "MediCare Group",
// //     category: "website",
// //     description:
// //       "Secure patient portal with appointment scheduling and telemedicine features.",
// //     duration: "5 months",
// //     technologies: ["React Native", "Node.js", "MongoDB", "Twilio"],
// //     results: [
// //       { value: "80%", label: "Patient Adoption" },
// //       { value: "50%", label: "Admin Time Saved" },
// //       { value: "HIPAA", label: "Compliant" },
// //     ],
// //     color: "#06b6d4",
// //     liveUrl: "https://example.com",
// //     githubUrl: "https://github.com",
// //   },
// // ];
// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "Gradify – AI Career Coach",
//     client: "Gradify (Startup Project)",
//     category: "website",
//     description:
//       "An AI-powered career guidance platform helping students discover career paths, analyze skills, and receive personalized learning roadmaps.",
//     duration: "Ongoing",
//     technologies: ["Next.js", "TypeScript", "Gemini AI", "Tailwind CSS"],
//     results: [
//       { value: "AI-powered", label: "Career guidance" },
//       { value: "Personalized", label: "Roadmaps & insights" },
//       { value: "Scalable", label: "Modern web architecture" },
//     ],
//     color: "#3b82f6",
//     liveUrl: "https://update-gradify-ai-carrer-coach.vercel.app/",
//   },
//   {
//     id: 2,
//     title: "Zudio – E-commerce Clothing Store",
//     client: "Zudio (Demo E-commerce)",
//     category: "ecommerce",
//     description:
//       "A full-stack e-commerce platform for clothing with product browsing, cart, and secure checkout experience.",
//     duration: "2 months",
//     technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
//     results: [
//       { value: "End-to-end", label: "E-commerce flow" },
//       { value: "Secure", label: "Checkout & auth" },
//       { value: "Responsive", label: "Mobile-first UI" },
//     ],
//     color: "#10b981",
//     liveUrl: "https://zudio-seven.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Sangam – Alumni Management Platform",
//     client: "Educational Institution",
//     category: "website",
//     description:
//       "A centralized alumni management system for institutions to manage profiles, events, and alumni engagement.",
//     duration: "3 months",
//     technologies: ["React", "Node.js", "MongoDB", "Express"],
//     results: [
//       { value: "Centralized", label: "Alumni data" },
//       { value: "Role-based", label: "Access control" },
//       { value: "Scalable", label: "Backend design" },
//     ],
//     color: "#6366f1",
//     liveUrl: "https://clean-sangam.vercel.app/alumni",
//   },
//   {
//     id: 4,
//     title: "AgriSmart – AI Agriculture Assistant",
//     client: "Academic / Research Project",
//     category: "website",
//     description:
//       "An AI-based agriculture assistant providing crop recommendations, weather insights, and soil health analysis.",
//     duration: "6 weeks",
//     technologies: ["Python", "Streamlit", "Machine Learning"],
//     results: [
//       { value: "AI-driven", label: "Crop insights" },
//       { value: "Data-based", label: "Recommendations" },
//       { value: "Interactive", label: "Dashboards" },
//     ],
//     color: "#22c55e",
//     liveUrl:
//       "https://agrivision-focus-on-crop-monitoring-and-weather-forecasting-bm.streamlit.app/",
//   },
//   {
//     id: 5,
//     title: "Makaan4U – Property Finder Platform",
//     client: "Makaan4U (Startup Project)",
//     category: "website",
//     description:
//       "A real estate platform enabling users to search, list, and manage rental and sale properties with dynamic filters.",
//     duration: "2 months",
//     technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
//     results: [
//       { value: "Location-based", label: "Property search" },
//       { value: "Secure", label: "User authentication" },
//       { value: "Dynamic", label: "Filtering system" },
//     ],
//     color: "#0ea5e9",
//     liveUrl: "https://makaan4u-clean.vercel.app/",
//   },
//   {
//     id: 6,
//     title: "CodeVerse – Social Platform for Developers",
//     client: "CodeVerse (Personal Project)",
//     category: "website",
//     description:
//       "A social media platform for developers to share projects, code snippets, and collaborate with the community.",
//     duration: "Ongoing",
//     technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
//     results: [
//       { value: "Community-based", label: "Developer platform" },
//       { value: "Auth system", label: "Secure access" },
//       { value: "Interactive", label: "Posts & comments" },
//     ],
//     color: "#8b5cf6",
//     liveUrl: "https://code-verse-phi.vercel.app/",
//   },
// ];
export interface Project {
  id: number;
  title: string;
  client: string;
  category: "website" | "ecommerce" | "seo";
  description: string;
  duration: string;
  technologies: string[];
  results: { value: string; label: string }[];
  color: string;
  image?: string; // spotlight / banner
  logo?: string; // fallback logo
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gradify – AI Career Coach",
    client: "Gradify (Startup Project)",
    category: "website",
    description:
      "AI-powered career guidance platform that helps students discover career paths, analyze skills, and receive personalized learning roadmaps.",
    duration: "Ongoing",
    technologies: ["Next.js", "TypeScript", "Gemini AI", "Tailwind CSS"],
    results: [
      { value: "AI-powered", label: "Career guidance" },
      { value: "Personalized", label: "Roadmaps" },
      { value: "Scalable", label: "Architecture" },
    ],
    color: "#3b82f6",
    image: "/assets/projects/gradify.png",
    logo: "/public/assets/projects/logo_gradify.png",
    liveUrl: "https://update-gradify-ai-carrer-coach.vercel.app/",
  },
  {
    id: 2,
    title: "Zudio – E-commerce Clothing Store",
    client: "Zudio (Demo Project)",
    category: "ecommerce",
    description:
      "Full-stack e-commerce clothing platform with product listings, cart flow, and secure checkout experience.",
    duration: "2 months",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    results: [
      { value: "End-to-end", label: "Shopping flow" },
      { value: "Secure", label: "Checkout" },
      { value: "Responsive", label: "UI design" },
    ],
    color: "#10b981",
    image: "/assets/projects/zudio2.png",
    logo: "/assets/projects/logo_zudio.png",
    liveUrl: "https://zudio-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Sangam – Alumni Management Platform",
    client: "Educational Institution",
    category: "website",
    description:
      "Centralized alumni management platform with profiles, event management, and engagement features.",
    duration: "3 months",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    results: [
      { value: "Centralized", label: "Alumni data" },
      { value: "Role-based", label: "Access control" },
      { value: "Scalable", label: "Backend" },
    ],
    color: "#6366f1",
    image: "/assets/projects/sangam.png",
    logo: "/assets/projects/logo_sangam.png",
    liveUrl: "https://clean-sangam.vercel.app/alumni",
  },
  {
    id: 4,
    title: "AgriSmart – AI Agriculture Assistant",
    client: "Academic / Research Project",
    category: "website",
    description:
      "AI-based agriculture assistant providing crop recommendations, weather insights, and soil health analysis.",
    duration: "6 weeks",
    technologies: ["Python", "Streamlit", "Machine Learning"],
    results: [
      { value: "AI-driven", label: "Recommendations" },
      { value: "Data-based", label: "Insights" },
      { value: "Interactive", label: "Dashboard" },
    ],
    color: "#22c55e",
    image: "/assets/projects/agri.png",
    logo: "/images/logo/agri.png",
    liveUrl:
      "https://agrivision-focus-on-crop-monitoring-and-weather-forecasting-bm.streamlit.app/",
  },
  {
    id: 5,
    title: "Makaan4U – Property Finder Platform",
    client: "Makaan4U (Startup Project)",
    category: "website",
    description:
      "Real estate platform enabling users to search, list, and manage properties for rent or sale with dynamic filters.",
    duration: "2 months",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    results: [
      { value: "Location-based", label: "Search" },
      { value: "Secure", label: "Authentication" },
      { value: "Dynamic", label: "Filtering" },
    ],
    color: "#0ea5e9",
    image: "/assets/projects/makaan4u.png",
    logo: "/images/logo/makaan4u.webp",
    liveUrl: "https://makaan4u-clean.vercel.app/",
  },
  {
    id: 6,
    title: "CodeVerse – Social Platform for Coders",
    client: "CodeVerse (Personal Project)",
    category: "website",
    description:
      "Social media platform for developers to showcase projects, share code, and collaborate with the community.",
    duration: "Ongoing",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    results: [
      { value: "Community", label: "Driven" },
      { value: "Secure", label: "Authentication" },
      { value: "Interactive", label: "Posts & comments" },
    ],
    color: "#8b5cf6",
    image: "/assets/projects/codeverse.png",
    logo: "/images/logo/codeverse.png",
    liveUrl: "https://code-verse-phi.vercel.app/",
  },
];
