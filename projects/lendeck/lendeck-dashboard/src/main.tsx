
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  const clickFocusableSelector = [
    "button",
    "a[href]",
    '[role="button"]',
    '[role="menuitem"]',
    '[role="tab"]',
    '[role="checkbox"]',
    '[role="radio"]',
    '[role="switch"]',
    '[data-slot="button"]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(",");

  document.addEventListener(
    "mousedown",
    (event) => {
      if (event.button !== 0) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element) || !target.closest(clickFocusableSelector)) {
        return;
      }

      event.preventDefault();
    },
    true,
  );

  document.addEventListener(
    "mouseup",
    () => {
      window.requestAnimationFrame(() => {
        const activeElement = document.activeElement;
        if (activeElement instanceof HTMLElement && activeElement.closest(clickFocusableSelector)) {
          activeElement.blur();
        }
      });
    },
    true,
  );

  document.addEventListener(
    "focusin",
    (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest(clickFocusableSelector)) {
        target.blur();
      }
    },
    true,
  );

  createRoot(document.getElementById("root")!).render(<App />);
  
