import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import { isPan } from "../lib/validators";
import { FREE_NAVIGATION } from "../config/flow";
import StepHeader from "../components/StepHeader";
import TextField from "../components/TextField";
import BeejFill from "../components/BeejFill";
// SCREEN 4: PAN. Valid format -> border turns emerald -> verification starts by itself.
export default function Pan({ back, verify }) {
  const { t } = useLang();
  const [pan, setPan] = useState("");
  const state = pan.length < 10 ? "" : isPan(pan) ? "ok" : "bad";
  useEffect(() => {
    if (state !== "ok") return;
    const id = setTimeout(() => verify("pan"), 450);
    return () => clearTimeout(id);
  }, [state]);
  return (
    <>
      <StepHeader n={1} onBack={back} />
      <h2>{t("pan.title")}</h2>
      <TextField label={t("pan.label")} state={state} value={pan} maxLength={10} placeholder="ABCDE1234F" autoCapitalize="characters"
        onChange={(e) => setPan(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))} />
      <p className="tiny" style={{ fontSize: 13 }}>{state === "ok" ? t("pan.ok") : state === "bad" ? t("pan.bad") : t("pan.help")}</p>
      <BeejFill k={0} />
      <button className="btn" disabled={!FREE_NAVIGATION && state !== "ok"} onClick={() => verify("pan")}>{t("pan.btn")}</button>
    </>
  );
}
