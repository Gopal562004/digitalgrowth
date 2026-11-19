export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: "website" | "ecommerce" | "platform";
  client: string;
  image: string;
  liveUrl: string;
  stack: string[];
  description: string;
  architecture: string[];
  engineeringDecisions: string[];
  coreModules: string[];
}

export const projects: Project[] = [
  {
    id: "gradify",
    index: "01",
    title: "Gradify",
    tagline: "AI Career Guidance & Skills Platform",
    category: "platform",
    client: "EdTech Startup",
    image: "/assets/projects/gradify.png",
    liveUrl: "https://update-gradify-ai-carrer-coach.vercel.app/",
    stack: ["Next.js", "TypeScript", "Gemini AI", "Tailwind CSS"],
    description:
      "A live AI career coach platform helping students analyze skill gaps, discover high-demand career pathways, and generate personalized weekly learning roadmaps.",
    architecture: [
      "Next.js App Router with Server Components for ultra-fast page loads",
      "Streaming AI responses with structured JSON output for live career plans",
      "PostgreSQL database storing student roadmaps and job market trends",
      "Role-based authentication for students, mentors, and administrators",
    ],
    engineeringDecisions: [
      "Used AI streaming to deliver immediate answers without long loading spinners",
      "Built clean interactive roadmap nodes that update seamlessly without page reloads",
      "Designed mobile-first UI so students can learn and track progress on their phones",
    ],
    coreModules: [
      "AI Career Assessment",
      "Dynamic Learning Roadmap",
      "Skill Gap Analysis",
      "Job Market Signal Feed",
      "Student Progress Dashboard",
    ],
  },
  {
    id: "zudio",
    index: "02",
    title: "Zudio",
    tagline: "Modern Fashion E-Commerce Store",
    category: "ecommerce",
    client: "Retail & Apparel Demo",
    image: "/assets/projects/zudio2.png",
    liveUrl: "https://zudio-seven.vercel.app/",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A full-stack fashion e-commerce storefront designed for fast product discovery, real-time inventory checks, seamless cart management, and multi-step checkout.",
    architecture: [
      "React single-page application with responsive mobile-first catalogue",
      "Node.js & Express REST API with MongoDB database for product catalogue",
      "Server-side cart verification to prevent out-of-stock orders",
      "Optimized WebP image delivery for instant product image browsing",
    ],
    engineeringDecisions: [
      "Implemented instant category and price filters with zero lag",
      "Built local storage cart persistence so users don't lose items on refresh",
      "Streamlined checkout down to 2 simple steps to reduce drop-offs",
    ],
    coreModules: [
      "Product Catalogue & Search",
      "Real-Time Inventory Guard",
      "Cart & Wishlist Persistence",
      "Secure Multi-Step Checkout",
      "Customer Order History",
    ],
  },
  {
    id: "sangam",
    index: "03",
    title: "Sangam",
    tagline: "Institutional Alumni & Event Portal",
    category: "platform",
    client: "Educational Institution",
    image: "/assets/projects/sangam.png",
    liveUrl: "https://clean-sangam.vercel.app/alumni",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "A centralized alumni community platform connecting university graduates with students through mentorship, verified directory listings, job postings, and campus events.",
    architecture: [
      "Role-based authentication system with separate views for Students, Alumni, and Admin",
      "Node.js API with JWT token authentication and secure password encryption",
      "MongoDB database structure handling event RSVPs, profiles, and job listings",
      "Clean responsive dashboard optimized for tablet and mobile browsers",
    ],
    engineeringDecisions: [
      "Strict role verification prevents unverified signups from accessing private student data",
      "Separated directory search into cached queries for instant name & company lookups",
      "Lightweight bundle size ensures quick loading even on slow college Wi-Fi networks",
    ],
    coreModules: [
      "Verified Alumni Directory",
      "Role-Based Access Control",
      "Campus Events & RSVP System",
      "Mentorship Request Flow",
      "Job & Internship Board",
    ],
  },
  {
    id: "agrismart",
    index: "04",
    title: "AgriSmart",
    tagline: "AI Crop Analytics & Weather System",
    category: "platform",
    client: "AgriTech Research",
    image: "/assets/projects/agri.png",
    liveUrl: "https://agrivision-focus-on-crop-monitoring-and-weather-forecasting-bm.streamlit.app/",
    stack: ["Python", "Streamlit", "Machine Learning", "Data Analytics"],
    description:
      "An intelligent agriculture assistant providing farmers and agronomists with crop recommendations, 72-hour weather forecasting, and interactive soil nutrient reports.",
    architecture: [
      "Interactive Python Streamlit web dashboard with real-time data visualizers",
      "Machine learning models trained to predict optimal crop yields based on soil NPK levels",
      "Live weather API ingestion delivering 3-day precipitation forecasts",
      "Downloadable summary reports for agronomy field teams",
    ],
    engineeringDecisions: [
      "Focused on straightforward visual indicators so recommendations are easily understood in the field",
      "Used lightweight cached weather requests to stay within API rate limits",
      "Optimized chart rendering for smooth scrolling on tablets and smartphones",
    ],
    coreModules: [
      "Soil Nutrient Input Form",
      "Crop Recommendation Engine",
      "Weather Forecast Radar",
      "Historical Yield Analytics",
      "Field Report Export",
    ],
  },
  {
    id: "makaan4u",
    index: "05",
    title: "Makaan4U",
    tagline: "Real Estate & Rental Discovery Portal",
    category: "website",
    client: "PropTech Startup",
    image: "/assets/projects/makaan4u.png",
    liveUrl: "https://makaan4u-clean.vercel.app/",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A modern property finder platform enabling home seekers and investors to explore rental and resale properties with dynamic location filters, pricing tiers, and direct agent inquiries.",
    architecture: [
      "Fast responsive listing grid with instant filters by property type, budget, and city",
      "MongoDB spatial queries allowing quick neighborhood lookups",
      "High-resolution photo galleries with lazy loading for quick page rendering",
      "Direct WhatsApp and call routing to verified property listing owners",
    ],
    engineeringDecisions: [
      "Built clean search filter chips so users can browse listings in 1 tap",
      "Compressed property photos automatically on upload to keep page loads under 1 second",
      "Designed mobile-friendly card layouts with prominent call-to-action buttons",
    ],
    coreModules: [
      "Property Search & Dynamic Filters",
      "Detailed Property Showcases",
      "Saved Shortlist & Favorites",
      "Direct Owner & Agent Contact",
      "Listing Submission Form",
    ],
  },
  {
    id: "codeverse",
    index: "06",
    title: "CodeVerse",
    tagline: "Developer Community & Code Showcase",
    category: "platform",
    client: "Community Project",
    image: "/assets/projects/codeverse.png",
    liveUrl: "https://code-verse-phi.vercel.app/",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A collaborative social network for developers to publish code snippets, ask technical questions, review project launches, and network with fellow engineers.",
    architecture: [
      "Interactive social feed with upvoting, markdown code rendering, and comments",
      "Node.js backend with secure user sessions and profile management",
      "MongoDB collections for posts, tags, developer profiles, and bookmarks",
      "Syntax-highlighted code editor preview for technical discussions",
    ],
    engineeringDecisions: [
      "Added syntax highlighting support for 15+ programming languages",
      "Implemented optimistic likes and bookmarks for instant UI feedback",
      "Built responsive sidebar navigation that collapses neatly on mobile screens",
    ],
    coreModules: [
      "Community Activity Feed",
      "Syntax-Highlighted Snippets",
      "Threaded Discussion System",
      "Developer Profile & Portfolio",
      "Search by Programming Language",
    ],
  },
];
