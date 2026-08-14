import posthog from "posthog-js";

if (typeof window !== "undefined") {
  posthog.init("phc_p5kyDoZnVVQyE6cwkn6oKCn3uYg7Taz2YKgU5FwJuKuj", {
    api_host: "https://us.i.posthog.com",
    capture_pageview: true,
    capture_pageleave: true,
    person_profiles: "identified_only",
  });

  // Makes debugging easier
  window.posthog = posthog;

  // Track every Resume link click across the entire site
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const resumeLink = target.closest('a[href="/resume.pdf"]');

    if (!resumeLink) return;

    const location = resumeLink.closest("nav")
      ? "navbar"
      : resumeLink.closest("footer")
        ? "footer"
        : "page_cta";

    posthog.capture("resume_download_clicked", {
      location,
      page: window.location.pathname,
    });
  });
}

export default posthog;