import { createFileRoute } from "@tanstack/react-router";
import { Doctors } from "@/components/site/Doctors";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors — CSM Hospital" },
      { name: "description", content: "Meet CSM Hospital's specialist doctors — leading consultants in cardiology, neurology, surgery and more." },
      { property: "og:title", content: "Doctors — CSM Hospital" },
      { property: "og:description", content: "World-class specialists supported by AI diagnostic intelligence." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <Doctors />
      <CTA />
    </div>
  ),
});
