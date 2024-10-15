import { createEffect, Component, createSignal } from "solid-js";
import scrollToSection from "../utils/utils";

const Header: Component = () => {
  const [poem, setPoem] = createSignal<string>();

  createEffect(() => {
    const fetchPoem = async () => {
      try {
        const response = await fetch("https://v1.hitokoto.cn?c=i&encode=json");
        const data = await response.json();
        const newPoem = data?.hitokoto;
        setPoem(newPoem);
        localStorage.setItem("poem", newPoem);
      } catch (error) {
        setPoem(localStorage.getItem("poem") || "为人民服务");
      }
    };

    fetchPoem();

    const timeoutId = setTimeout(() => {
      document.getElementsByTagName("header")[0].classList.add("loaded");
    }, 100);

    // 清理函数
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <header>
      <div class="sun"></div>
      <div class="w-full text-center">
        <p class="title poem">{poem()}</p>
      </div>
      <span class="bottom-arrow" onClick={() => scrollToSection("#Du")}></span>
    </header>
  );
};

export default Header;
