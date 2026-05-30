import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router";
import App from "./App";

const PORTUGUESE_COUNTRIES = new Set([
  "BR", "PT", "AO", "MZ", "CV", "GW", "ST", "TL", "GQ", "MO",
]);

function detectBrowserLanguage(): string | null {
  const langs = [
    navigator.language,
    ...(navigator.languages || []),
  ];
  for (const l of langs) {
    if (l?.startsWith("pt")) return "pt";
  }
  return null;
}

async function fetchGeoCountry(): Promise<string | null> {
  const services = [
    "https://ipapi.co/json/",
    "https://ip-api.com/json/?fields=countryCode",
  ];

  for (const url of services) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (!res.ok) continue;
      const data = await res.json();
      const code = data.country || data.countryCode;
      if (code) return code.toUpperCase();
    } catch {
      continue;
    }
  }
  return null;
}

function LanguageDetect() {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    const redirect = sessionStorage.getItem("spa_redirect");
    if (redirect) {
      sessionStorage.removeItem("spa_redirect");
      const match = redirect.match(/^\/(en|pt)(\/|$)/);
      if (match) {
        setLang(match[1]);
        return;
      }
    }

    const stored = sessionStorage.getItem("geo_language");
    if (stored === "en" || stored === "pt") {
      setLang(stored);
      return;
    }

    const browserLang = detectBrowserLanguage();

    fetchGeoCountry()
      .then((country) => {
        if (country && PORTUGUESE_COUNTRIES.has(country)) {
          sessionStorage.setItem("geo_language", "pt");
          setLang("pt");
        } else if (browserLang === "pt") {
          sessionStorage.setItem("geo_language", "pt");
          setLang("pt");
        } else {
          sessionStorage.setItem("geo_language", "en");
          setLang("en");
        }
      })
      .catch(() => {
        setLang(browserLang || "en");
      });
  }, []);

  if (!lang) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <Navigate to={`/${lang}`} replace />;
}

function LangRoute() {
  const location = useLocation();
  const lang = location.pathname.match(/^\/(en|pt)/)?.[1] || "en";
  return <App key={lang} lang={lang} />;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageDetect />} />
        <Route path="/en" element={<LangRoute />} />
        <Route path="/en/*" element={<LangRoute />} />
        <Route path="/pt" element={<LangRoute />} />
        <Route path="/pt/*" element={<LangRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
