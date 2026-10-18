import { useLang } from "../i18n";
import Beej from "./Beej";
// A big Beej that fills the empty whitespace of a screen, with its stage label. Grows in when the screen opens.
export default function BeejFill({ k, w = 150 }) {
  const { t } = useLang();
  return (
    <div className="fl col gw" style={{ alignItems: "center", justifyContent: "center", gap: 6, minHeight: w + 30 }}>
      <Beej k={k} w={w} />
      <span className="cap" style={{ color: "#047857" }}>{t("st." + k)} · {k + 1}/5</span>
    </div>
  );
}
