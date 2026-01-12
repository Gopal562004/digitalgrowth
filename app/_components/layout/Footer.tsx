"use client";

import { useState } from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUp,
  FiCheckCircle,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter email:", email);
    setEmail("");
    // Add your newsletter logic here
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-blue-700">Digital</span>
                <span className="text-emerald-600">Growth</span>
              </div>
              <div className="ml-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 font-medium">
                  Trusted Partner
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Helping businesses grow with powerful, results-driven digital
              solutions.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: FiFacebook, label: "Facebook" },
                { icon: FiTwitter, label: "Twitter" },
                { icon: FiInstagram, label: "Instagram" },
                { icon: FiLinkedin, label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "Process", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-700 transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-100 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                "Website Development",
                "SEO Optimization",
                "E-commerce",
                "Digital Marketing",
                "Brand Strategy",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-blue-700 transition-colors flex items-center gap-2 group"
                  >
                    <FiCheckCircle className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-700">Phone</div>
                  <a
                    href="tel:+918237742040"
                    className="text-gray-900 font-medium hover:text-blue-700"
                  >
                    +91 82377 42040
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-700">Email</div>
                  <a
                    href="mailto:hello@digitalgrowth.com"
                    className="text-gray-900 font-medium hover:text-blue-700"
                  >
                    hello@digitalgrowth.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-700">Location</div>
                  <div className="text-gray-900 font-medium">
                    Mumbai, Maharashtra
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h5 className="font-medium text-gray-900">Stay Updated</h5>
              </div>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                Get digital growth tips & updates
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} DigitalGrowth. All rights reserved. |
              <a href="#" className="mx-2 hover:text-blue-700">
                Privacy Policy
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:text-blue-700">
                Terms of Service
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Built with ❤️ for growing businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
