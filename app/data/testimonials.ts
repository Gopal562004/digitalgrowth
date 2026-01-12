export interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  quote: string;
  rating: number;
  project: string;
  category: string;
  date: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "GreenHarvest Co.",
    position: "Marketing Director",
    quote:
      "DigitalGrowth transformed our online presence completely. Our e-commerce sales increased by 40% within the first quarter after launching our new website.",
    rating: 5,
    project: "E-commerce Platform Development",
    category: "Web Development",
    date: "June 2023",
    color: "#10b981",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "TechStart Inc.",
    position: "CEO",
    quote:
      "The SEO strategy they implemented helped us rank first page for all our target keywords. Our organic traffic grew by 300% in just 6 months.",
    rating: 5,
    project: "SEO Optimization Campaign",
    category: "Digital Marketing",
    date: "April 2023",
    color: "#8b5cf6",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "FitLife Gym",
    position: "Operations Manager",
    quote:
      "From design to deployment, the team was professional and efficient. Our member engagement increased significantly with the new app.",
    rating: 5,
    project: "Fitness Mobile App",
    category: "Mobile Development",
    date: "February 2023",
    color: "#3b82f6",
  },
  {
    id: 4,
    name: "David Wilson",
    company: "UrbanLiving Properties",
    position: "Founder",
    quote:
      "Their attention to detail and understanding of our business needs was exceptional. The real estate platform exceeded our expectations.",
    rating: 5,
    project: "Property Listing Platform",
    category: "Web Development",
    date: "December 2022",
    color: "#f59e0b",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "MediCare Group",
    position: "IT Director",
    quote:
      "The healthcare portal they developed is secure, user-friendly, and has significantly improved our patient management process.",
    rating: 5,
    project: "Healthcare Patient Portal",
    category: "Enterprise Solution",
    date: "October 2022",
    color: "#06b6d4",
  },
  {
    id: 6,
    name: "Robert Kim",
    company: "Local Restaurant Chain",
    position: "Owner",
    quote:
      "Their digital marketing services helped us reach new customers and increase reservations by 60%. Highly recommended!",
    rating: 5,
    project: "Digital Marketing Campaign",
    category: "Marketing",
    date: "August 2022",
    color: "#ec4899",
  },
];
