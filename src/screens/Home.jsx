import { useLang } from "../i18n";
import Beej from "../components/Beej";
import Bays from "../components/Bays";
import LangToggle from "../components/LangToggle";
import Risk from "../components/Risk";
// SCREEN 1: the website homepage (mobile). Same promise, checklist, mascot and colours as the app.
// The risk line sits right under the buttons so it is visible without scrolling.
export default function Home({ next, lite }) {
  const { t } = useLang();
  const seeReady = () => document.getElementById("ready")?.scrollIntoView({ behavior: lite ? "auto" : "smooth" });
  return (
    <>
      <div className="row sp"><div className="row"><Beej k={0} w={30} /><b style={{ fontSize: 19 }}>Sprout</b></div><LangToggle /></div>
      <h1>{t("web.h")}</h1>
      <p className="mut">{t("web.sub")}</p>
      <button className="btn g" onClick={next}>{t("web.get")}</button>
      <button className="btn b2" onClick={seeReady}>{t("web.see")}</button>
      <Risk boxed />
      <div className="card" id="ready"><div className="cap">{t("web.ready")}</div><Bays /></div>
      <div className="card" style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
        <Beej k={0} w={60} />
        <div className="col" style={{ gap: 6 }}>
          <p style={{ fontSize: 19, lineHeight: 1.45, fontWeight: 600 }}>{t("web.q")}</p>
          <p className="mut" style={{ fontSize: 14 }}>{t("web.qcap")}</p>
        </div>
      </div>
      <p className="tiny">{t("web.trust")}<br />{t("web.ref")}</p>
    </>
  );
}
