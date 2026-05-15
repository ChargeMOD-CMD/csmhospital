import { Link } from "@tanstack/react-router";
import { Activity, Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 border border-white/5 shadow-2xl shadow-black/40 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground glow-cyan transition-transform duration-500 group-hover:rotate-180">
            <Activity className="h-5 w-5" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-full animate-pulse-ring border border-[var(--cyan-glow)] opacity-50" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-[var(--cyan-glow)] transition-colors">
            CSM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)]">Hospital</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 rounded-full text-zinc-400 hover:text-white transition-all duration-300 [&.active]:text-white [&.active]:bg-white/10 hover:bg-white/5 overflow-hidden group"
              activeOptions={{ exact: l.to === "/" }}
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/appointment"
            className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] px-5 py-2 text-sm font-semibold text-primary-foreground glow-cyan transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--cyan-glow)]"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full h-10 w-10 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-[var(--cyan-glow)] transition-colors">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-black/80 backdrop-blur-xl border-l border-white/10 pt-16">
              <nav className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  {links.map((l) => (
                    <SheetClose asChild key={l.to}>
                      <Link
                        to={l.to}
                        className="text-lg font-medium text-zinc-400 hover:text-white hover:pl-2 transition-all duration-300 [&.active]:text-[var(--cyan-glow)] flex items-center justify-between border-b border-white/5 pb-2"
                        activeOptions={{ exact: l.to === "/" }}
                      >
                        {l.label}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 [.active_&]:opacity-100 [.active_&]:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <SheetClose asChild>
                  <Link
                    to="/appointment"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] px-5 py-3 text-base font-semibold text-primary-foreground glow-cyan mt-4"
                  >
                    Book Appointment <ArrowRight className="w-5 h-5" />
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
