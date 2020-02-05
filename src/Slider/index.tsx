import React from "react";
import { Planet } from "../data/planets";

type Store = {
  planets: Planet[];
  chosen: number;
};

// Context
interface ContextInterface {
  store: Store;
  handleNext: () => void;
  handlePrev: () => void;
}
const SliderContext = React.createContext({} as ContextInterface);

// Consumer
export const useSlider = () => {
  const context = React.useContext(SliderContext);
  if (!context) {
    throw new Error("This component must be a child of the Slider Context");
  }
  return context;
};

// Reducer used to display the current product in view
const sliderReducer = (state: Store, action): Store => {
  switch (action.type) {
    case "SET_NEXT_SLIDE":
      return {
        ...state,
        chosen: Math.abs((state.chosen + 1) % state.planets.length)
      };
    case "SET_PREVIOUS_SLIDE":
      return {
        ...state,
        chosen: Math.abs((state.chosen - 1) % state.planets.length)
      };
    default:
      return state;
  }
};
type Props = {
  planets: Planet[];
  children: any;
};
const Slider = ({ planets, children }: Props): JSX.Element => {
  const [store, dispatch] = React.useReducer(sliderReducer, {
    chosen: 0,
    planets
  });
  const handleNext = React.useCallback(
    () => dispatch({ type: "SET_NEXT_SLIDE" }),
    [store]
  );
  const handlePrev = React.useCallback(
    () => dispatch({ type: "SET_PREVIOUS_SLIDE" }),
    [store]
  );
  const value = React.useMemo(() => ({ store, handleNext, handlePrev }), [
    store
  ]);
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};

export default Slider;
