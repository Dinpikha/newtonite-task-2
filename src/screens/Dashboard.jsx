import { useLang } from "../i18n";
import AmountPicker from "../components/AmountPicker";
import BeejFill from "../components/BeejFill";
import LangToggle from "../components/LangToggle";
import Risk from "../components/Risk";
// SCREEN 9: dashboard. `dim` darkens it while the Order sheet is open on top.
export default function Dashboard({ amount, setAmount, next, lite, dim = false }) {
  const { t } = useLang();
  const body = (
    <>
      <div className="row sp">
        <b style={{ letterSpacing: ".1em" }}>{t("home.name")}</b>
        <div className="row"><LangToggle /><span className="cap" style={{ border: "1px solid #D97706", padding: "4px 8px" }}>{t("home.badge")}</span></div>
      </div>
      <div>
        <p className="lab">{t("home.value")}</p>
        <p style={{ fontSize: 40, fontWeight: 600 }}>₹0.00</p>
        <p className="tiny">+₹0.00 (0.00%)</p>
      </div>
      <div className="card">
        <p className="mut">{t("home.card")}</p>
        <AmountPicker amount={amount} setAmount={setAmount} lite={lite} />
        <p className="tiny">{t("chart.illus")}</p>
        <button className="btn g" onClick={next}>{t("home.cta")}</button>
      </div>
      <BeejFill k={4} w={84} />
      <Risk />
    </>
  );
  return dim ? <div className="dim" style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1, pointerEvents: "none" }}>{body}</div> : body;
}
