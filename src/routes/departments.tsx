import { createFileRoute } from "@tanstack/react-router";
import { Departments } from "@/components/site/Departments";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — CSM Hospital" },
      { name: "description", content: "Explore CSM Hospital's interconnected departments — Cardiology, Neurology, Emergency, ICU, Radiology and more." },
      { property: "og:title", content: "Departments — CSM Hospital" },
      { property: "og:description", content: "Smart, interconnected medical departments under one intelligent care system." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <Departments />
      <CTA />
    </div>
  ),
});
