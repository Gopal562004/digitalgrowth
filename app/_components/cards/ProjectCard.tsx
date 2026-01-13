// // "use client";

// // import { useState } from "react";
// // import { Project } from "@/app/data/projects";
// // import { FiExternalLink, FiArrowRight } from "react-icons/fi";
// // import Image from "next/image";

// // interface ProjectCardProps {
// //   project: Project;
// // }

// // export default function ProjectCard({ project }: ProjectCardProps) {
// //   const [isHovered, setIsHovered] = useState(false);

// //   // Get color based on category
// //   const getCategoryColor = () => {
// //     switch (project.category) {
// //       case "website":
// //         return "text-blue-600 bg-blue-50 border-blue-200";
// //       case "ecommerce":
// //         return "text-emerald-600 bg-emerald-50 border-emerald-200";
// //       case "seo":
// //         return "text-amber-600 bg-amber-50 border-amber-200";
// //       case "branding":
// //         return "text-violet-600 bg-violet-50 border-violet-200";
// //       default:
// //         return "text-gray-600 bg-gray-50 border-gray-200";
// //     }
// //   };

// //   const categoryColor = getCategoryColor();

// //   return (
// //     <div
// //       className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:border-blue-300"
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       {/* Image Section */}
// //       <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
// //         {/* Image Placeholder - Replace with actual image if available */}
// //         <div className="absolute inset-0 flex items-center justify-center p-6">
// //           <div className="w-full h-full flex items-center justify-center relative">
// //             {/* Mock device frame */}
// //             <div className="w-32 h-24 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
// //               <div className="text-center">
// //                 <div
// //                   className={`w-10 h-10 ${
// //                     categoryColor.split(" ")[1]
// //                   } rounded-lg flex items-center justify-center mx-auto mb-2`}
// //                 >
// //                   <div
// //                     className={`w-5 h-5 ${categoryColor.split(" ")[0]} rounded`}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs font-medium text-gray-700">
// //                   {project.client}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Floating elements */}
// //             <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded shadow-sm border border-gray-200"></div>
// //             <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded shadow-sm border border-gray-200"></div>
// //           </div>
// //         </div>

// //         {/* Category Badge */}
// //         <div className="absolute top-3 left-3">
// //           <div
// //             className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${
// //               categoryColor.split(" ")[1]
// //             } border ${categoryColor.split(" ")[2]}`}
// //           >
// //             <span
// //               className={`w-1.5 h-1.5 rounded-full ${
// //                 categoryColor.split(" ")[0]
// //               }`}
// //             ></span>
// //             {project.category}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Content Section */}
// //       <div className="p-5">
// //         <div className="flex items-start justify-between mb-3">
// //           <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
// //           <span className="text-sm font-medium text-gray-500">
// //             {project.duration}
// //           </span>
// //         </div>

// //         <p className="text-gray-600 text-sm mb-5 leading-relaxed">
// //           {project.description}
// //         </p>

// //         {/* Results */}
// //         <div className="grid grid-cols-3 gap-3 mb-5">
// //           {project.results.map((result, index) => (
// //             <div key={index} className="text-center">
// //               <div
// //                 className={`text-base font-bold ${categoryColor.split(" ")[0]}`}
// //               >
// //                 {result.value}
// //               </div>
// //               <div className="text-xs text-gray-500 mt-1">{result.label}</div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom Section */}
// //         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
// //           {/* Technologies */}
// //           <div className="flex items-center gap-2">
// //             {project.technologies.slice(0, 3).map((tech, index) => (
// //               <span
// //                 key={index}
// //                 className="px-2.5 py-1 text-xs rounded-lg bg-gray-50 text-gray-700 border border-gray-200"
// //               >
// //                 {tech}
// //               </span>
// //             ))}
// //             {project.technologies.length > 3 && (
// //               <span className="px-2.5 py-1 text-xs rounded-lg bg-gray-50 text-gray-500 border border-gray-200">
// //                 +{project.technologies.length - 3}
// //               </span>
// //             )}
// //           </div>

// //           {/* Action */}
// //           {project.liveUrl && (
// //             <a
// //               href={project.liveUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className={`flex items-center gap-1.5 text-sm font-medium ${
// //                 categoryColor.split(" ")[0]
// //               } hover:gap-2 transition-all`}
// //             >
// //               <span>View</span>
// //               <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
// //             </a>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { Project } from "@/app/data/projects";
// import { FiArrowRight } from "react-icons/fi";

// interface ProjectCardProps {
//   project: Project;
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   const [isHovered, setIsHovered] = useState(false);

//   const getCategoryColor = () => {
//     switch (project.category) {
//       case "website":
//         return "text-blue-600 bg-blue-50 border-blue-200";
//       case "ecommerce":
//         return "text-emerald-600 bg-emerald-50 border-emerald-200";
//       case "seo":
//         return "text-amber-600 bg-amber-50 border-amber-200";
//       default:
//         return "text-gray-600 bg-gray-50 border-gray-200";
//     }
//   };

//   const categoryColor = getCategoryColor();

//   return (
//     <div
//       className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 transition-colors hover:border-blue-200"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Section */}
//       <div className="relative h-40 overflow-hidden bg-gray-50">
//         <div className="absolute inset-0 flex items-center justify-center p-4">
//           <div className="w-full h-full flex items-center justify-center relative">
//             {/* Mock device */}
//             <div className="w-24 h-16 bg-white rounded shadow-sm border border-gray-200 flex items-center justify-center">
//               <div className="text-center">
//                 <div
//                   className={`w-8 h-8 ${
//                     categoryColor.split(" ")[1]
//                   } rounded flex items-center justify-center mx-auto mb-1`}
//                 >
//                   <div
//                     className={`w-3 h-3 ${categoryColor.split(" ")[0]} rounded`}
//                   ></div>
//                 </div>
//                 <div className="text-xs font-medium text-gray-700 truncate px-1">
//                   {project.client.substring(0, 10)}...
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Category Badge */}
//         <div className="absolute top-2 left-2">
//           <div
//             className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${
//               categoryColor.split(" ")[1]
//             } border ${categoryColor.split(" ")[2]}`}
//           >
//             <span
//               className={`w-1 h-1 rounded-full ${categoryColor.split(" ")[0]}`}
//             ></span>
//             {project.category}
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="text-base font-semibold text-gray-900 truncate">
//             {project.title}
//           </h3>
//           <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
//             {project.duration}
//           </span>
//         </div>

//         <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//           {project.description}
//         </p>

//         {/* Results */}
//         <div className="grid grid-cols-3 gap-2 mb-4">
//           {project.results.map((result, index) => (
//             <div key={index} className="text-center">
//               <div
//                 className={`text-sm font-bold ${categoryColor.split(" ")[0]}`}
//               >
//                 {result.value}
//               </div>
//               <div className="text-xs text-gray-500 mt-0.5">{result.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//           {/* Technologies */}
//           <div className="flex items-center gap-1">
//             {project.technologies.slice(0, 2).map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-0.5 text-xs rounded bg-gray-50 text-gray-700 border border-gray-200 truncate max-w-[60px]"
//               >
//                 {tech}
//               </span>
//             ))}
//             {project.technologies.length > 2 && (
//               <span className="px-2 py-0.5 text-xs rounded bg-gray-50 text-gray-500 border border-gray-200">
//                 +{project.technologies.length - 2}
//               </span>
//             )}
//           </div>

//           {/* Action */}
//           {project.liveUrl && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-1 text-xs font-medium ${
//                 categoryColor.split(" ")[0]
//               } hover:gap-1.5 transition-all`}
//             >
//               <span>View</span>
//               <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Project } from "@/app/data/projects";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const getCategoryColor = () => {
    switch (project.category) {
      case "website":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "ecommerce":
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "seo":
        return "text-amber-600 bg-amber-50 border-amber-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const categoryColor = getCategoryColor();

  // Helper function to render images safely
  const renderImage = (
    src: string | undefined,
    alt: string,
    isLogo = false
  ) => {
    if (!src) return null;

    return (
      <div className={`relative ${isLogo ? "w-16 h-16" : "w-full h-full"}`}>
        {/* Using img tag instead of Next.js Image for simplicity */}
        <img
          src={src}
          alt={alt}
          className={`${
            isLogo ? "object-contain" : "object-cover"
          } w-full h-full`}
          onError={() => (isLogo ? setLogoError(true) : setImageError(true))}
        />
      </div>
    );
  };

  // Determine what to show in the image section
  const renderImageSection = () => {
    // Try to show main image
    if (project.image && !imageError) {
      return (
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-900/20 to-gray-900/10">
          {renderImage(project.image, project.title)}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
        </div>
      );
    }

    // Try to show logo as fallback
    if (project.logo && !logoError) {
      return (
        <div className="relative h-40 overflow-hidden bg-gray-50 flex items-center justify-center">
          {renderImage(project.logo, project.client, true)}
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />
        </div>
      );
    }

    // Final fallback to colored device mockup
    return (
      <div className="relative h-40 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="w-24 h-16 bg-white rounded shadow-sm border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div
                  className={`w-8 h-8 ${
                    categoryColor.split(" ")[1]
                  } rounded flex items-center justify-center mx-auto mb-1`}
                >
                  <div
                    className={`w-3 h-3 ${categoryColor.split(" ")[0]} rounded`}
                  ></div>
                </div>
                <div className="text-xs font-medium text-gray-700 truncate px-1">
                  {project.client.substring(0, 10)}...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 transition-all duration-200 hover:border-blue-200 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {renderImageSection()}

      {/* Category Badge */}
      <div className="absolute top-2 left-2 z-10">
        <div
          className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${
            categoryColor.split(" ")[1]
          } border ${categoryColor.split(" ")[2]} backdrop-blur-sm`}
        >
          <span
            className={`w-1 h-1 rounded-full ${categoryColor.split(" ")[0]}`}
          ></span>
          {project.category}
        </div>
      </div>

      {/* Live URL Indicator */}
      {project.liveUrl && (
        <div className="absolute top-2 right-2 z-10">
          <div className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <FiExternalLink className="w-3 h-3 text-gray-600" />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {project.title}
          </h3>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {project.duration}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Results */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.results.map((result, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-sm font-bold ${categoryColor.split(" ")[0]}`}
              >
                {result.value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{result.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {/* Technologies */}
          <div className="flex items-center gap-1">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs rounded bg-gray-50 text-gray-700 border border-gray-200 truncate max-w-[60px]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-0.5 text-xs rounded bg-gray-50 text-gray-500 border border-gray-200">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>

          {/* Action */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-xs font-medium ${
                categoryColor.split(" ")[0]
              } hover:gap-1.5 transition-all`}
            >
              <span>View</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}