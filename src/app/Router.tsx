import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router";
import App from "./App";

const PORTUGUESE_COUNTRIES = new Set([
  "BR", "PT", "AO", "MZ", "CV", "GW", "ST", "TL", "GQ", "MO",
]);

const PORTUGUESE_TIMEZONES = new Set([
  "America/Sao_Paulo", "America/Bahia", "America/Belem",
  "America/Campo_Grande", "America/Cuiaba", "America/Fortaleza",
  "America/Maceio", "America/Manaus", "America/Noronha",
  "America/Porto_Velho", "America/Recife", "America/Rio_Branco",
  "America/Santarem", "America/Boa_Vista", "America/Eirunepe",
  "Europe/Lisbon", "Europe/Porto", "Europe/Funchal",
  "Atlantic/Azores", "Atlantic/Madeira",
  "Africa/Luanda", "Africa/Maputo", "Africa/Bissau", "Africa/Sao_Tome",
  "Asia/Dili", "Asia/Macau",
]);

function detectFromBrowser(): string | null {
  const langs = [
    navigator.language,
    ...(navigator.languages || []),
  ];
  for (const l of langs) {
    if (l?.startsWith("pt")) return "pt";
  }
  return null;
}

function detectFromTimezone(): string | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && PORTUGUESE_TIMEZONES.has(tz)) return "pt";
  } catch {}
  return null;
}

async function fetchGeoCountry(): Promise<string | null> {
  const services = [
    { url: "https://ipinfo.io/json", extract: (d: any) => d.country },
    { url: "http://ip-api.com/json/?fields=countryCode", extract: (d: any) => d.countryCode },
  ];

  for (const { url, extract } of services) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
      if (!res.ok) continue;
      const data = await res.json();
      const code = extract(data);
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
    let cancelled = false;

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

    const fromBrowser = detectFromBrowser();
    const fromTz = detectFromTimezone();
    const detected = fromBrowser || fromTz;

    if (detected === "pt") {
      sessionStorage.setItem("geo_language", "pt");
      setLang("pt");
      return;
    }

    fetchGeoCountry()
      .then((country) => {
        if (cancelled) return;
        if (country && PORTUGUESE_COUNTRIES.has(country)) {
          sessionStorage.setItem("geo_language", "pt");
          setLang("pt");
        } else {
          sessionStorage.setItem("geo_language", "en");
          setLang("en");
        }
      })
      .catch(() => {
        if (cancelled) return;
        setLang(detected || "en");
      });

    return () => { cancelled = true; };
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
