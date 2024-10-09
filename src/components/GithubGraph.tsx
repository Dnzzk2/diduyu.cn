import { Component } from "solid-js";
import GithubContributionsGraph from "./GithubContributionsGraph";

const GithubGraph: Component = () => {
  return (
    <div class="px-6 mt-14 text-left text-xl max-w-[76ch] mx-auto">
      <h1 class="text-4xl mb-4">
        <span class="title-tp">贡献</span>
      </h1>
      <GithubContributionsGraph username="Dnzzk2" />
    </div>
  );
};

export default GithubGraph;
