import { Component, Index } from "solid-js";

interface ChainItemProps {
  data: {
    name: string;
    link: string;
  };
}

const ChainItem: Component<ChainItemProps> = (props) => {
  const { data } = props;
  return (
    <a
      href={data.link}
      target="_blank"
      class="block px-2 py-3 rounded-md  hover:bg-gray-100 transition-colors decoration-none"
    >
      <div class="title text-base sm:text-xl">{data.name}</div>
    </a>
  );
};

export default () => {
  const chainLists = [
    {
      name: "@h7ml - 每一个不曾起舞的日子,都是对生命的辜负!",
      link: "https://www.h7ml.cn/",
    },
    {
      name: "@Diu",
      link: "https://ddiu.io/",
    },
  ];

  return (
    <div
      class="px-6 mt-14 text-left text-xl pt-16 sm:pt-0  max-w-[76ch] mx-auto mb-4 "
      id="Chain"
    >
      <h1 class="text-4xl mb-4">
        <span class="title-tp">友链</span>
      </h1>
      <Index each={chainLists}>{(item) => <ChainItem data={item()} />}</Index>
      <h1 class="text-4xl mb-4 mt-4">
        <span class="title-tp">致谢</span>
      </h1>
      <div class="title">感谢@h7ml、@Diu</div>
    </div>
  );
};
