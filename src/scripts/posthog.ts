import posthog from "posthog-js";

if (typeof window !== "undefined") {
  posthog.init("phc_p5kyDoZnVVQyE6cwkn6oKCn3uYg7Taz2YKgU5FwJuKuj", {
    api_host: "https://v.kumar.xyz",
    capture_pageview: true,
    capture_pageleave: true,
    person_profiles: "identified_only",
    defaults: '2026-05-30'
  });

  // Makes debugging easier
  window.posthog = posthog;
}

export default posthog;