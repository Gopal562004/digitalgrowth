"use client";

import { useState, useEffect } from "react";
import {
  FiSearch,
  FiPenTool,
  FiCode,
  FiTool,
  FiTrendingUp,
  FiMessageSquare,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import Button from "../ui/Button";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: FiSearch,
      title: "Discovery",
      description: "Understand goals, audience & requirements.",
      color: "blue",
      colorClass: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-300",
        full: "blue",
      },
    },
    {
      icon: FiPenTool,
      title: "Design",
      description: "Create wireframes, UI/UX & strategy.",
      color: "emerald",
      colorClass: {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
        border: "border-emerald-300",
        full: "emerald",
      },
    },
    {
      icon: FiCode,
      title: "Development",
      description: "Build with modern tech & best practices.",
      color: "violet",
      colorClass: {
        bg: "bg-violet-100",
        text: "text-violet-600",
        border: "border-violet-300",
        full: "violet",
      },
    },
    {
      icon: FiTool,
      title: "Testing",
      description: "Quality, performance & security testing.",
      color: "amber",
      colorClass: {
        bg: "bg-amber-100",
        text: "text-amber-600",
        border: "border-amber-300",
        full: "amber",
      },
    },
    {
      icon: FiTrendingUp,
      title: "Launch",
      description: "Deploy & ensure smooth operation.",
      color: "blue",
      colorClass: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-300",
        full: "blue",
      },
    },
    {
      icon: FiMessageSquare,
      title: "Support",
      description: "Maintenance, updates & ongoing support.",
      color: "emerald",
      colorClass: {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
        border: "border-emerald-300",
        full: "emerald",
      },
    },
  ];

  // Auto-rotate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
            <FiCheckCircle />
            Our Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Simple <span className="text-blue-700">6-Step Process</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A streamlined approach ensuring quality, transparency, and success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          {/* Progress Bar */}
          <div className="relative mb-10">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">Start</span>
              <span className="text-sm text-gray-500">Complete</span>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = step.icon;

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`group relative p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? `${step.colorClass.border} bg-white shadow-lg scale-105`
                      : "border-gray-200 bg-gray-50 hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
                      isActive
                        ? `${step.colorClass.bg} ${step.colorClass.text} scale-110`
                        : `bg-gray-100 text-gray-500`
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-center">
                    <div
                      className={`text-xs font-semibold mb-1 ${
                        isActive ? step.colorClass.text : "text-gray-500"
                      }`}
                    >
                      Step {index + 1}
                    </div>
                    <h3
                      className={`font-bold mb-2 ${
                        isActive ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div
                      className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${step.colorClass.full}-500 rounded-full animate-pulse`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-xl ${currentStep.colorClass.bg} flex items-center justify-center`}
            >
              <IconComponent
                className={`w-7 h-7 ${currentStep.colorClass.text}`}
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500">
                Current Phase
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {currentStep.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Requirements analysis",
              "Weekly progress updates",
              "Quality assurance",
              "Client feedback sessions",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100"
              >
                <FiCheckCircle className={currentStep.colorClass.text} />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-10 border border-blue-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                Start Your Project Journey
              </h3>
            </div>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our proven 6-step process ensures your project is delivered on
              time, within budget, and exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Begin Discovery Phase
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                href="#contact"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300"
              >
                Download Process PDF
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <span className="flex items-center justify-center gap-2">
                <FiCheckCircle className="text-emerald-500" />
                Free 30-minute consultation • No obligation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
