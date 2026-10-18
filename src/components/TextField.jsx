// state: "" | "ok" (emerald border = confirmation) | "bad" (red border)
export default function TextField({ label, state = "", ...input }) {
  return (
    <label className="col">
      <span className="lab">{label}</span>
      <input {...input} className={`in ${state}`} />
    </label>
  );
}
