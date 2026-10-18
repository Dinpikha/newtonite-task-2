// Screen registry: flow id (src/config/flow.js) -> component. The order sheet is rendered by App on top of the dashboard.
import Home from "./Home"; import Gate from "./Gate"; import Prep from "./Prep"; import Pan from "./Pan"; import Aadhaar from "./Aadhaar";
import Bank from "./Bank"; import Loading from "./Loading"; import Welcome from "./Welcome"; import Dashboard from "./Dashboard";
export const SCREENS = { home: Home, gate: Gate, prep: Prep, pan: Pan, aadhaar: Aadhaar, bank: Bank, loading: Loading, welcome: Welcome, dashboard: Dashboard };
export { default as OrderSheet } from "./OrderSheet";
