import React from "react";
import styled from "styled-components";
import { useSprings, animated } from "react-spring";
import { useSlider } from "./index";

const SideBar = () => {
  const { store, handleNext, handlePrev } = useSlider();
  const isChosen = i => i === store.chosen;
  const springs = useSprings(
    store.planets.length,
    store.planets.map((item, i) => ({
      transform: isChosen(i) ? "scale(1.2)" : "scale(1)",
      color: isChosen(i) ? "#C99A2E" : "#3e4c59"
    }))
  );
  return (
    <Wrapper>
      <Title>Available Planets</Title>
      <SelectSection>
        <p>from</p>
        <button>Earth</button>
      </SelectSection>
      <SelectSection>
        <p>to</p>
        {springs.map((props, i) => (
          <animated.button style={props}>{store.planets[i].id}</animated.button>
        ))}
      </SelectSection>
      <NB>NB*: This is a one way trip, soon u’ll be able to return.</NB>
      <Controls>
        <button onClick={handlePrev}>
          <LeftIcon />
        </button>
        <button onClick={handleNext}>
          <RightIcon />
        </button>
      </Controls>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 214px;
  height: 100vh;
  position: fixed;
  right: 0%;
  top: 0%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 32px 24px;

  & > * + * {
    margin-top: 32px;
  }
`;

const Title = styled.h2`
  font-family: Blender Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 47px;
  color: #000000;
`;

const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * + * {
    margin-top: 8px;
  }
  p {
    font-family: Blender Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #9aa5b1;
  }
  button {
    padding: 0px;
    border-style: none;
    background-color: transparent;
    font-family: Blender Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    color: #3e4c59;
  }
`;

const NB = styled.p`
  margin-top: auto;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  /* grey400 */

  color: #9aa5b1;
`;

const Controls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    border-style: none;
    background-color: transparent;
  }
`;
//----------Icons----------//
const LeftIcon = props => (
  <svg fill="none" width="32" height="32" viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.552 17.333l8.39 8.39-1.885 1.887L3.447 16l11.61-11.61 1.886 1.886-8.39 8.39H28v2.667H8.552z"
      fill="#000"
    />
  </svg>
);

const RightIcon = props => (
  <svg fill="none" width="32" height="32" viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.448 17.333H4v-2.666h19.448l-8.39-8.39 1.885-1.886L28.553 16l-11.61 11.61-1.886-1.886 8.39-8.39z"
      fill="#000"
    />
  </svg>
);

export default SideBar;
