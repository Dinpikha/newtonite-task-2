import useSmoothNumber from "../hooks/useSmoothNumber";
import { growthPath, investedPath, valueAfter } from "../lib/growth";
import { inr } from "../lib/format";
import { useLang } from "../i18n";
// Illustration only. Dashed = what you put in. Green = illustration at the assumed rate (NOT a forecast).
export default function GrowthChart({ amount, lite }) {
  const { t } = useLang();
  const a = useSmoothNumber(amount, lite);
  return (
    <>
      <svg viewBox="0 0 320 110" width="100%" role="img" aria-label={t("chart.aria")}>
        <line x1="6" y1="100" x2="316" y2="100" stroke="#0B132B" />
        <path d={investedPath(a)} fill="none" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d={growthPath(a)} fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="tiny" style={{ fontSize: 13, color: "#0B132B" }}>{t("chart.cap", { amt: inr(amount), end: inr(valueAfter(amount)) })}</p>
    </>
  );
}
