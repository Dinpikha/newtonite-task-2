import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n";
import { isAadhaar } from "../lib/validators";
import { FREE_NAVIGATION } from "../config/flow";
import StepHeader from "../components/StepHeader";
import TextField from "../components/TextField";
import BeejFill from "../components/BeejFill";
// SCREEN 5: Aadhaar number -> OTP row slides open -> 6th digit flashes emerald and auto-verifies.
export default function Aadhaar({ back, verify }) {
  const { t } = useLang();
  const [num, setNum] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const boxes = useRef([]);
  const numOk = isAadhaar(num);
  const otpOk = otp.every(Boolean);
  useEffect(() => { if (numOk) boxes.current[0]?.focus(); }, [numOk]);
  useEffect(() => {
    if (!otpOk) return;
    const id = setTimeout(() => verify("aadhaar"), 450);
    return () => clearTimeout(id);
  }, [otpOk]);
  const setDigit = (i, v) => {
    const d = v.replace(/\D/g, "").slice(-1);
    setOtp((o) => o.map((x, k) => (k === i ? d : x)));
    if (d) boxes.current[i + 1]?.focus();
  };
  return (
    <>
      <StepHeader n={2} onBack={back} />
      <h2>{t("aad.title")}</h2>
      <TextField label={t("aad.label")} state={numOk ? "ok" : ""} value={num} maxLength={12} inputMode="numeric" placeholder="XXXX XXXX XXXX"
        onChange={(e) => setNum(e.target.value.replace(/\D/g, ""))} />
      {!numOk && <p className="tiny" style={{ fontSize: 13 }}>{t("aad.hint")}</p>}
      <div id="otpw" className={numOk ? "on" : ""}>
        <p className="lab" style={{ marginBottom: 8 }}>{t("aad.otp")}</p>
        <div className="row" style={{ gap: 6 }}>
          {otp.map((d, i) => (
            <input key={i} ref={(el) => (boxes.current[i] = el)} className="otp" value={d} maxLength={1} inputMode="numeric"
              aria-label={`OTP ${i + 1}`} style={otpOk ? { borderColor: "#059669", borderWidth: 2 } : null}
              onChange={(e) => setDigit(i, e.target.value)} />
          ))}
        </div>
      </div>
      <BeejFill k={1} />
      <button className="btn" disabled={!FREE_NAVIGATION && !otpOk} onClick={() => verify("aadhaar")}>{t("aad.btn")}</button>
    </>
  );
}
