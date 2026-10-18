import { useState } from "react";
import { useLang } from "../i18n";
import { QUICK_ADD, MAX_AMOUNT } from "../config/flow";
import { inr } from "../lib/format";
import AmountPicker from "../components/AmountPicker";
import Risk from "../components/Risk";
// SCREEN 10: bottom sheet over the dashboard. Same `amount`, so slider + chart stay in sync.
export default function OrderSheet({ amount, setAmount, lite }) {
  const { t } = useLang();
  const [opening, setOpening] = useState(false);
  const pay = () => { setOpening(true); setTimeout(() => setOpening(false), 1800); }; // real app: fire the UPI intent here
  return (
    <div id="sh">
      <b>{t("sheet.title")}</b>
      <p className="lab">{t("sheet.amount")}</p>
      <AmountPicker amount={amount} setAmount={setAmount} lite={lite} size={34} />
      <div className="row" style={{ gap: 8 }}>
        {QUICK_ADD.map((n) => (
          <button key={n} className="chip fl" onClick={() => setAmount(Math.min(MAX_AMOUNT, amount + n))}>+{inr(n)}</button>
        ))}
      </div>
      <Risk long />
      <button className="btn g" onClick={pay} style={{ margin: "0 -18px", width: "calc(100% + 36px)", borderRadius: 0, minHeight: 54 }}>
        {opening ? t("sheet.opening") : t("sheet.pay", { amt: inr(amount) })}
      </button>
    </div>
  );
}
