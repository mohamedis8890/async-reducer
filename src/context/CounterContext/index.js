import React, { createContext } from "react";
import useAsyncReducer from "../../hooks/useAsyncReducer";
import createActions from "./createActions";
import reducer, { initialState } from "./reducer";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState);
  const actions = createActions(dispatch);

  return (
    <CounterContext.Provider value={[state, actions]}>
      {children}
    </CounterContext.Provider>
  );
};
