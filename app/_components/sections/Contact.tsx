"use client";

import { useState } from "react";
import Button from "../ui/Button";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4">
            <FiMessageSquare /> Get in Touch
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-700">Us</span>
          </h2>
          <p className="text-gray-600">
            Ready to discuss your project? Send us a message.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:hello@digitalgrowth.com"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      hello@digitalgrowth.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a
                      href="tel:+918237742040"
                      className="text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      +91 82377 42040
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-sm text-gray-600">
                      Mon-Fri: 9AM-6PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FiCheckCircle className="text-emerald-500" />
                  <span className="text-sm font-medium text-gray-900">
                    Fast Response
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  We reply within 4 hours on business days
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We'll get back to you soon.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-blue-300 text-blue-700"
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Send Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <div>
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <FiSend className="w-4 h-4" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Prefer a quick call?{" "}
              <a
                href="tel:+918237742040"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Schedule a 15-minute discovery call →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
