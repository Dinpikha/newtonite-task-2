import { useEffect, useRef, useState } from "react";
// Eases a number toward its target so the chart glides. instant=true (Lite mode) jumps straight there.
export default function useSmoothNumber(target, instant = false) {
  const [v, setV] = useState(target);
  const cur = useRef(target);
  useEffect(() => {
    if (instant) { cur.current = target; setV(target); return; }
    let raf;
    const tick = () => {
      cur.current += (target - cur.current) * 0.3;
      if (Math.abs(target - cur.current) < 0.5) cur.current = target;
      setV(cur.current);
      if (cur.current !== target) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, instant]);
  return v;
}
