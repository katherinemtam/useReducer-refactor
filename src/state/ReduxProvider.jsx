import React, { createContext, useContext, useReducer } from 'react';

const ReduxContext = createContext();

export const ReduxProvider = ({ reducer, initialState, children }) => {
  //dispatch is used to update state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

//using this hook will allow you to connect to reducer switch statements
export const useDispatch = () => {
  const { dispatch } = useContext(ReduxContext);
  return dispatch;
};

//takes in a function
export const useSelector = (selectorFn) => {
  const { state } = useContext(ReduxContext);
  return selectorFn(state);
};
