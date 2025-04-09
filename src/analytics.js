// analytics.js
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = "G-QBM5H6ZRKHq"; // Replace with your measurement ID

const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

const sendPageView = (pageName) => {
  ReactGA.send({ hitType: "pageview", page: pageName });
};

const sendEvent = (category, action, label, value) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  });
};

export { initGA, sendPageView, sendEvent };