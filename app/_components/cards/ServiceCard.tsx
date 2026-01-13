// "use client";

// import { useState } from "react";
// import { Service } from "@/app/data/services";
// import {
//   FiChevronRight,
//   FiCheck,
//   FiGlobe,
//   FiTrendingUp,
//   FiShoppingCart,
//   FiSmartphone,
//   FiBarChart2,
//   FiTool,
// } from "react-icons/fi";

// // Map icon names to actual components
// const iconMap: { [key: string]: React.ComponentType<any> } = {
//   FiGlobe: FiGlobe,
//   FiTrendingUp: FiTrendingUp,
//   FiShoppingCart: FiShoppingCart,
//   FiSmartphone: FiSmartphone,
//   FiBarChart2: FiBarChart2,
//   FiTool: FiTool,
// };

// interface ServiceCardProps {
//   service: Service;
//   delay?: number;
// }

// export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const IconComponent = iconMap[service.icon] || FiGlobe;

//   // Color mapping for icons
//   const getIconColor = () => {
//     switch (service.icon) {
//       case "FiGlobe":
//         return "bg-blue-100 text-blue-600";
//       case "FiTrendingUp":
//         return "bg-emerald-100 text-emerald-600";
//       case "FiShoppingCart":
//         return "bg-amber-100 text-amber-600";
//       case "FiSmartphone":
//         return "bg-violet-100 text-violet-600";
//       case "FiBarChart2":
//         return "bg-cyan-100 text-cyan-600";
//       case "FiTool":
//         return "bg-orange-100 text-orange-600";
//       default:
//         return "bg-blue-100 text-blue-600";
//     }
//   };

//   return (
//     <div
//       className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ animationDelay: `${delay}ms` }}
//     >
//       {/* Icon & Title */}
//       <div className="flex items-start gap-4 mb-5">
//         <div
//           className={`w-12 h-12 rounded-xl ${getIconColor()} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
//         >
//           <IconComponent className="w-6 h-6" />
//         </div>
//         <div>
//           <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
//             {service.title}
//           </h3>
//         </div>
//       </div>

//       {/* Description */}
//       <p className="text-gray-600 mb-6 text-sm leading-relaxed">
//         {service.description}
//       </p>

//       {/* Features List */}
//       <div className="space-y-3 mb-6">
//         {service.features.map((feature, index) => (
//           <div key={index} className="flex items-start text-sm">
//             <FiCheck className="mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
//             <span className="text-gray-700">{feature}</span>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Indicator */}
//       <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
//         <div className="flex items-center gap-3 text-sm">
//           <span className="text-gray-500">Includes:</span>
//           <span className="font-medium text-gray-800">
//             {service.features.length} key features
//           </span>
//         </div>
//         <div
//           className={`w-2 h-2 rounded-full ${
//             isHovered ? "bg-blue-500" : "bg-gray-300"
//           } transition-colors`}
//         />
//       </div>

//       {/* Hover Line */}
//       <div
//         className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform origin-left transition-transform duration-300 ${
//           isHovered ? "scale-x-100" : "scale-x-0"
//         }`}
//       />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Service } from "@/app/data/services";
import {
  FiCheck,
  FiGlobe,
  FiTrendingUp,
  FiShoppingCart,
  FiSmartphone,
  FiBarChart2,
  FiTool,
} from "react-icons/fi";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FiGlobe: FiGlobe,
  FiTrendingUp: FiTrendingUp,
  FiShoppingCart: FiShoppingCart,
  FiSmartphone: FiSmartphone,
  FiBarChart2: FiBarChart2,
  FiTool: FiTool,
};

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[service.icon] || FiGlobe;

  const getIconColor = () => {
    switch (service.icon) {
      case "FiGlobe":
        return "bg-blue-100 text-blue-600";
      case "FiTrendingUp":
        return "bg-emerald-100 text-emerald-600";
      case "FiShoppingCart":
        return "bg-amber-100 text-amber-600";
      case "FiSmartphone":
        return "bg-violet-100 text-violet-600";
      case "FiBarChart2":
        return "bg-cyan-100 text-cyan-600";
      case "FiTool":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-blue-100 text-blue-600";
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-blue-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon & Title */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg ${getIconColor()} flex items-center justify-center flex-shrink-0 transition-colors`}
        >
          <IconComponent className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Features List */}
      <div className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start text-xs">
            <FiCheck className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5 text-xs" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* Bottom Indicator */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500">Includes:</span>
          <span className="font-medium text-gray-800">
            {service.features.length} features
          </span>
        </div>
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            isHovered ? "bg-blue-500" : "bg-gray-300"
          } transition-colors`}
        />
      </div>

      {/* Hover Line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 transform origin-left transition-transform duration-200 ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}