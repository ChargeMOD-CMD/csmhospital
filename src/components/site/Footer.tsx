import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground">
              <Activity className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold">CSM Hospital</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Advanced Care Beyond Tomorrow. Pioneering AI-powered healthcare with
            compassionate, world-class medical expertise.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Hospital</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Departments</li>
            <li>Doctors</li>
            <li>Emergency</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Emergency: +91 1800 200 200</li>
            <li>care@csm-hospital.com</li>
            <li>Open 24/7 · 365 days</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} CSM Hospital. All rights reserved.
      </p>
    </footer>
  );
}
