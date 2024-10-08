import { Component, Index } from "solid-js";
import OpusItem from "./opusItem";

const Opus: Component = () => {
  const opusLists = [
    // {
    //   name: "JueJin-Helper",
    //   desc: "掘金网站的辅助工具",
    //   link: "https://github.com/Wiederhoeft/juejin-helper",
    //   icon: "i-fluent-emoji-flat-dove",
    // },
    {
      name: "Note",
      desc: "我的个人笔记本",
      link: "https://note.dnzzk2.icu",
      icon: "i-fluent-emoji-flat-face-in-clouds",
      img: "https://note.dnzzk2.icu/logo.png",
    },
    // {
    //   name: '趣记',
    //   desc: '记录生活的乐趣-虚构项目',
    //   link: '',
    //   icon: 'i-fluent-emoji-flat-feather'
    // },
    // {
    //   name: 'Panda',
    //   desc: '熊猫太可爱了-虚构项目',
    //   link: '',
    //   icon: 'i-fluent-emoji-flat-panda'
    // },
    // {
    //   name: '兔子',
    //   desc: '兔子也不错哦-虚构项目',
    //   link: '',
    //   icon: 'i-fluent-emoji-flat-rabbit'
    // },
    // {
    //   name: '?',
    //   desc: '你好菜这么多虚构项目！',
    //   link: '',
    //   icon: 'i-fluent-emoji-flat-red-question-mark'
    // },
  ];
  return (
    <div
      class="px-6 mt-14 text-left text-xl max-w-[76ch] mx-auto"
      id="Opus"
    >
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
