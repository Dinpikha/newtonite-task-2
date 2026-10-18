import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import BeejFill from "../components/BeejFill";
// SCREEN 7: transparent checklist that ticks off one line at a time (the anti "is it stuck?" screen).
const KEYS = ["load.1", "load.2", "load.3", "load.4", "load.5"];
export default function Loading({ next, lite }) {
  const { t } = useLang();
  const [i, setI] = useState(0); // line currently running; lines before it are done
  useEffect(() => {
    const id = setTimeout(i < KEYS.length ? () => setI(i + 1) : next, i < KEYS.length ? (lite ? 300 : 600) : 600);
    return () => clearTimeout(id);
  }, [i]);
  return (
    <>
      <BeejFill k={3} w={130} />
      <h2 style={{ textAlign: "center" }}>{t("load.title")}</h2>
      <div className="card">
        <ul className="ck">
          {KEYS.map((k, n) => (
            <li key={k} className={n < i ? "d" : n === i ? "a" : ""}><b>{n < i ? "✓" : ""}</b>{t(k)}</li>
          ))}
        </ul>
      </div>
      <p className="mut" style={{ fontSize: 14 }}>{t("load.note")}</p>
    </>
  );
}
