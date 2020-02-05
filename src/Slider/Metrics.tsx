import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useSlider } from "./index";

const Interpolate = (val, cb) => val.interpolate(cb);

const Metrics = () => {
  const { store } = useSlider();
  const chosedPlanet = store.planets[store.chosen];
  const animatedMetrics = useSpring({
    age: chosedPlanet.age,
    lengthOfDay: [
      chosedPlanet.lengthOfDay.day,
      chosedPlanet.lengthOfDay.hour,
      chosedPlanet.lengthOfDay.minute
    ],
    orbitPeriod: chosedPlanet.orbitalPeriod
  });
  return (
    <Wrapper>
      <Metric>
        <h3>Age</h3>
        <animated.p>
          {Interpolate(animatedMetrics.age, x => `${x.toFixed(2)} B Years`)}
        </animated.p>
      </Metric>
      <Metric>
        <h3>Length of day</h3>
        <animated.p>
          {Interpolate(
            animatedMetrics.lengthOfDay,
            (d, h, m) => `${d.toFixed(0)}d ${h.toFixed(0)}h ${m.toFixed(0)}m`
          )}
        </animated.p>
      </Metric>
      <Metric>
        <h3>Orbital Period</h3>
        <animated.p>
          {Interpolate(
            animatedMetrics.orbitPeriod,
            x => `${x.toFixed(0)} Days`
          )}
        </animated.p>
      </Metric>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-around;
`;

const Metric = styled.div`
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #9aa5b1;
    margin-bottom: 16px;
  }
  p {
    font-family: "Blender Pro";
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    margin: 0;

    color: #f5f7fa;
  }
`;

export default Metrics;
