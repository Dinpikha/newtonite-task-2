import { useState } from "react";
import { useLang } from "../i18n";
import Beej from "../components/Beej";
import LangToggle from "../components/LangToggle";
import Risk from "../components/Risk";
// SCREEN 2: app entry. The biometric scan is simulated.
export default function Gate({ next }) {
  const { t } = useLang();
  const [scanning, setScanning] = useState(false);
  return (
    <>
      <div className="row" style={{ justifyContent: "flex-end" }}><LangToggle /></div>
      <div className="fl col" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <Beej k={0} w={120} /><h1>{t("gate.title")}</h1><p className="mut">{t("gate.sub")}</p>
      </div>
      <button className="btn" onClick={() => { setScanning(true); setTimeout(next, 800); }}>{scanning ? t("gate.scanning") : t("gate.btn")}</button>
      <Risk />
    </>
  );
}
