import type { Component } from "solid-js";
import Header from "./components/header";
import Nav from "./components/nav";
import Du from "./components/Du";
import Opus from "./components/opus";
import Chain from "./components/Chain";
import Footer from "./components/Footer";
import GithubGraph from "./components/GithubGraph";
import Application from "./components/Application";

const App: Component = () => {
  return (
    <main>
      {/* <Nav /> */}
      <Header />
      <Du />
      <Application />
      <GithubGraph />
      <Opus />
      <Chain />
      <Footer />
    </main>
  );
};

export default App;
