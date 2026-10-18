// Compliance word check. Used by the test in src/__tests__/compliance.test.js.
// Returns the list of banned words found in a dictionary of strings.
const BANNED = [/\bguarantee[sd]?\b/i, /\bsafe(ly|ty)?\b/i, /\brisk[- ]?free\b/i, /सुरक्षित/, /गारंटी/];
export function auditCopy(dict) {
  const hits = [];
  for (const [key, text] of Object.entries(dict))
    for (const re of BANNED) if (re.test(text)) hits.push({ key, word: String(text).match(re)[0] });
  return hits;
}
