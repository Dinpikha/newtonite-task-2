import { useLang } from "../i18n";
// Back arrow + "Step n of 3" + progress bar.
export default function StepHeader({ n, onBack }) {
  const { t } = useLang();
  return (
    <>
      <div className="row sp">
        <button className="chip" onClick={onBack} aria-label={t("back")}>←</button>
        <span className="tiny"><b>{t("step.of", { n })}</b></span>
        <span />
      </div>
      <div className="bar"><i style={{ width: `${n * 33}%` }} /></div>
    </>
  );
}
