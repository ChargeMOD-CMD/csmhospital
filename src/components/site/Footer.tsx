import { Activity, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/50 px-6 pt-16 pb-8 overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--cyan-glow)]/10 blur-[120px] rounded-full pointer-events-none opacity-30" />
      
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 relative z-10">
        <div className="md:col-span-5 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground glow-cyan transition-transform duration-500 group-hover:rotate-180">
              <Activity className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[var(--cyan-glow)] transition-colors">
              CSM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)]">Hospital</span>
            </span>
          </Link>
          <p className="max-w-sm text-base text-zinc-400 leading-relaxed">
            Advanced Care Beyond Tomorrow. Pioneering AI-powered healthcare with
            compassionate, world-class medical expertise for a healthier future.
          </p>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-[var(--cyan-glow)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-base font-semibold text-white mb-6">Hospital</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            {["Departments", "Doctors", "Emergency", "Careers"].map((item) => (
              <li key={item}>
                <Link to={item === "Emergency" ? "/" : `/${item.toLowerCase()}`} className="group flex items-center gap-2 hover:text-white transition-colors w-fit">
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--cyan-glow)]" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-base font-semibold text-white mb-6">Newsletter</h4>
          <p className="text-sm text-zinc-400 mb-4">Subscribe to receive health tips and hospital updates.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--cyan-glow)] focus:ring-1 focus:ring-[var(--cyan-glow)] transition-all w-full"
            />
            <button className="whitespace-nowrap rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] px-6 py-2.5 text-sm font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-[1.03]">
              Subscribe
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-base font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-semibold text-white">Emergency:</span> +91 1800 200 200
              </li>
              <li>care@csm-hospital.com</li>
              <li>Open 24/7 · 365 days</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} CSM Hospital. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> for advanced healthcare
        </p>
      </div>
    </footer>
  );
}
