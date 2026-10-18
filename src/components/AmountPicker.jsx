import { MIN_AMOUNT, MAX_AMOUNT, STEP_AMOUNT } from "../config/flow";
import { inr } from "../lib/format";
import { useLang } from "../i18n";
import GrowthChart from "./GrowthChart";
// Big amount + slider + chart. Shared by Dashboard and OrderSheet (one `amount` state).
export default function AmountPicker({ amount, setAmount, lite, size = 28 }) {
  const { t } = useLang();
  return (
    <>
      <div style={{ font: `700 ${size}px ui-monospace,Menlo,monospace` }}>{inr(amount)}</div>
      <input type="range" min={MIN_AMOUNT} max={MAX_AMOUNT} step={STEP_AMOUNT} value={amount}
        onChange={(e) => setAmount(+e.target.value)} aria-label={t("slider.aria")} />
      <GrowthChart amount={amount} lite={lite} />
    </>
  );
}
