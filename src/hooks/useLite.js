import { useState } from "react";
// Lite mode = no animations, instant chart. Starts ON automatically for data-saver or low-memory phones.
export default function useLite() {
  const [lite, setLite] = useState(() => {
    try { const c = navigator.connection; return !!((c && c.saveData) || (navigator.deviceMemory && navigator.deviceMemory <= 2)); } catch { return false; }
  });
  return [lite, setLite];
}
