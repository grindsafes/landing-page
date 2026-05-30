import { useState, useEffect } from "react";
import { t, setLanguage, getLanguage, subscribe } from "./i18n";

export function useTranslation() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const unsub = subscribe(() => forceUpdate((n) => n + 1));
    return unsub;
  }, []);

  return {
    t,
    i18n: {
      language: getLanguage(),
      changeLanguage: (lang: string) => setLanguage(lang),
    },
  };
}
