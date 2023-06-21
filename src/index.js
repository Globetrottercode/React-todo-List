import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://e00ee474f9d74797b0868a8551440012@o4504997147312128.ingest.sentry.io/4504997162057728",
  integrations: [new Sentry.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
