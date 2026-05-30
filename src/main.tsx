
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import Router from "./app/Router.tsx";
import "./styles/index.css";
import "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
    </div>
  }>
    <Router />
  </Suspense>
);
