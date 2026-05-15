import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Ambulance } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CSM Hospital" },
      { name: "description", content: "Reach CSM Hospital — emergency hotline, WhatsApp support, address and live medical assistant." },
      { property: "og:title", content: "Contact — CSM Hospital" },
      { property: "og:description", content: "24/7 emergency support, WhatsApp care and instant medical assistance." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { i: Phone, t: "Emergency", v: "+91 1800 200 200", href: "tel:+911800200200" },
    { i: Ambulance, t: "Ambulance", v: "Request now", href: "#" },
    { i: MessageCircle, t: "WhatsApp", v: "Chat with care team", href: "#" },
    { i: Mail, t: "Email", v: "care@csm-hospital.com", href: "mailto:care@csm-hospital.com" },
  ];

  return (
    <section className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-glow)]">Hospital Contact Nexus</p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
          We're here, <span className="text-gradient">always</span>.
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="glass-strong rounded-3xl p-6 space-y-3">
            {items.map(({ i: Icon, t, v, href }) => (
              <a
                key={t}
                href={href}
                className="glass flex items-center gap-4 rounded-2xl p-4 hover:bg-white/10 transition-colors"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-glow)]/30 to-[var(--teal-glow)]/20 text-[var(--cyan-glow)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t}</div>
                  <div className="text-sm font-medium">{v}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 min-h-[20rem]">
            <div className="absolute inset-0 ring-grid opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyan-glow)]/10 via-transparent to-[var(--teal-glow)]/10" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs">
                <MapPin className="h-3.5 w-3.5 text-[var(--cyan-glow)]" /> CSM Hospital Campus
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Find us</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                CSM Hospital, Medical District, Sector 21<br />
                New Delhi · India · Open 24/7
              </p>
            </div>
            <div className="absolute bottom-6 right-6 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] glow-cyan">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
