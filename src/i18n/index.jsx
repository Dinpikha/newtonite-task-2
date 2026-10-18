import { createContext, useContext, useEffect, useState } from "react";
import en from "./en";
import hi from "./hi";
import { template } from "../lib/format";

const DICTS = { en, hi };
const Ctx = createContext(null);

// Wrap the app once. Anywhere below: const { t, lang, toggle } = useLang();
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem("sprout-lang") || "en"; } catch { return "en"; } });
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("sprout-lang", lang); } catch {}
  }, [lang]);
  const t = (key, vars) => template(DICTS[lang][key] ?? DICTS.en[key] ?? key, vars);
  const toggle = () => setLang((l) => (l === "en" ? "hi" : "en"));
  return <Ctx.Provider value={{ t, lang, toggle }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
