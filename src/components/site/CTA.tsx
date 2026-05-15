import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16 text-center">
          <div className="absolute inset-0 -z-10 ring-grid opacity-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-[var(--cyan-glow)]/20 blur-3xl" />
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Your healing journey <span className="text-gradient">begins now</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a consultation in under a minute. Our AI assistant will match you with
            the right specialist and the soonest available time.
          </p>
          <Link
            to="/appointment"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] px-7 py-3.5 text-sm font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.03]"
          >
            Book Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
