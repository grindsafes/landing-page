import { useEffect, useState } from "react";
import { useTranslation } from "../useTranslation";
import { DashboardMockup } from "./components/DashboardMockup";
import { CheckCircle, ArrowRight, BarChart3, Shield, TrendingUp, Clock, Users, Layers, Linkedin } from "lucide-react";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export default function App({ lang }: { lang: string }) {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t("meta.description"));
    }
  }, [lang, t]);

  const features = [
    {
      icon: TrendingUp,
      title: t("features.items.0.title"),
      description: t("features.items.0.description"),
    },
    {
      icon: BarChart3,
      title: t("features.items.1.title"),
      description: t("features.items.1.description"),
    },
    {
      icon: Layers,
      title: t("features.items.2.title"),
      description: t("features.items.2.description"),
    },
    {
      icon: Shield,
      title: t("features.items.3.title"),
      description: t("features.items.3.description"),
    },
    {
      icon: Clock,
      title: t("features.items.4.title"),
      description: t("features.items.4.description"),
    },
    {
      icon: Users,
      title: t("features.items.5.title"),
      description: t("features.items.5.description"),
    },
  ];

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
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur px-6">
        <div className="max-w-7xl mx-auto h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt={t("nav.logoAlt")} className="h-6" />
          </div>

          <div className="hidden md:flex items-center gap-6">
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#waitlist"
              className="bg-foreground text-primary-foreground px-4 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
              style={{ fontSize: "13px", fontWeight: 500 }}
            >
              {t("nav.discordButton")}
            </a>
          </div>

          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t("nav.mobileMenuToggle")}
          >
            <div className="w-5 h-px bg-foreground mb-1.5" />
            <div className="w-5 h-px bg-foreground mb-1.5" />
            <div className="w-5 h-px bg-foreground" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Gradient blur orbs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
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

        <div className="max-w-7xl mx-auto relative flex flex-col items-center text-center">
          <div className="max-w-3xl w-full flex flex-col items-center">
            <div
              className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 mb-8"
              style={{ fontSize: "12px", color: "#71717a" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] inline-block" />
              {t("hero.badge")}
            </div>

            <h1
              className="text-foreground mb-6 tracking-tight"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}
              dangerouslySetInnerHTML={{ __html: t("hero.headline") }}
            />

            <p
              className="text-muted-foreground mb-10 max-w-lg text-center"
              style={{ fontSize: "17px", lineHeight: 1.65 }}
            >
              {t("hero.subheadline")}
            </p>

            {/* Waitlist form */}
            <div id="waitlist" style={{ display: "none" }}>
              {submitted ? (
                <div className="flex items-center gap-3 bg-secondary border border-border rounded-lg px-5 py-4 max-w-md">
                  <CheckCircle className="w-5 h-5 text-[#16a34a] shrink-0" />
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 500 }}>{t("cta.successMessage")}</p>
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
                    placeholder={t("hero.emailPlaceholder")}
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
                    {t("hero.ctaButton")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-muted-foreground mt-2.5 text-center" style={{ fontSize: "12px" }}>
                {t("hero.disclaimer")}
              </p>
            </div>

            <div className="mt-4 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all"
                style={{ backgroundColor: "#5865F2", color: "#fff", fontSize: "14px", fontWeight: 500 }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                {t("hero.discordButton")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-transparent via-border/30 to-transparent rounded-2xl" />
            <div className="relative">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Divider with label */}
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-6 mb-20">
        <div className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground" style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {t("features.sectionTitle")}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Features grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <h2
              className="tracking-tight mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em" }}
            >
              {t("features.sectionSubtitle")}
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: "16px", lineHeight: 1.6 }}>
              {t("features.sectionDescription")}
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
        <div className="max-w-7xl mx-auto">
          <div className="bg-foreground text-primary-foreground rounded-2xl px-8 py-14 md:py-20 text-center">
            <p
              className="text-primary-foreground/50 mb-4"
              style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              {t("cta.eyebrow")}
            </p>
            <h2
              className="text-primary-foreground mb-5 tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}
              dangerouslySetInnerHTML={{ __html: t("cta.headline") }}
            />
            <p className="text-primary-foreground/60 mb-10 max-w-md mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
              {t("cta.subtext")}
            </p>
            <div style={{ display: "none" }}>
              {submitted ? (
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-6 py-3">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span style={{ fontSize: "14px" }}>{t("cta.successMessage")}</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto"
                >
                  <input
                    type="email"
                    required
                    placeholder={t("cta.emailPlaceholder")}
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
                    {t("cta.joinButton")}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all"
                style={{ backgroundColor: "#5865F2", color: "#fff", fontSize: "14px", fontWeight: 500 }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                {t("cta.discordButton")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt={t("footer.logoAlt")} className="h-5" />
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={t("footer.linkedinLabel")}>
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={t("footer.discordLabel")}>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
