
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  const clickFocusableSelector = 'button, a[href], [role="button"], [data-slot="button"]';

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
        if (activeElement instanceof HTMLElement && activeElement.matches(clickFocusableSelector)) {
          activeElement.blur();
        }
      });
    },
    true,
  );

  createRoot(document.getElementById("root")!).render(<App />);
  
