import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import { STAGE_AFTER } from "../config/flow";
import Beej from "./Beej";
// Full-screen "verifying -> verified" after every KYC step, then onDone(). what: "pan" | "aadhaar" | "bank"
export default function VerifyOverlay({ what, onDone }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => setDone(true), 1200);  // replace with the real verification call
    const b = setTimeout(onDone, 2100);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  const label = t("what." + what);
  const [from, to] = STAGE_AFTER[what];
  return (
    <div id="ov" style={{ display: "flex" }} role="status" aria-live="polite">
      <Beej k={done ? to : from} w={70} />
      <h2 style={done ? { color: "#047857" } : null}>{done ? t("vfy.done", { what: label }) : t("vfy.ing", { what: label })}</h2>
      <p className="mut">{done ? t(what === "bank" ? "vfy.final" : "vfy.next") : t("vfy.keep")}</p>
    </div>
  );
}
