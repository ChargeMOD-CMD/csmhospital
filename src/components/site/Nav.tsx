import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function Nav() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/departments", label: "Departments" },
    { to: "/doctors", label: "Doctors" },
    { to: "/appointment", label: "Appointment" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground glow-cyan">
            <Activity className="h-4 w-4" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-full animate-pulse-ring border border-[var(--cyan-glow)]" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            CSM <span className="text-gradient">Hospital</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground [&.active]:bg-white/5"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/appointment"
          className="rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] px-4 py-2 text-sm font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.03]"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}
