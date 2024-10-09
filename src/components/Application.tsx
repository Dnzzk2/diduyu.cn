import { Component, For } from "solid-js";

const Application: Component = () => {
  const applicationLists = [
    {
      name: "react",
      link: "https://react.dev/",
      icon: "i-skill-icons-react-dark",
    },
    {
      name: "solidjs",
      link: "https://www.solidjs.com/",
      icon: "i-skill-icons-solidjs-dark",
    },
    {
      name: "tailwindcss",
      link: "https://tailwindcss.com/",
      icon: "i-skill-icons-tailwindcss-dark",
    },
    {
      name: "typescript",
      link: "https://www.typescriptlang.org/zh/",
      icon: "i-skill-icons-typescript",
    },
    {
      name: "markdown",
      link: "https://daringfireball.net/",
      icon: "i-skill-icons-markdown-dark",
    },
  ];

  return (
    <div class="px-6 mt-14 text-left text-xl max-w-[76ch] mx-auto">
      <h1 class="text-4xl mb-4">
        <span class="title-tp">技术栈</span>
      </h1>
      <div class="flex items-center gap-2">
        <For each={applicationLists}>
          {(item) => (
            <a href={item.link} target="_blank">
              <span class={`${item.icon} w-10 h-10`}></span>
            </a>
          )}
        </For>
      </div>
    </div>
  );
};

export default Application;