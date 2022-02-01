import { createContext } from "react";

// eslint-disable-next-line import/prefer-default-export
type ContextType = {
  state: {
    snackbarData: { msg: string; err: boolean; openDuration: number };
  };
  clearSnackbar: () => void;
  setSnackbarData: (msg: string, err: boolean, openDuration?: number) => void;
};

export const Context = createContext<ContextType>({
  state: {
    snackbarData: { msg: "", err: false, openDuration: 3000 },
  },
  clearSnackbar: () => undefined,
  setSnackbarData: () => undefined,
});
