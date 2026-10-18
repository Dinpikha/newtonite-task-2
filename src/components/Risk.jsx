import { useLang } from "../i18n";
// Compliance: risk text >= 12px and visible without scrolling on pages with investment content.
export default function Risk({ long = false, boxed = false }) {
  const { t } = useLang();
  return <p className={boxed ? "disc" : "tiny"}>{t(long ? "risk.long" : "risk.short")}</p>;
}
