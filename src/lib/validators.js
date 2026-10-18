// Format checks only (shape, not truth). Real verification is a backend job.
export const isPan = (v) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(v);
export const isIfsc = (v) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(v);
export const isAccount = (v) => /^\d{9,18}$/.test(v);
export const isAadhaar = (v) => /^\d{12}$/.test(v);
