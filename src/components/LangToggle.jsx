import { useLang } from "../i18n";
// EN <-> हिन्दी. The choice is remembered on the device.
export default function LangToggle() {
  const { t, toggle } = useLang();
  return <button className="chip" onClick={toggle}>{t("lang.toggle")}</button>;
}
