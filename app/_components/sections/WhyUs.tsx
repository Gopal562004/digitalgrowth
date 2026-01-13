// import {
//   FiUsers,
//   FiAward,
//   FiClock,
//   FiHeart,
//   FiCheckCircle,
//   FiTrendingUp,
//   FiShield,
//   FiMessageSquare,
// } from "react-icons/fi";
// import Button from "../ui/Button";

// export default function WhyUs() {
//   const reasons = [
//     {
//       icon: FiUsers,
//       title: "Client-Focused Approach",
//       description:
//         "We prioritize your business goals and work closely with you to achieve them.",
//       color: "text-blue-600 bg-blue-50",
//     },
//     {
//       icon: FiAward,
//       title: "Proven Expertise",
//       description:
//         "Years of experience delivering successful projects for businesses like yours.",
//       color: "text-emerald-600 bg-emerald-50",
//     },
//     {
//       icon: FiClock,
//       title: "Fast Delivery",
//       description:
//         "Efficient processes ensure your project is completed on time and within budget.",
//       color: "text-amber-600 bg-amber-50",
//     },
//     {
//       icon: FiHeart,
//       title: "Ongoing Support",
//       description:
//         "We provide continuous support even after your project is launched.",
//       color: "text-violet-600 bg-violet-50",
//     },
//   ];

//   const stats = [
//     {
//       value: "95%",
//       label: "Client Retention",
//       icon: <FiTrendingUp />,
//       color: "text-blue-600",
//     },
//     {
//       value: "4.9/5",
//       label: "Average Rating",
//       icon: <FiAward />,
//       color: "text-emerald-600",
//     },
//     {
//       value: "50+",
//       label: "Happy Clients",
//       icon: <FiUsers />,
//       color: "text-amber-600",
//     },
//     {
//       value: "100+",
//       label: "Projects Delivered",
//       icon: <FiCheckCircle />,
//       color: "text-violet-600",
//     },
//   ];

//   return (
//     <section id="why-us" className="section-padding bg-white">
//       <div className="container-custom">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm mb-6 border border-emerald-100">
//             <FiCheckCircle className="text-emerald-600" />
//             Why We Stand Out
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//             Why Choose <span className="text-blue-700">DigitalGrowth</span>
//           </h2>
//           <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//             We're your dedicated digital partner, combining expertise with a
//             personalized approach to deliver exceptional results and outstanding
//             service.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Left Content - Reasons */}
//           <div className="space-y-8">
//             {reasons.map((reason, index) => (
//               <div
//                 key={index}
//                 className="group flex items-start gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
//               >
//                 <div
//                   className={`w-14 h-14 rounded-xl ${reason.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <reason.icon className="w-7 h-7" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
//                     {reason.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {reason.description}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* Trust Indicators */}
//             <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
//               <div className="flex items-center gap-4 mb-4">
//                 <FiShield className="w-6 h-6 text-blue-600" />
//                 <h4 className="text-lg font-bold text-gray-900">
//                   Trust & Transparency
//                 </h4>
//               </div>
//               <ul className="space-y-3">
//                 {[
//                   "Clear project timelines and milestones",
//                   "Regular progress updates and reports",
//                   "No hidden fees or surprises",
//                   "Flexible engagement models",
//                 ].map((item, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center text-sm text-gray-700"
//                   >
//                     <FiCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Content - Stats & CTA */}
//           <div>
//             {/* Stats Grid */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
//               <div className="flex items-center gap-3 mb-8">
//                 <FiTrendingUp className="w-6 h-6 text-blue-600" />
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   Our Track Record
//                 </h3>
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 {stats.map((stat, index) => (
//                   <div
//                     key={index}
//                     className="text-center p-5 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
//                   >
//                     <div className="flex items-center justify-center gap-2 mb-3">
//                       <span className={`text-2xl ${stat.color}`}>
//                         {stat.icon}
//                       </span>
//                       <div className={`text-3xl font-bold ${stat.color}`}>
//                         {stat.value}
//                       </div>
//                     </div>
//                     <div className="text-sm font-medium text-gray-700">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
//               <div className="flex items-start gap-4 mb-6">
//                 <FiMessageSquare className="w-8 h-8 text-blue-600 flex-shrink-0" />
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     Ready to Grow Together?
//                   </h3>
//                   <p className="text-gray-600">
//                     Join our satisfied clients and take your business to the
//                     next level with our expert solutions.
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <Button
//                   variant="primary"
//                   href="#contact"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
//                 >
//                   Schedule Free Strategy Call
//                 </Button>

//                 <div className="text-center">
//                   <div className="text-xs text-gray-500 mb-2">
//                     What to expect:
//                   </div>
//                   <div className="flex flex-wrap justify-center gap-3">
//                     <span className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200">
//                       30-minute call
//                     </span>
//                     <span className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200">
//                       No obligation
//                     </span>
//                     <span className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200">
//                       Custom plan
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import {
  FiUsers,
  FiAward,
  FiClock,
  FiHeart,
  FiCheckCircle,
  FiTrendingUp,
  FiShield,
  FiMessageSquare,
} from "react-icons/fi";
import Button from "../ui/Button";

export default function WhyUs() {
  // const reasons = [
  //   {
  //     icon: FiUsers,
  //     title: "Client-Focused",
  //     description: "We prioritize your business goals to achieve results.",
  //     color: "text-blue-600 bg-blue-50",
  //   },
  //   {
  //     icon: FiAward,
  //     title: "Proven Expertise",
  //     description: "Years of experience delivering successful projects.",
  //     color: "text-emerald-600 bg-emerald-50",
  //   },
  //   {
  //     icon: FiClock,
  //     title: "Fast Delivery",
  //     description: "Efficient processes, on-time completion.",
  //     color: "text-amber-600 bg-amber-50",
  //   },
  //   {
  //     icon: FiHeart,
  //     title: "Ongoing Support",
  //     description: "Continuous support after project launch.",
  //     color: "text-violet-600 bg-violet-50",
  //   },
  // ];
const reasons = [
  {
    icon: FiUsers,
    title: "Direct work with developers",
    description:
      "You communicate directly with the people building your product.",
    color: "text-blue-600 bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: FiAward,
    title: "Careful, quality-driven builds",
    description: "We take limited projects to ensure attention and quality.",
    color: "text-emerald-600 bg-emerald-50",
    border: "border-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: FiClock,
    title: "Clear timelines",
    description: "Simple plans, realistic deadlines, no false promises.",
    color: "text-amber-600 bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-500",
  },
  {
    icon: FiHeart,
    title: "Long-term support",
    description: "We don't disappear after delivery.",
    color: "text-violet-600 bg-violet-50",
    border: "border-violet-100",
    iconColor: "text-violet-500",
  },
];
  // const stats = [
  //   {
  //     value: "95%",
  //     label: "Client Retention",
  //     icon: <FiTrendingUp />,
  //     color: "text-blue-600",
  //   },
  //   {
  //     value: "4.9/5",
  //     label: "Avg Rating",
  //     icon: <FiAward />,
  //     color: "text-emerald-600",
  //   },
  //   {
  //     value: "50+",
  //     label: "Happy Clients",
  //     icon: <FiUsers />,
  //     color: "text-amber-600",
  //   },
  //   {
  //     value: "100+",
  //     label: "Projects",
  //     icon: <FiCheckCircle />,
  //     color: "text-violet-600",
  //   },
  // ];
const stats = [
  {
    value: "Direct",
    label: "Developer Communication",
    icon: <FiUsers />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    value: "In-house",
    label: "No Outsourcing",
    icon: <FiShield />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    value: "Focused",
    label: "Limited Projects at a Time",
    icon: <FiCheckCircle />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
  {
    value: "Transparent",
    label: "Pricing & Timelines",
    icon: <FiTrendingUp />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
  },
];
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium text-xs mb-4 border border-emerald-100">
            <FiCheckCircle className="text-emerald-600 text-sm" />
            Why We Stand Out
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Why Choose <span className="text-blue-600">DigitalGrowth</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Your digital partner, combining expertise with personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Content - Reasons */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${reason.color} flex items-center justify-center flex-shrink-0`}
                >
                  <reason.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}

            {/* Trust Indicators */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FiShield className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-semibold text-gray-900">
                  Trust & Transparency
                </h4>
              </div>
              <ul className="space-y-2">
                {[
                  "Clear timelines and milestones",
                  "Regular progress updates",
                  "No hidden fees",
                  "Flexible models",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs text-gray-700"
                  >
                    <FiCheckCircle className="w-3 h-3 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Stats & CTA */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-5">
                <FiTrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Our Track Record
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 border border-gray-100"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <span className={`text-lg ${stat.color}`}>
                        {stat.icon}
                      </span>
                      <div className={`text-xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-start gap-3 mb-4">
                <FiMessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Ready to Grow Together?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Join our clients and take your business to the next level.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="primary"
                  href="#contact"
                  size="sm"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm"
                >
                  Schedule Strategy Call
                </Button>

                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">
                    What to expect:
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="text-xs px-2 py-0.5 bg-white rounded border border-gray-200">
                      30-min call
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-white rounded border border-gray-200">
                      No obligation
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-white rounded border border-gray-200">
                      Custom plan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}