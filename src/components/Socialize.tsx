import { Component, Index } from "solid-js";

interface SocializeProps {
  data: {
    icon: string;
    class: string;
    link: string;
  };
}

const SocializeItem: Component<SocializeProps> = (props) => {
  const { data } = props;
  return (
    <a
      onClick={(e) => {
        if (!data.link) {
          e.preventDefault();
        }
      }}
      href={data.link}
      target="_blank"
      class={`brands  relative inline-flex px-3 py-2 mr-2 sm:px-5 rounded-md bg-gray-50 ${data.class} hover:text-white `}
    >
      <div class="flex justify-center">
        <div class={`${data.icon} w-[20px] h-[20px]`} />
      </div>
    </a>
  );
};

export default () => {
  const socialLists = [
    {
      icon: "i-ri-github-fill",
      class: "before:bg-gray-700",
      link: "https://github.com/Dnzzk2",
    },
    {
      icon: "i-ri-netease-cloud-music-fill",
      class: "before:bg-[#e60026] text-[#e60026] ",
      link: "https://music.163.com/#/user/home?id=481173299",
    },
  ];

  return (
    <div class="mt-4">
      <Index each={socialLists}>
        {(item) => <SocializeItem data={item()} />}
      </Index>
    </div>
  );
};
