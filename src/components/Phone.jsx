// The phone frame. `lite` removes all motion (class "lite" in styles.css).
export default function Phone({ lite, children }) {
  return <div id="ph" className={lite ? "lite" : ""}>{children}</div>;
}
