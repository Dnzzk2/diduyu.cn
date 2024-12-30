import { Component, Index } from "solid-js";
import OpusItem from "./opusItem";

const Opus: Component = () => {
  const opusLists = [
    {
      name: "Note",
      desc: "我的个人笔记本",
      link: "https://note.dnzzk2.icu",
      icon: "i-fluent-emoji-flat-face-in-clouds",
      img: "https://note.dnzzk2.icu/logo.png",
    },
    {
      name: "PageCraft",
      desc: "Antd后台CURD页面快速配置工具",
      link: "https://www.diduyu.us.kg",
      icon: "i-fluent-emoji-flat-face-in-clouds",
      img: "https://www.diduyu.us.kg/logo/favicon-512x512.png",
    },
  ];
  return (
    <div class="content-box">
      <h1 class="text-4xl mb-4">
        <span class="title-tp">作品</span>
      </h1>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={opusLists}>{(item) => <OpusItem data={item()} />}</Index>
      </div>
    </div>
  );
};

export default Opus;
