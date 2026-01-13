// "use client";

// import { useState, useEffect } from "react";
// import Button from "../ui/Button";
// import {
//   FiArrowRight,
//   FiCheckCircle,
//   FiGlobe,
//   FiSearch,
//   FiShoppingCart,
//   FiTrendingUp,
//   FiUsers,
//   FiZap,
//   FiShield,
// } from "react-icons/fi";

// export default function Hero() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const words = ["Websites", "SEO", "E-commerce", "Branding"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       text: "Custom Design",
//       icon: <FiGlobe />,
//       desc: "Tailored to your brand",
//     },
//     {
//       text: "SEO Optimized",
//       icon: <FiSearch />,
//       desc: "Rank higher on Google",
//     },
//     {
//       text: "Mobile First",
//       icon: <FiTrendingUp />,
//       desc: "Perfect on all devices",
//     },
//     { text: "Fast Loading", icon: <FiZap />, desc: "< 2s load times" },
//     { text: "Secure & Reliable", icon: <FiShield />, desc: "24/7 protection" },
//     { text: "Dedicated Support", icon: <FiUsers />, desc: "Always available" },
//   ];

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-[90vh] flex items-center"
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
//         <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
//         <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
//       </div>

//       <div className="container-custom relative py-12 md:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Left Content - More compact */}
//           <div className="space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-sm border border-blue-100">
//               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
//               <span className="font-semibold text-emerald-700 text-sm">
//                 🚀 Trusted by 500+ Businesses
//               </span>
//             </div>

//             {/* Main headline - More compact */}
//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Grow Your Business With{" "}
//                 <span className="text-blue-700 inline-block">
//                   <span className="relative">
//                     {words[currentWordIndex]}
//                     <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-100 rounded-full"></span>
//                   </span>
//                 </span>
//               </h1>

//               <p className="text-lg text-gray-600 md:text-xl max-w-2xl">
//                 We create powerful digital solutions that drive real results.
//                 From stunning websites to comprehensive SEO strategies.
//               </p>
//             </div>

//             {/* Features Grid - 3 columns for better visibility */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-200"
//                 >
//                   <div className="p-2 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-800 text-sm">
//                       {feature.text}
//                     </div>
//                     <div className="text-xs text-gray-500 mt-0.5">
//                       {feature.desc}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons - More compact */}
//             <div className="flex flex-col sm:flex-row gap-3 pt-4">
//               <Button
//                 variant="primary"
//                 size="lg"
//                 href="#contact"
//                 className="group bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-base"
//               >
//                 <span className="flex items-center gap-2">
//                   Start Free Consultation
//                   <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 href="#projects"
//                 className="border border-gray-300 hover:border-blue-400 text-gray-800 hover:text-blue-700 px-7 py-3.5 rounded-xl hover:shadow transition-all duration-300 text-base"
//               >
//                 View Case Studies
//               </Button>
//             </div>

//             {/* Stats - More compact */}
//             <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
//               {[
//                 {
//                   number: "200+",
//                   label: "Projects",
//                   icon: "✓",
//                   color: "text-blue-600",
//                 },
//                 {
//                   number: "99%",
//                   label: "Satisfaction",
//                   icon: "❤️",
//                   color: "text-emerald-600",
//                 },
//                 {
//                   number: "4.9/5",
//                   label: "Rating",
//                   icon: "⭐",
//                   color: "text-amber-600",
//                 },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div
//                     className={`text-2xl font-bold ${stat.color} flex items-center justify-center gap-1`}
//                   >
//                     {stat.icon} {stat.number}
//                   </div>
//                   <div className="text-xs text-gray-600 font-medium mt-1">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Trust badge */}
//             <div className="pt-4 flex items-center gap-3">
//               <div className="text-xs text-gray-500">Trusted by:</div>
//               <div className="flex gap-4">
//                 {["TechCorp", "StartupHub", "GlobalBiz"].map((company, idx) => (
//                   <div
//                     key={idx}
//                     className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-lg"
//                   >
//                     {company}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Optimized for visibility */}
//           <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
//             {/* Main Dashboard Card */}
//             <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-200 p-4">
//               <div className="w-full h-full bg-gradient-to-br from-blue-50/50 to-emerald-50/50 rounded-xl overflow-hidden">
//                 {/* Dashboard header */}
//                 <div className="p-4 bg-white/80 border-b border-gray-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
//                     <div className="ml-4 text-sm font-medium text-gray-700">
//                       Business Dashboard
//                     </div>
//                   </div>
//                 </div>

//                 {/* Dashboard content */}
//                 <div className="p-6 grid grid-cols-2 gap-4">
//                   {/* Metrics */}
//                   <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
//                     <div className="text-xs text-gray-500 mb-2">Visitors</div>
//                     <div className="text-2xl font-bold text-blue-700">
//                       ↑ 12.5K
//                     </div>
//                     <div className="text-xs text-emerald-600 mt-1">
//                       +24% this month
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
//                     <div className="text-xs text-gray-500 mb-2">Conversion</div>
//                     <div className="text-2xl font-bold text-emerald-700">
//                       ↑ 8.2%
//                     </div>
//                     <div className="text-xs text-emerald-600 mt-1">
//                       +18% this month
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
//                     <div className="text-xs text-gray-500 mb-2">Revenue</div>
//                     <div className="text-2xl font-bold text-amber-700">
//                       $45.2K
//                     </div>
//                     <div className="text-xs text-emerald-600 mt-1">
//                       +32% this month
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
//                     <div className="text-xs text-gray-500 mb-2">SEO Score</div>
//                     <div className="text-2xl font-bold text-blue-700">
//                       94/100
//                     </div>
//                     <div className="text-xs text-emerald-600 mt-1">
//                       Excellent
//                     </div>
//                   </div>
//                 </div>

//                 {/* Chart area */}
//                 <div className="px-6">
//                   <div className="h-2 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 rounded-full"></div>
//                   <div className="flex justify-between text-xs text-gray-500 mt-2">
//                     <span>Jan</span>
//                     <span>Mar</span>
//                     <span>May</span>
//                     <span>Jul</span>
//                     <span>Sep</span>
//                     <span>Nov</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating elements */}
//             <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-xl shadow-lg p-3 border border-gray-200 animate-float">
//               <div className="w-full h-full bg-emerald-50 rounded-lg flex flex-col items-center justify-center">
//                 <FiSearch className="w-6 h-6 text-emerald-600 mb-2" />
//                 <div className="text-xs font-semibold text-gray-800 text-center">
//                   SEO Rank
//                 </div>
//                 <div className="text-xs text-emerald-600 mt-0.5">
//                   #1 Results
//                 </div>
//               </div>
//             </div>

//             <div
//               className="absolute -bottom-4 -left-4 w-28 h-28 bg-white rounded-xl shadow-lg p-3 border border-gray-200 animate-float"
//               style={{ animationDelay: "1s" }}
//             >
//               <div className="w-full h-full bg-amber-50 rounded-lg flex flex-col items-center justify-center">
//                 <FiShoppingCart className="w-6 h-6 text-amber-600 mb-2" />
//                 <div className="text-xs font-semibold text-gray-800 text-center">
//                   Sales
//                 </div>
//                 <div className="text-xs text-amber-600 mt-0.5">+45% Growth</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }
//         .animate-float {
//           animation: float 5s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";
import {
  FiArrowRight,
  FiGlobe,
  FiSearch,
  FiShoppingCart,
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Websites", "Online Stores", "SEO", "Digital Growth"];
;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { text: "Custom Design", icon: <FiGlobe />, desc: "Tailored" },
    { text: "SEO Optimized", icon: <FiSearch />, desc: "Rank higher" },
    { text: "Mobile First", icon: <FiTrendingUp />, desc: "All devices" },
    { text: "Fast Loading", icon: <FiZap />, desc: "< 2s" },
    { text: "Secure", icon: <FiShield />, desc: "Protected" },
    { text: "Support", icon: <FiUsers />, desc: "24/7" },
  ];
// const features = [
//   { text: "Professional look", icon: <FiGlobe />, desc: "Builds trust" },
//   { text: "Easy to find on Google", icon: <FiSearch />, desc: "More visitors" },
//   {
//     text: "Works on all devices",
//     icon: <FiTrendingUp />,
//     desc: "Mobile & desktop",
//   },
//   { text: "Fast loading pages", icon: <FiZap />, desc: "No waiting" },
//   { text: "Safe & secure", icon: <FiShield />, desc: "Data protected" },
//   { text: "Ongoing support", icon: <FiUsers />, desc: "We’re available" },
// ];



  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-50 min-h-[90vh] flex items-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-10" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-100 rounded-full opacity-10" />
      </div>

      <div className="container-custom relative py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content - Mobile Optimized */}
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-medium text-emerald-700 text-xs">
                🚀 Helping businesses build their online presence
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Grow Your Business With{" "}
                <span className="text-blue-600 inline-block">
                  <span className="relative">
                    {words[currentWordIndex]}
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-100 rounded-full"></span>
                  </span>
                </span>
              </h1>

              <p className="text-sm text-gray-600 md:text-base max-w-xl">
                Digital solutions that drive real results. From websites to SEO
                strategies.
              </p>
            </div>

            {/* Features Grid - 2 columns for mobile */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100"
                >
                  <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-xs">
                      {feature.text}
                    </div>
                    <div className="text-xs text-gray-500">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-sm"
              >
                <span className="flex items-center gap-1">
                  Start Free Consultation
                  <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#projects"
                className="border border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-5 py-2.5 rounded-lg hover:shadow transition-all text-sm"
              >
                View Case Studies
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              {[
                { number: "200+", label: "Projects", color: "text-blue-600" },
                {
                  number: "99%",
                  label: "Satisfaction",
                  color: "text-emerald-600",
                },
                { number: "4.9/5", label: "Rating", color: "text-amber-600" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-lg font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
            {/* Trust Signals - With Checkmarks */}
            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-200">
              {[
                { text: "Direct Devs", description: "No middlemen" },
                { text: "No Outsourcing", description: "100% in-house" },
                { text: "Quality Focus", description: "Over quantity" },
                { text: "Honest Pricing", description: "Transparent" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1">
                    <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-sm font-bold text-gray-800">
                    {item.text}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Simplified for mobile */}
          <div className="hidden lg:block relative h-[400px]">
            {/* Main Dashboard Card - Simplified */}
            <div className="absolute inset-0 bg-white rounded-xl shadow-sm border border-gray-200 p-3">
              <div className="w-full h-full bg-gradient-to-br from-blue-50/30 to-emerald-50/30 rounded-lg overflow-hidden">
                {/* Dashboard header */}
                <div className="p-3 bg-white/50 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="ml-3 text-xs font-medium text-gray-700">
                      Business Dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-4 grid grid-cols-2 gap-3">
                  {/* Metrics */}
                  <div className="bg-white rounded p-3 border border-gray-100">
                    <div className="text-xs text-gray-500">Visitors</div>
                    <div className="text-lg font-bold text-blue-600">
                      ↑ 12.5K
                    </div>
                    <div className="text-xs text-emerald-600 mt-0.5">+24%</div>
                  </div>

                  <div className="bg-white rounded p-3 border border-gray-100">
                    <div className="text-xs text-gray-500">Conversion</div>
                    <div className="text-lg font-bold text-emerald-600">
                      ↑ 8.2%
                    </div>
                    <div className="text-xs text-emerald-600 mt-0.5">+18%</div>
                  </div>

                  <div className="bg-white rounded p-3 border border-gray-100">
                    <div className="text-xs text-gray-500">Revenue</div>
                    <div className="text-lg font-bold text-amber-600">
                      $45.2K
                    </div>
                    <div className="text-xs text-emerald-600 mt-0.5">+32%</div>
                  </div>

                  <div className="bg-white rounded p-3 border border-gray-100">
                    <div className="text-xs text-gray-500">SEO Score</div>
                    <div className="text-lg font-bold text-blue-600">
                      94/100
                    </div>
                    <div className="text-xs text-emerald-600 mt-0.5">
                      Excellent
                    </div>
                  </div>
                </div>

                {/* Chart area */}
                <div className="px-4">
                  <div className="h-1.5 bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 rounded-full"></div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1.5">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span>Nov</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Rank Floating Card - Top Right */}
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-white rounded-lg shadow p-2 border border-gray-200 animate-float">
              <div className="w-full h-full bg-emerald-50 rounded flex flex-col items-center justify-center">
                <FiSearch className="w-4 h-4 text-emerald-600 mb-1" />
                <div className="text-xs font-medium text-gray-800">
                  SEO Rank
                </div>
                <div className="text-xs text-emerald-600">#1 Results</div>
              </div>
            </div>

            {/* Sales Floating Card - Bottom Left */}
            <div
              className="absolute -bottom-3 -left-3 w-24 h-24 bg-white rounded-lg shadow p-2 border border-gray-200 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-full h-full bg-amber-50 rounded-lg flex flex-col items-center justify-center">
                <FiShoppingCart className="w-4 h-4 text-amber-600 mb-1" />
                <div className="text-xs font-medium text-gray-800 text-center">
                  Sales
                </div>
                <div className="text-xs text-amber-600">+45% Growth</div>
              </div>
            </div>
          </div>

          {/* Mobile-only simplified dashboard */}
          <div className="lg:hidden mt-4 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="text-sm font-medium text-gray-700">
                Results Dashboard
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-blue-50 rounded-lg">
                <div className="text-sm font-bold text-blue-600">↑ 12.5K</div>
                <div className="text-xs text-gray-600">Visitors</div>
              </div>
              <div className="text-center p-2 bg-emerald-50 rounded-lg">
                <div className="text-sm font-bold text-emerald-600">↑ 8.2%</div>
                <div className="text-xs text-gray-600">Conversion</div>
              </div>
              <div className="text-center p-2 bg-amber-50 rounded-lg">
                <div className="text-sm font-bold text-amber-600">$45.2K</div>
                <div className="text-xs text-gray-600">Revenue</div>
              </div>
              <div className="text-center p-2 bg-blue-50 rounded-lg">
                <div className="text-sm font-bold text-blue-600">94/100</div>
                <div className="text-xs text-gray-600">SEO Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}