"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/app/data/testimonials";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FiStar
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-200"
          }`}
        />
      ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <FiCheckCircle /> Client Stories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client <span className="text-blue-700">Feedback</span>
          </h2>
          <p className="text-gray-600">
            Real feedback from businesses we've helped succeed.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-blue-700">
                {current.name.charAt(0)}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">{renderStars(current.rating)}</div>
              </div>

              <blockquote className="text-gray-800 mb-5">
                "{current.quote}"
              </blockquote>

              <div>
                <div className="font-semibold text-gray-900">
                  {current.name}
                </div>
                <div className="text-sm text-gray-600">
                  {current.position}, {current.company}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
            <div className="text-gray-700">{current.category}</div>
            <div className="text-gray-500">{current.date}</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={prev}
            className="p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50"
          >
            <FiChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <div
              key={i}
              className={`p-5 rounded-lg border cursor-pointer transition-all ${
                currentIndex === i
                  ? "border-blue-300 bg-blue-50"
                  : "border-gray-200 hover:border-blue-200"
              }`}
              onClick={() => setCurrentIndex(i)}
            >
              <div className="flex gap-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-700">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="border border-gray-200 rounded-xl p-8 max-w-md mx-auto">
            <h3 className="font-bold text-gray-900 mb-3">Share Your Story</h3>
            <p className="text-sm text-gray-600 mb-6">
              Become our next success story.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
