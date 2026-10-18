// Beej, the mascot: a plant that grows one stage per verified step.
// k = stage 0..4 (seed, sprout, sapling, plant, bloom). No face, no speech, flat colours.
const Leaf = ({ y, r, s, c }) => (
  <path d="M0 0C8-6 12-16 0-30C-12-16-8-6 0 0Z" transform={`translate(50 ${y - 36}) rotate(${r}) scale(${s})`} fill={c} />
);
const Pair = ({ y, r, s }) => (<><Leaf y={y} r={r} s={s} c="#059669" /><Leaf y={y} r={-r} s={s} c="#047857" /></>);
const STEM_TOP = [0, 128, 104, 84, 92];

export default function Beej({ k = 0, w = 120 }) {
  return (
    <svg viewBox="0 0 100 140" width={w} height={w * 1.4} role="img" aria-label={`Beej, stage ${k + 1} of 5`}>
      <ellipse cx="50" cy="130" rx="36" ry="7" fill="#0B132B" />
      {k === 0 && (<>
        <ellipse cx="50" cy="112" rx="11" ry="14" fill="#D97706" />
        <path d="M45 106C46 102 49 100 52 100" fill="none" stroke="#F5C26B" strokeWidth="2" strokeLinecap="round" />
      </>)}
      {k > 0 && <path d={`M50 126V${STEM_TOP[k] - 36}`} stroke="#059669" strokeWidth="3" strokeLinecap="round" fill="none" />}
      {k === 1 && <Pair y={132} r={50} s={0.8} />}
      {k === 2 && (<><Pair y={130} r={55} s={0.9} /><Pair y={112} r={35} s={0.8} /><Leaf y={104} r={0} s={0.7} c="#34D399" /></>)}
      {k === 3 && (<><Pair y={132} r={60} s={1} /><Pair y={114} r={45} s={1} /><Pair y={96} r={30} s={0.9} /><Leaf y={86} r={0} s={0.8} c="#34D399" /></>)}
      {k === 4 && (<>
        <Pair y={134} r={55} s={0.9} /><Pair y={116} r={40} s={0.9} />
        <polygon points="30,48 50,38 70,48 50,62" fill="#0B132B" />
        <polygon points="35,36 50,26 65,36 50,48" fill="#059669" />
        <polygon points="41,22 50,8 59,22 50,32" fill="#D97706" />
      </>)}
    </svg>
  );
}
