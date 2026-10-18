import { describe, it, expect } from "vitest";
import en from "../i18n/en";
import hi from "../i18n/hi";
import { auditCopy } from "../lib/compliance";
import { isPan, isIfsc } from "../lib/validators";

describe("copy", () => {
  it("English has no banned financial-assurance words", () => expect(auditCopy(en)).toEqual([]));
  it("Hindi has no banned financial-assurance words", () => expect(auditCopy(hi)).toEqual([]));
  it("Hindi and English have exactly the same keys", () => expect(Object.keys(hi).sort()).toEqual(Object.keys(en).sort()));
  it("every screen with investment content has a risk line", () => {
    expect(en["risk.short"]).toMatch(/market risks/i);
    expect(hi["risk.short"].length).toBeGreaterThan(20);
  });
});
describe("validators", () => {
  it("PAN and IFSC shapes", () => {
    expect(isPan("ABCDE1234F")).toBe(true);
    expect(isPan("ABCDE12345")).toBe(false);
    expect(isIfsc("ABCD0123456")).toBe(true);
    expect(isIfsc("ABCD1123456")).toBe(false);
  });
});
