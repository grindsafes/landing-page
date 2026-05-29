import { useState } from "react";
import { DashboardMockup } from "./components/DashboardMockup";
import { CheckCircle, ArrowRight, BarChart3, Shield, TrendingUp, Clock, Users, Layers } from "lucide-react";


const features = [
  {
    icon: TrendingUp,
    title: "Bankroll Tracking",
    description: "Log every session and watch your equity curve build in real time. Import from poker sites or enter manually.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Win rate, ROI, EV per hour, variance analysis, and session heatmaps — all in one place.",
  },
  {
    icon: Layers,
    title: "Staking Management",
    description: "Track makeup, manage your horse relationships, and auto-calculate splits at settlement.",
  },
  {
    icon: Shield,
    title: "Bankroll Safety",
    description: "Set stop-loss limits, shot-taking thresholds, and get alerts before you move up stakes.",
  },
  {
    icon: Clock,
    title: "Session Timer",
    description: "Built-in session clock with live P&L tracking. Know your hourly rate as you play.",
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Share leaderboards and progress with your poker group. Friendly competition that sharpens focus.",
  },
];


export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
              <span className="text-primary-foreground" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                S
              </span>
            </div>
            <span style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.02em" }}>StackEdge</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {["Features", "Pricing", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontSize: "14px" }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: "14px" }}>
              Sign in
            </a>
            <a
              href="#waitlist"
              className="bg-foreground text-primary-foreground px-4 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
              style={{ fontSize: "13px", fontWeight: 500 }}
            >
              Join waitlist
            </a>
          </div>

          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-px bg-foreground mb-1.5" />
            <div className="w-5 h-px bg-foreground mb-1.5" />
            <div className="w-5 h-px bg-foreground" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
            {["Features", "Pricing", "Blog", "Sign in"].map((item) => (
              <a key={item} href="#" className="text-muted-foreground" style={{ fontSize: "14px" }}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Gradient blur orbs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top-left dark orb */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "-120px",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Top-right dark orb */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-80px",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.06) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Center-bottom dark orb */}
          <div
            style={{
              position: "absolute",
              top: "260px",
              left: "30%",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.03) 40%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          {/* Noise/grain overlay for texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
              opacity: 0.5,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative flex flex-col items-center text-center">
          <div className="max-w-2xl w-full flex flex-col items-center">
            <div
              className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 mb-8"
              style={{ fontSize: "12px", color: "#71717a" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] inline-block" />
              Now in private beta — 340 players on the list
            </div>

            <h1
              className="text-foreground mb-6 tracking-tight"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              Your poker finances,<br />
              <span className="text-muted-foreground">finally under control.</span>
            </h1>

            <p
              className="text-muted-foreground mb-10 max-w-lg text-center"
              style={{ fontSize: "17px", lineHeight: 1.65 }}
            >
              StackEdge is the financial OS for serious poker players. Track sessions, manage staking, analyze your edge, and grow your bankroll with clarity.
            </p>

            {/* Waitlist form */}
            <div id="waitlist">
              {submitted ? (
                <div className="flex items-center gap-3 bg-secondary border border-border rounded-lg px-5 py-4 max-w-md">
                  <CheckCircle className="w-5 h-5 text-[#16a34a] shrink-0" />
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 500 }}>You're on the list!</p>
                    <p className="text-muted-foreground" style={{ fontSize: "13px" }}>
                      We'll email you at{" "}
                      <span style={{ fontFamily: "JetBrains Mono, monospace" }}>{email}</span> when your spot is ready.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/10 transition-all"
                    style={{ fontSize: "14px" }}
                  />
                  <button
                    type="submit"
                    className="bg-foreground text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-foreground/90 active:scale-95 transition-all flex items-center gap-2 shrink-0"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    Get early access
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-muted-foreground mt-2.5 text-center" style={{ fontSize: "12px" }}>
                No credit card required. Free during beta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-transparent via-border/30 to-transparent rounded-2xl" />
            <div className="relative">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Divider with label */}
      <div className="flex items-center gap-4 max-w-6xl mx-auto px-6 mb-20">
        <div className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground" style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Everything you need
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Features grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <h2
              className="tracking-tight mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em" }}
            >
              Built for players who treat poker like a business.
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Every feature is designed around what actually matters at the table — and off it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white border border-border rounded-xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-foreground/5 transition-colors">
                    <Icon className="w-4 h-4 text-foreground" />
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-foreground text-primary-foreground rounded-2xl px-8 py-14 md:py-20 text-center">
            <p
              className="text-primary-foreground/50 mb-4"
              style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Limited spots available
            </p>
            <h2
              className="text-primary-foreground mb-5 tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}
            >
              Stop guessing.<br />Start winning.
            </h2>
            <p className="text-primary-foreground/60 mb-10 max-w-md mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Join 340+ serious players who are taking control of their poker finances.
            </p>
            {submitted ? (
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-6 py-3">
                <CheckCircle className="w-4 h-4 text-white" />
                <span style={{ fontSize: "14px" }}>You're on the list! We'll be in touch.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-all"
                  style={{ fontSize: "14px" }}
                />
                <button
                  type="submit"
                  className="bg-white text-foreground px-5 py-2.5 rounded-lg hover:bg-white/90 active:scale-95 transition-all shrink-0"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  Join waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center">
              <span className="text-white" style={{ fontSize: "10px", fontWeight: 700 }}>S</span>
            </div>
            <span className="text-muted-foreground" style={{ fontSize: "13px" }}>
              StackEdge © 2025
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontSize: "13px" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
