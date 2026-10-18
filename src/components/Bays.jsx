import { useLang } from "../i18n";
// The "keep these ready" list: PAN, Aadhaar-linked mobile, bank account. Used on the homepage AND the prep screen.
const ICONS = {
  pan: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M6 10h5M6 14h8" /></>,
  aad: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
  bank: <path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />,
};
const ROWS = [["pan", "prep.pan"], ["aad", "prep.aad"], ["bank", "prep.bank"]];
export default function Bays() {
  const { t } = useLang();
  return ROWS.map(([icon, key]) => (
    <div className="bay" key={icon}>
      <span className="ico">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B132B" strokeWidth="1.6" aria-hidden="true">{ICONS[icon]}</svg>
      </span>
      <p><b>{t(key + ".t")}</b><br /><span className="mut" style={{ fontSize: 14 }}>{t(key + ".d")}</span></p>
    </div>
  ));
}
