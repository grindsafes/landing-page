import { useTranslation } from "../../useTranslation";

export function DashboardMockup() {
  const { t } = useTranslation();

  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="w-full bg-white border border-border rounded-xl overflow-hidden shadow-2xl"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-white">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
        </div>
        <span
          className="text-muted-foreground"
          style={{ fontSize: "11px", letterSpacing: "0.04em" }}
        >
          {t("dashboard.urlBarText")}
        </span>
        <div className="w-16" />
      </div>

      <img src="/product.svg" alt={t("dashboard.altText")} className="w-full" />
    </div>
  );
}
