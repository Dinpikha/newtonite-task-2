export const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN"); // 10,000 / 1,00,000
export const template = (str, vars = {}) => str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
