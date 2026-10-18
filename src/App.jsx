import { useEffect, useState } from "react";
import { FLOW, MIN_AMOUNT, FREE_NAVIGATION, PART } from "./config/flow";
import HomeDesktop from "./screens/HomeDesktop";
import { SCREENS, OrderSheet } from "./screens";
import Phone from "./components/Phone";
import VerifyOverlay from "./components/VerifyOverlay";
import useLite from "./hooks/useLite";

// The "state machine": one number (`i`) says which screen we are on. Everything else comes from FLOW.
export default function App() {
  const [i, setI] = useState(0);                    // position in FLOW
  const [amount, setAmount] = useState(MIN_AMOUNT); // shared by Dashboard + Order sheet
  const [verifying, setVerifying] = useState(null); // "pan" | "aadhaar" | "bank" | null
  const [desktop, setDesktop] = useState(false); // homepage only: show the desktop layout
  const [lite, setLite] = useLite();                // Lite mode: no motion, for low-end phones

  const jump = (d) => { setVerifying(null); setI((n) => Math.max(0, Math.min(n + d, FLOW.length - 1))); };
  const next = () => jump(1);
  const back = () => jump(-1);
  useEffect(() => {
    if (!FREE_NAVIGATION) return;
    const onKey = (e) => { if (e.key === "ArrowRight") jump(1); if (e.key === "ArrowLeft") jump(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const id = FLOW[i];
  const props = { next, back, amount, setAmount, lite, verify: setVerifying };
  const Screen = SCREENS[id === "order" ? "dashboard" : id]; // the sheet sits on top of the dashboard

  return (
    <main className="wrap">
      {i === 0 && desktop ? <HomeDesktop next={next} lite={lite} /> : <Phone lite={lite}>
        <div id="sc" key={id === "order" ? "dashboard" : id}><Screen {...props} dim={id === "order"} /></div>
        {id === "order" && <OrderSheet {...props} />}
        {verifying && <VerifyOverlay what={verifying} onDone={() => { setVerifying(null); next(); }} />}
      </Phone>}
      <div className="ctl">
        <b>{PART[id]}</b>
        {i === 0 && <button aria-pressed={desktop} onClick={() => setDesktop(!desktop)}>Homepage: {desktop ? "desktop" : "mobile"}</button>}
        {FREE_NAVIGATION && <button onClick={back}>← Prev</button>}
        <span>{i + 1} / {FLOW.length}</span>
        {FREE_NAVIGATION && <button onClick={next}>Next →</button>}
        <button onClick={() => { setI(0); setAmount(MIN_AMOUNT); setVerifying(null); }}>Restart</button>
        <button aria-pressed={lite} onClick={() => setLite(!lite)}>Lite mode: {lite ? "on" : "off"}</button>
      </div>
    </main>
  );
}
