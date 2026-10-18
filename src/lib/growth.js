import { ILLUSTRATIVE_RATE, ILLUSTRATIVE_YEARS } from "../config/flow";
export const valueAfter = (amount, t = ILLUSTRATIVE_YEARS) => amount * Math.pow(1 + ILLUSTRATIVE_RATE, t);
// Fixed y-scale on purpose: a bigger amount draws a visibly bigger curve.
const MAX = valueAfter(10000);
const y = (v) => 100 - 90 * Math.sqrt(v / MAX);
export function growthPath(amount) {
  let d = "";
  for (let t = 0; t <= ILLUSTRATIVE_YEARS; t += 0.25) d += `${t ? "L" : "M"}${(6 + t * 31).toFixed(1)} ${y(valueAfter(amount, t)).toFixed(1)}`;
  return d;
}
export const investedPath = (amount) => `M6 ${y(amount).toFixed(1)}L316 ${y(amount).toFixed(1)}`;
