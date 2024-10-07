import type { Component } from "solid-js";
import Header from "./components/header";
import Nav from "./components/nav";
import Du from "./components/Du";
import Opus from "./components/opus";
import Chain from "./components/Chain";
import Footer from "./components/Footer";

const App: Component = () => {
  return (
    <main class="mx-auto pb-[8vh]">
      <Nav />
      <Header />
      <Du />
      <Opus />
      <Chain />
      <Footer />
    </main>
  );
};

export default App;
