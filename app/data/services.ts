// // We'll use string icon names instead of React components for server compatibility

// export interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: string; // Changed from React component to string
//   color: string;
//   features: string[];
//   price: string;
// }

// export const services: Service[] = [
//   {
//     id: 1,
//     title: "Website Development",
//     description:
//       "Custom, responsive websites built with modern technologies to showcase your business.",
//     icon: "FiGlobe", // Changed to string
//     color: "from-blue-500 to-cyan-500",
//     features: [
//       "Custom Design",
//       "Mobile Responsive",
//       "Fast Loading",
//       "SEO Ready",
//       "CMS Integration",
//     ],
//     price: "$1,499+",
//   },
//   {
//     id: 2,
//     title: "SEO Optimization",
//     description:
//       "Improve your search engine rankings and drive organic traffic to your website.",
//     icon: "FiTrendingUp", // Changed to string
//     color: "from-purple-500 to-pink-500",
//     features: [
//       "Keyword Research",
//       "On-Page SEO",
//       "Technical SEO",
//       "Local SEO",
//       "Monthly Reports",
//     ],
//     price: "$499/mo",
//   },
//   {
//     id: 3,
//     title: "E-commerce Solutions",
//     description:
//       "Complete online store setup with payment integration and inventory management.",
//     icon: "FiShoppingCart", // Changed to string
//     color: "from-green-500 to-emerald-500",
//     features: [
//       "Shopify/WordPress",
//       "Payment Gateway",
//       "Product Management",
//       "Secure Checkout",
//       "Order Tracking",
//     ],
//     price: "$2,999+",
//   },
//   {
//     id: 4,
//     title: "Mobile App Development",
//     description:
//       "Native and cross-platform mobile applications for iOS and Android.",
//     icon: "FiSmartphone", // Changed to string
//     color: "from-orange-500 to-red-500",
//     features: [
//       "iOS & Android",
//       "UI/UX Design",
//       "App Store Submission",
//       "Push Notifications",
//       "Maintenance",
//     ],
//     price: "$4,999+",
//   },
//   {
//     id: 5,
//     title: "Digital Marketing",
//     description:
//       "Strategic marketing campaigns to increase brand awareness and generate leads.",
//     icon: "FiBarChart2", // Changed to string
//     color: "from-yellow-500 to-amber-500",
//     features: [
//       "Social Media Marketing",
//       "Email Campaigns",
//       "PPC Management",
//       "Content Strategy",
//       "Analytics",
//     ],
//     price: "$799/mo",
//   },
//   {
//     id: 6,
//     title: "Website Maintenance",
//     description:
//       "Ongoing support, updates, and security monitoring for your website.",
//     icon: "FiTool", // Changed to string
//     color: "from-gray-500 to-slate-500",
//     features: [
//       "Regular Updates",
//       "Security Monitoring",
//       "Backup Services",
//       "Performance Checks",
//       "24/7 Support",
//     ],
//     price: "$199/mo",
//   },
// ];
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Website Design & Development",
    description:
      "We build fast, modern websites that make your business look professional and convert visitors into customers.",
    icon: "FiGlobe",
    features: [
      "Custom Design for Your Brand",
      "Mobile & Tablet Friendly",
      "Fast Loading Pages",
      "Search Engine Friendly",
      "Easy to Update",
    ],
    price: "Starting at $1,500",
  },
  {
    id: 2,
    title: "Search Engine Optimization (SEO)",
    description:
      "Help your business get found on Google and attract the right customers organically.",
    icon: "FiTrendingUp",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical Improvements",
      "Local SEO Setup",
      "Monthly Performance Reports",
    ],
    price: "$500 / month",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "Sell your products online with a secure, easy-to-manage online store.",
    icon: "FiShoppingCart",
    features: [
      "Product & Category Setup",
      "Secure Online Payments",
      "Order & Inventory Management",
      "Mobile Shopping Experience",
      "Admin Dashboard",
    ],
    price: "Starting at $3,000",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Custom mobile apps that help you engage customers and grow your business.",
    icon: "FiSmartphone",
    features: [
      "iOS & Android Apps",
      "Clean & Simple UI",
      "Fast & Reliable Performance",
      "Push Notifications",
      "App Store Publishing",
    ],
    price: "Starting at $5,000",
  },
  {
    id: 5,
    title: "Website Speed & SEO Improvements",
    description:
      "Improve website speed, visibility, and user experience to increase conversions.",
    icon: "FiZap",
    features: [
      "Speed Optimization",
      "Google Page Insights Fixes",
      "SEO Best Practices",
      "Mobile Performance",
      "Analytics Setup",
    ],
    price: "$500 / month",
  },
  {
    id: 6,
    title: "Website Maintenance & Support",
    description:
      "We take care of updates, security, and fixes so you can focus on your business.",
    icon: "FiTool",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Bug Fixes",
      "Backups",
      "Priority Support",
    ],
    price: "$200 / month",
  },
];
