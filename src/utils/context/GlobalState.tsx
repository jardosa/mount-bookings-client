import { useReducer } from "react";
import { Context } from "./context";
import { CLEAR_SNACKBAR, reducer, SET_SNACKBAR } from "./reducer";

export const GlobalState: React.FunctionComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    snackbarData: { msg: "", err: false, openDuration: 3000 },
  });

  const setSnackbarData = (payload) => {
    dispatch({ type: SET_SNACKBAR, payload });
  };
  const clearSnackbar = () => dispatch({ type: CLEAR_SNACKBAR });

  const initialState = {
    state,
    setSnackbarData,
    clearSnackbar,
  };

  return (
    <Context.Provider value={{ ...initialState }}>
      {props.children}
    </Context.Provider>
  );
};
