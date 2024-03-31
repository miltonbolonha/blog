import mainConfigs from "../../configs/main-infos.json";
// log the pageview with their URL
export const pageview = url => {
  window.gtag("config", mainConfigs.business.gaID, {
    page_path: url,
  });
};
// log the pageview with their URL
export const gtagCounter = id => {
  if (typeof window !== "undefined") {
    window?.gtag("event", id);
  }
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
