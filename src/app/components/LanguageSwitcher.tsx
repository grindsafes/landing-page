import { useLocation } from "react-router";

const langs = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export function LanguageSwitcher() {
  const location = useLocation();
  const currentLang = location.pathname.startsWith("/pt") ? "pt" : "en";

  return (
    <div className="flex items-center gap-1 border border-border rounded-md overflow-hidden">
      {langs.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <a
            key={lang.code}
            href={`/${lang.code}`}
            onClick={(e) => {
              if (!isActive) {
                e.preventDefault();
                window.location.href = `/${lang.code}`;
              } else {
                e.preventDefault();
              }
            }}
            className={`px-2.5 py-1 text-xs font-medium transition-colors no-underline ${
              isActive
                ? "bg-foreground text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {lang.label}
          </a>
        );
      })}
    </div>
  );
}
