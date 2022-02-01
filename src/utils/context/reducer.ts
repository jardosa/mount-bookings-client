export const SET_SNACKBAR = "SET_SNACKBAR";
export const CLEAR_SNACKBAR = "CLEAR_SNACKBAR";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SetSnackbar = "SET_SNACKBAR",
  ClearSnackBar = "CLEAR_SNACKBAR",
}

type SnackBarType = {
  msg: string;
  err: boolean;
  openDuration: number;
};

type StateType = {
  snackbarData: SnackBarType;
};

type Payload = {
  [Types.ClearSnackBar]: SnackBarType;
  [Types.SetSnackbar]: SnackBarType;
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

const setSnackbarData = (state: StateType, payload: SnackBarType) => {
  return { ...state, snackbarData: { ...payload } };
};
const clearSnackbar = (state: StateType) => {
  return {
    ...state,
    snackbarData: { msg: "", err: false, openDuration: 3000 },
  };
};

export const reducer = (state: StateType, action: Actions) => {
  switch (action.type) {
    case SET_SNACKBAR:
      return setSnackbarData(state, action.payload);
    case CLEAR_SNACKBAR:
      return clearSnackbar(state);
    default:
      return state;
  }
};
