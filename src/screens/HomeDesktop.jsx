import { useLang } from "../i18n";
import Beej from "../components/Beej";
import Bays from "../components/Bays";
import LangToggle from "../components/LangToggle";
import Risk from "../components/Risk";
// The website homepage, desktop layout. Same words, checklist, mascot and colours as Home.jsx (mobile).
// The grid collapses to one column under 800px, so it is a responsive page, not a separate design.
export default function HomeDesktop({ next, lite }) {
  const { t } = useLang();
  const seeReady = () => document.getElementById("ready-d")?.scrollIntoView({ behavior: lite ? "auto" : "smooth" });
  return (
    <div id="dk">
      <div className="row sp"><div className="row"><Beej k={0} w={34} /><b style={{ fontSize: 22 }}>Sprout</b></div><LangToggle /></div>
      <div className="dkgrid">
        <div className="col" style={{ gap: 18 }}>
          <h1>{t("web.h")}</h1>
          <p className="mut" style={{ fontSize: 18 }}>{t("web.sub")}</p>
          <div className="dkbtns">
            <button className="btn g" onClick={next}>{t("web.get")}</button>
            <button className="btn b2" onClick={seeReady}>{t("web.see")}</button>
          </div>
          <Risk boxed />
          <div className="card" style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
            <Beej k={0} w={60} />
            <div className="col" style={{ gap: 6 }}>
              <p style={{ fontSize: 20, lineHeight: 1.45, fontWeight: 600 }}>{t("web.q")}</p>
              <p className="mut" style={{ fontSize: 14 }}>{t("web.qcap")}</p>
            </div>
          </div>
        </div>
        <div className="card" id="ready-d"><div className="cap">{t("web.ready")}</div><Bays /><p className="mut" style={{ fontSize: 14 }}>{t("prep.note")}</p></div>
      </div>
      <p className="tiny">{t("web.trust")} · {t("web.ref")}</p>
    </div>
  );
}
