import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-hospital.jpg";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden pt-32 pb-20">
      {/* Background image with overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Futuristic CSM Hospital interior with holographic medical interfaces"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 ring-grid opacity-50" />
      </div>

      {/* Floating orbs */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[var(--cyan-glow)]/20 blur-3xl animate-float" />
      <div className="absolute top-1/2 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--teal-glow)]/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--cyan-glow)]" />
            AI-Powered Medical Intelligence · Live
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Advanced Care
            <br />
            <span className="text-gradient">Beyond Tomorrow</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Step into a quantum healing gateway where AI-driven diagnostics, holographic
            consultations, and compassionate medical experts converge to redefine what
            healthcare can feel like.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] px-6 py-3 text-sm font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.03]"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+911800200200"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4 text-[var(--cyan-glow)]" />
              Emergency · 24/7
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { v: "120+", l: "Specialists" },
              { v: "40+", l: "Departments" },
              { v: "1.2M", l: "Lives healed" },
              { v: "24/7", l: "Emergency" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4 text-center">
                <div className="font-display text-2xl font-semibold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          {/* EKG line */}
          <svg
            className="mt-16 h-16 w-full max-w-3xl text-[var(--cyan-glow)]"
            viewBox="0 0 800 80"
            fill="none"
          >
            <path
              d="M0 40 L150 40 L180 40 L200 10 L220 70 L240 25 L260 55 L280 40 L450 40 L470 40 L490 15 L510 65 L530 30 L550 40 L800 40"
              stroke="currentColor"
              strokeWidth="2"
              className="animate-ekg"
              style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
