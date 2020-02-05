import React from "react";
import { Container, Nav, PreloadImages } from "./Components.tsx";
import Metrics from "./Slider/Metrics";
import Hero from "./Slider/Hero";
import SideBar from "./Slider/SideBar";
import Slider from "./Slider";
import { planets } from "./data/planets";

import "./styles.css";

export default function App() {
  return (
    <div>
      <Slider planets={planets}>
        <Container>
          <Nav>PLANETS</Nav>
          <Hero />
          <Metrics />
          <SideBar />
        </Container>
      </Slider>
      <PreloadImages>
        {planets.map(item => (
          <img key={item.id} src={item.img} />
        ))}
      </PreloadImages>
    </div>
  );
}
