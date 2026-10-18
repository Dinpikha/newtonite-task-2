import { useLang } from "../i18n";
import Bays from "../components/Bays";
import BeejFill from "../components/BeejFill";
import LangToggle from "../components/LangToggle";
// SCREEN 3: "keep these ready" (answers the #1 support complaint).
export default function Prep({ next }) {
  const { t } = useLang();
  return (
    <>
      <div className="row sp"><span className="cap">{t("prep.kicker")}</span><LangToggle /></div>
      <h2>{t("prep.title")}</h2>
      <div className="card"><Bays /></div>
      <p className="mut" style={{ fontSize: 14 }}>{t("prep.note")}</p>
      <BeejFill k={0} />
      <button className="btn" onClick={next}>{t("prep.btn")}</button>
    </>
  );
}
