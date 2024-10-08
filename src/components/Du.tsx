import { Component } from "solid-js";
import Socialize from "./Socialize";

const Du: Component = () => {
  return (
    <div
      class="pt-24 px-6 text-left text-xl max-w-[76ch] mx-auto relative"
      id="Du"
    >
      <div class="bird"></div>
      <h1 class="text-4xl font-bold">
        <span class="block title">Bonjour!</span>
        <span class="block mt-2 title">I'm Dnzzk2.</span>
      </h1>
      <div class="text-lg sm:text-xl mt-6 title">
        <div>A front Developer and Code lover</div>
        <Socialize />
      </div>
    </div>
  );
};

export default Du;
