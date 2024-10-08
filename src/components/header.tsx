import { createEffect, Component, createSignal } from "solid-js";
import scrollToSection from "../utils/utils";

const Header: Component = () => {
  const [poem, setPoem] = createSignal<string>();

  createEffect(() => {
    fetch("https://v1.hitokoto.cn?c=i&encode=json")
      .then((response) => response.json())
      .then((data) => {
        const newPoem = data?.hitokoto;
        setPoem(newPoem);
        localStorage.setItem("poem", newPoem);
      })
      .catch((error) => {
        setPoem(localStorage.getItem("poem") || "为人民服务");
      });
  });

  return (
    <header
      id="header"
      class="bgbg h-screen bg-cover box-border bg-center flex justify-center items-center snap-start"
    >
      <div class="sun left-[60%] top-[26%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] sm:left-[23%] sm:top-[26%] md:left-[23%] md:top-[26%]"></div>
      <div class="w-full text-center ">
        <p class="text-3xl title px-3 md:text-5xl sm:blur-[1px] sm:hover:blur-none ">
          {poem()}
        </p>
      </div>
      <span class="bottomArrow" onClick={() => scrollToSection("#Du")}></span>
    </header>
  );
};

export default Header;
