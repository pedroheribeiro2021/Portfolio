import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { Button } from "@/styles/Buttons";
import { FaMoon, FaSun } from "react-icons/fa";
import { useI18n } from "@/utils/i18n";

const PortfolioApp = () => {
  const { locale, t } = useI18n();
  const [dark, setDark] = useState(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const seo = {
      "pt-BR": {
        title: "Pedro Ribeiro | Software Engineer",
        description: "Pedro Ribeiro é Software Engineer com foco em React, TypeScript, Next.js e aplicações web responsivas.",
      },
      en: {
        title: "Pedro Ribeiro | Software Engineer",
        description: "Pedro Ribeiro is a Software Engineer focused on React, TypeScript, Next.js and responsive web applications.",
      },
      es: {
        title: "Pedro Ribeiro | Software Engineer",
        description: "Pedro Ribeiro es Software Engineer enfocado en React, TypeScript, Next.js y aplicaciones web responsivas.",
      },
    }[locale];
    document.title = seo.title;
    document.documentElement.lang = locale;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
  }, [locale]);
  return (
    <GlobalStyle dark={dark}>
        <Button type="themeToggle" aria-label={dark ? t("themeLight") : t("themeDark")} onClick={() => setDark((value) => !value)}>
          {dark ? <FaSun /> : <FaMoon />}
        </Button>
        <NavBar />
        <Home />
        <Footer />
    </GlobalStyle>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <PortfolioApp />
    </I18nProvider>
  </React.StrictMode>
);
