import { Phone, Ambulance, Activity, MapPin } from "lucide-react";

export function Emergency() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-destructive/30 blur-3xl animate-pulse-ring" />
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-destructive/15 px-3 py-1 text-xs text-destructive-foreground">
                <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
                Live Emergency Network
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
                Every second <span className="text-gradient">accounted for</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                AI-assisted triage, GPS-tracked ambulances and a pre-alerted critical care
                team — so the moment you reach us, we're already three steps ahead.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+911800200200"
                  className="inline-flex items-center gap-2 rounded-full bg-destructive px-5 py-3 text-sm font-medium text-destructive-foreground glow-cyan transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> Call 1800 200 200
                </a>
                <a
                  href="#"
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm hover:bg-white/10"
                >
                  <Ambulance className="h-4 w-4 text-[var(--cyan-glow)]" /> Request Ambulance
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { i: Ambulance, t: "Ambulance ETA", v: "6 min" },
                { i: Activity, t: "Active Triage", v: "AI Live" },
                { i: MapPin, t: "Nearest Bay", v: "Bay 03" },
                { i: Phone, t: "Hotline", v: "24/7" },
              ].map(({ i: Icon, t, v }) => (
                <div key={t} className="glass rounded-2xl p-4">
                  <Icon className="h-5 w-5 text-[var(--cyan-glow)]" />
                  <div className="mt-3 text-xs text-muted-foreground">{t}</div>
                  <div className="font-display text-xl font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
