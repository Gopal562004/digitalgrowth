import ServiceCard from "../cards/ServiceCard";
import { services } from "@/app/data/services";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Button from "../ui/Button";

export default function Services() {
  const benefits = [
    "30-day launch guarantee",
    "Dedicated project manager",
    "Monthly performance reports",
    "24/7 technical support",
    "SEO included in all plans",
    "Mobile-first approach",
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
            <FiCheckCircle className="text-emerald-500" />
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional <span className="text-blue-700">Digital Services</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            End-to-end digital solutions designed to elevate your online
            presence, drive traffic, and convert visitors into loyal customers.
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What&apos;s included with every project:
              </h3>
              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg"
                  >
                    <FiCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="primary"
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Get Custom Quote <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-10 text-center border border-blue-100">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              We specialize in creating tailored digital strategies that align
              with your unique business goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                href="tel:+918237742040"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 text-base"
              >
                Call: +91 82377 42040
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <span className="flex items-center justify-center gap-2">
                <FiCheckCircle className="text-emerald-500" />
                No obligation • 30-minute consultation • Expert advice
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
