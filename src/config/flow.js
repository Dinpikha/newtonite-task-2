// The whole journey in one place. Order here = order on screen.
// home = the website (mobile). Everything after it is the app.
export const FLOW = ["home","gate","prep","pan","aadhaar","bank","loading","welcome","dashboard","order"];

export const MIN_AMOUNT = 100;
export const MAX_AMOUNT = 10000;
export const STEP_AMOUNT = 100;
export const QUICK_ADD = [500, 1000, 5000];
export const ILLUSTRATIVE_RATE = 0.10; // 10% a year: ILLUSTRATION ONLY, needs Compliance sign-off
export const ILLUSTRATIVE_YEARS = 10;

// Beej (the mascot) has 5 stages 0..4. Verifying a step moves it from one stage to the next.
export const STAGE_AFTER = { pan: [0, 1], aadhaar: [1, 2], bank: [2, 3] };

// Demo switch. true = no rules: buttons never lock, and Prev/Next controls jump between screens.
// Set to false for the real validated flow.
export const FREE_NAVIGATION = true;

// Where each screen sits in the submission: Homepage / Onboarding 1-5 / "to first investment" (extras after onboarding).
export const PART = { home: "Homepage", gate: "Onboarding 1/5", prep: "Onboarding 2/5", pan: "Onboarding 3/5", aadhaar: "Onboarding 4/5", bank: "Onboarding 5/5",
  loading: "First investment path", welcome: "First investment path", dashboard: "First investment path", order: "First investment path" };
