import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import { isAccount, isIfsc } from "../lib/validators";
import { FREE_NAVIGATION } from "../config/flow";
import StepHeader from "../components/StepHeader";
import TextField from "../components/TextField";
import BeejFill from "../components/BeejFill";
// SCREEN 6: bank account. Both fields valid -> both borders go emerald -> auto-verify.
export default function Bank({ back, verify }) {
  const { t } = useLang();
  const [acc, setAcc] = useState("");
  const [ifsc, setIfsc] = useState("");
  const ok = isAccount(acc) && isIfsc(ifsc);
  useEffect(() => {
    if (!ok) return;
    const id = setTimeout(() => verify("bank"), 450);
    return () => clearTimeout(id);
  }, [ok]);
  return (
    <>
      <StepHeader n={3} onBack={back} />
      <h2>{t("bank.title")}</h2>
      <TextField label={t("bank.acc")} state={isAccount(acc) ? "ok" : ""} value={acc} maxLength={18} inputMode="numeric" placeholder="000000000000"
        onChange={(e) => setAcc(e.target.value.replace(/\D/g, ""))} />
      <TextField label={t("bank.ifsc")} state={isIfsc(ifsc) ? "ok" : ""} value={ifsc} maxLength={11} placeholder="ABCD0123456"
        onChange={(e) => setIfsc(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))} />
      <p className="tiny" style={{ fontSize: 13 }}>{t("bank.help")}</p>
      <BeejFill k={2} />
      <button className="btn" disabled={!FREE_NAVIGATION && !ok} onClick={() => verify("bank")}>{t("bank.btn")}</button>
    </>
  );
}
