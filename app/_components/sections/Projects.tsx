// "use client";

// import { useState } from "react";
// import ProjectCard from "../cards/ProjectCard";
// import { projects } from "@/app/data/projects";
// import Button from "../ui/Button";
// import {
//   FiFilter,
//   FiArrowRight,
//   FiGlobe,
//   FiShoppingBag,
//   FiTrendingUp,
//   FiLayers,
// } from "react-icons/fi";

// export default function Projects() {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filters = [
//     { id: "all", label: "All Projects", icon: <FiGlobe /> },
//     { id: "website", label: "Websites", icon: <FiGlobe /> },
//     { id: "ecommerce", label: "E-commerce", icon: <FiShoppingBag /> },
//     { id: "seo", label: "SEO", icon: <FiTrendingUp /> },
//     { id: "branding", label: "Branding", icon: <FiLayers /> },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   return (
//     <section
//       id="projects"
//       className="section-padding bg-gradient-to-b from-white to-gray-50"
//     >
//       <div className="container-custom">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
//             <FiGlobe className="text-blue-600" />
//             Our Portfolio
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//             Featured <span className="text-blue-700">Projects</span>
//           </h2>
//           <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//             Real results for real businesses. See how we've helped companies
//             achieve remarkable growth through strategic digital solutions.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <FiFilter className="text-gray-500" />
//             <span className="font-semibold text-gray-700">
//               Filter by category:
//             </span>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             {filters.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
//                   activeFilter === filter.id
//                     ? "bg-blue-600 text-white shadow-lg"
//                     : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
//                 }`}
//               >
//                 {filter.icon}
//                 <span>{filter.label}</span>
//                 {activeFilter === filter.id && (
//                   <span className="ml-1 text-xs opacity-90">
//                     (
//                     {filter.id === "all"
//                       ? projects.length
//                       : projects.filter((p) => p.category === filter.id).length}
//                     )
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {filteredProjects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               {
//                 value: "200%",
//                 label: "Average ROI Increase",
//                 desc: "Across all projects",
//               },
//               {
//                 value: "85%",
//                 label: "Client Retention",
//                 desc: "Year over year",
//               },
//               {
//                 value: "4.8wk",
//                 label: "Avg. Launch Time",
//                 desc: "From concept to live",
//               },
//               {
//                 value: "50+",
//                 label: "Industries Served",
//                 desc: "Diverse expertise",
//               },
//             ].map((stat, index) => (
//               <div key={index} className="text-center p-4">
//                 <div className="text-3xl font-bold text-blue-700 mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm font-semibold text-gray-800 mb-1">
//                   {stat.label}
//                 </div>
//                 <div className="text-xs text-gray-500">{stat.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-10 border border-blue-100">
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Ready to Start Your Project?
//             </h3>
//             <p className="text-gray-600 text-lg mb-8">
//               Let's discuss your vision and create a custom solution that
//               delivers measurable results for your business.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 variant="primary"
//                 href="#contact"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <span className="flex items-center gap-2">
//                   Schedule Free Consultation
//                   <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Button>
//               <Button
//                 variant="outline"
//                 href="#projects"
//                 className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300"
//               >
//                 View All Case Studies
//               </Button>
//             </div>
//             <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
//               <span className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                 No upfront costs
//               </span>
//               <span className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                 Custom strategy session
//               </span>
//               <span className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                 Transparent pricing
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/app/data/projects";
import Button from "../ui/Button";
import {
  FiFilter,
  FiArrowRight,
  FiGlobe,
  FiShoppingBag,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All", icon: <FiGlobe /> },
    { id: "website", label: "Websites", icon: <FiGlobe /> },
    { id: "ecommerce", label: "E-commerce", icon: <FiShoppingBag /> },
    { id: "seo", label: "SEO", icon: <FiTrendingUp /> },
    // { id: "branding", label: "Branding", icon: <FiLayers /> },
  ];
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-xs mb-4 border border-blue-100">
            <FiGlobe className="text-blue-600 text-sm" />
            Our Portfolio
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Real results for businesses. See how we've helped achieve growth.
          </p>
        </div>
        {/* Filters */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FiFilter className="text-gray-500 text-sm" />
            <span className="font-medium text-gray-700 text-sm">
              Filter by:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
                {activeFilter === filter.id && (
                  <span className="text-xs opacity-90 ml-0.5">
                    (
                    {filter.id === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === filter.id).length}
                    )
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                value: "Small Team",
                label: "High Focus",
                desc: "Limited projects at a time",
              },
              {
                value: "Direct",
                label: "Developer Access",
                desc: "No middlemen",
              },
              {
                value: "Modern",
                label: "Tech Stack",
                desc: "Scalable & secure",
              },
              {
                value: "Long-term",
                label: "Support",
                desc: "After launch",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center p-3">
                <div className="text-xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-800 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Let's discuss your vision and create a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                href="#contact"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm"
              >
                <span className="flex items-center gap-1.5">
                  Free Consultation
                  <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                href="#projects"
                size="sm"
                className="border border-blue-300 text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-lg text-sm"
              >
                View All Cases
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                No upfront costs
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                Custom strategy
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                Transparent pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}