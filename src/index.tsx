/* @refresh reload */
import "./index.css";
import "./assets/font.css";
import { render } from "solid-js/web";

import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

// 检测字体加载
document.fonts.ready.then(() => {
  document.body.classList.add("fonts-loaded");
  setTimeout(() => {
    render(() => <App />, root!);
  }, 500); // 等待加载动画淡出后再渲染应用
});
