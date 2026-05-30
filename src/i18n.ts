import en from "./locales/en/translation.json";
import pt from "./locales/pt/translation.json";

const resources: Record<string, Record<string, any>> = { en, pt };

function getLangFromPath(): string {
  if (typeof window === "undefined") return "en";
  const match = window.location.pathname.match(/^\/(en|pt)/);
  return match ? match[1] : "en";
}

function lookup(resource: any, key: string): string {
  const parts = key.split(".");
  let current = resource;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return key;
    current = current[part];
  }
  return typeof current === "string" ? current : key;
}

let currentLang = getLangFromPath();
const listeners = new Set<() => void>();

export function setLanguage(lang: string) {
  if (lang === currentLang) return;
  currentLang = lang;
  listeners.forEach((fn) => fn());
}

export function getLanguage(): string {
  return currentLang;
}

export function t(key: string): string {
  const resource = resources[currentLang];
  return resource ? lookup(resource, key) : key;
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export { resources };
