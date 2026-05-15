import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Departments } from "@/components/site/Departments";
import { Doctors } from "@/components/site/Doctors";
import { Technology } from "@/components/site/Technology";
import { Emergency } from "@/components/site/Emergency";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Departments />
      <Doctors />
      <Technology />
      <Emergency />
      <Testimonials />
      <CTA />
    </>
  );
}
