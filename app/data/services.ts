// We'll use string icon names instead of React components for server compatibility

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Changed from React component to string
  color: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern technologies to showcase your business.",
    icon: "FiGlobe", // Changed to string
    color: "from-blue-500 to-cyan-500",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "Fast Loading",
      "SEO Ready",
      "CMS Integration",
    ],
    price: "$1,499+",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic to your website.",
    icon: "FiTrendingUp", // Changed to string
    color: "from-purple-500 to-pink-500",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Monthly Reports",
    ],
    price: "$499/mo",
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description:
      "Complete online store setup with payment integration and inventory management.",
    icon: "FiShoppingCart", // Changed to string
    color: "from-green-500 to-emerald-500",
    features: [
      "Shopify/WordPress",
      "Payment Gateway",
      "Product Management",
      "Secure Checkout",
      "Order Tracking",
    ],
    price: "$2,999+",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "FiSmartphone", // Changed to string
    color: "from-orange-500 to-red-500",
    features: [
      "iOS & Android",
      "UI/UX Design",
      "App Store Submission",
      "Push Notifications",
      "Maintenance",
    ],
    price: "$4,999+",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns to increase brand awareness and generate leads.",
    icon: "FiBarChart2", // Changed to string
    color: "from-yellow-500 to-amber-500",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "PPC Management",
      "Content Strategy",
      "Analytics",
    ],
    price: "$799/mo",
  },
  {
    id: 6,
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and security monitoring for your website.",
    icon: "FiTool", // Changed to string
    color: "from-gray-500 to-slate-500",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Backup Services",
      "Performance Checks",
      "24/7 Support",
    ],
    price: "$199/mo",
  },
];
