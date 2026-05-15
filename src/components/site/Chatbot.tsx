import { useState } from "react";
import { Activity, X, Send } from "lucide-react";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open CSM MedAssist"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground glow-cyan transition-transform hover:scale-110"
      >
        {open ? <X className="h-5 w-5" /> : <Activity className="h-5 w-5 animate-heartbeat" />}
        {!open && (
          <span className="absolute inset-0 rounded-full border border-[var(--cyan-glow)] animate-pulse-ring" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[22rem] max-w-[calc(100vw-2rem)] glass-strong rounded-3xl overflow-hidden">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground">
              <Activity className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">CSM MedAssist AI</div>
              <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-glow)]" /> Online
              </div>
            </div>
          </div>
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto text-sm">
            <div className="glass rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              Hi, I'm MedAssist. I can help with appointments, doctors, symptoms or emergencies. How can I help today?
            </div>
            <div className="ml-auto rounded-2xl rounded-tr-sm bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] px-3 py-2 max-w-[85%] text-primary-foreground">
              Book a cardiologist tomorrow morning.
            </div>
            <div className="glass rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              Found 3 cardiologists with availability between 9–11 AM. Want me to confirm with Dr. Arjun Mehta at 9:30?
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Type your message…"
            />
            <button
              type="submit"
              className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
