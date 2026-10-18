import { useEffect } from "react";
import { useLang } from "../i18n";
import Beej from "../components/Beej";
// SCREEN 8: Beej in full bloom. Moves on by itself after 1.5s.
export default function Welcome({ next }) {
  const { t } = useLang();
  useEffect(() => { const id = setTimeout(next, 1500); return () => clearTimeout(id); }, []);
  return (
    <div className="fl col" style={{ justifyContent: "center" }}>
      <div className="gw"><Beej k={4} w={170} /></div>
      <p className="cap" style={{ color: "#047857" }}>{t("wel.status")}</p>
      <h1 style={{ fontWeight: 500 }}>{t("wel.title")}</h1>
      <p className="mut">{t("wel.sub")}</p>
    </div>
  );
}
