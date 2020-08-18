import React from "react";
import "./App.css";

import Slider from "./components/Slider";
import SimpleCarousel from "./components/SimpleCarousel";
import DragCarousel from "./components/DragCarousel";
import Carousel from "./components/Carousel";

function App() {
  let carouselItems = [
    <img src="https://images4.alphacoders.com/671/thumb-1920-67198.jpg" />,
    <img src="https://images3.alphacoders.com/109/thumb-1920-1094398.jpg" />,
    <img src="https://images8.alphacoders.com/109/thumb-1920-1094691.jpg" />,
    <img src="https://images5.alphacoders.com/109/thumb-1920-1094118.jpg" />,
    <img src="https://images3.alphacoders.com/109/thumb-1920-1094136.jpg" />,
  ];
  return (
    <div className="App">
      <h1>Carrosséis TypeScript</h1>
      <h2>Simples</h2>
      <SimpleCarousel items={carouselItems} />
      <h2>Transição de imagens (Slider)</h2>
      <Slider items={carouselItems} timeLimit={3000} />
      <h2>Carrossel comum (Scroll)</h2>
      <DragCarousel items={carouselItems} />
      <h2>Carrossel com transição (Slider Carousel)</h2>
      <Carousel items={carouselItems} timeLimit={3000} />
    </div>
  );
}

export default App;
