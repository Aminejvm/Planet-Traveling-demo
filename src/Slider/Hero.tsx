import React from "react";
import styled from "styled-components";
import { useSpring, useTransition, config, animated } from "react-spring";
import { useSlider } from "./index";

const Hero = () => {
  const { store } = useSlider();
  const chosenPlanet = store.planets[store.chosen];
  const priceAnimated = useSpring({ val: chosenPlanet.price });
  const titleTransition = useTransition(chosenPlanet.id, item => item, {
    from: { transform: "translate3d(0px, -100px, 0px)", opacity: 0 },
    enter: { transform: " translate3d(0px, 0px, 0px)", opacity: 1 },
    leave: {
      position: "absolute",
      transform: "translate3d(0px, 100px, 0px)",
      opacity: 0
    }
  });
  const imageTransition = useTransition(chosenPlanet.img, item => item, {
    from: {
      transform: "translate3d(500px, -500px, 0px) scale(0.1)",
      opacity: 0
    },
    enter: { transform: "translate3d(0px, 0px, 0px) scale(1)", opacity: 1 },
    leave: {
      transform: "translate3d(500px, 500px, 0px) scale(0.1)",
      opacity: 0,
      position: "absolute"
    },
    config: config.slow
  });
  return (
    <Wrapper>
      <LeftSection>
        <Title>
          <h1>Trip to</h1>
          {titleTransition.map(({ item, key, props }) => (
            <animated.h1 key={key} style={props}>
              {item}
            </animated.h1>
          ))}
        </Title>
        <div>
          <p>For Only</p>
          <Price>
            {priceAnimated.val.interpolate(x => `${x.toFixed(0)} $`)}
          </Price>
        </div>
        <Button>Order Now</Button>
      </LeftSection>
      {imageTransition.map(({ item, key, props }) => (
        <Image key={key} style={props} src={item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  position: relative;
  width: 120%;
  & > * + * {
    margin-left: 10%;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  h1 {
    font-family: "Blender Pro";
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    color: #cbd2d9;
    width: 100%;
    right: -50%;
    margin: 0;
  }
  & > * + * {
    margin-left: 8px;
  }
`;

const Image = styled(animated.img)`
  width: 50%;
  left: 20%;
`;

/**
 * left section
 * Trip to ''
 * for only, ''$
 * button
 */
const LeftSection = styled.section`
  & > * + * {
    margin-top: 32px;
  }
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const Price = styled(animated.p)`
  font-family: Blender Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #f5f7fa;
`;
const Button = styled.button`
  border: 4px solid #9f9c9c;
  padding: 16px 32px;
  background-color: transparent;
  font-family: Blender Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #f5f7fa;
`;

export default Hero;
