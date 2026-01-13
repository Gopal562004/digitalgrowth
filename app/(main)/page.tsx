import Hero from "@/app/_components/sections/Hero";
import Services from "@/app/_components/sections/Services";
import WhyUs from "@/app/_components/sections/WhyUs";
import Projects from "@/app/_components/sections/Projects";
import Process from "@/app/_components/sections/Process";
import Testimonials from "@/app/_components/sections/Testimonials";
import Contact from "@/app/_components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      {/* <Process /> */}
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
