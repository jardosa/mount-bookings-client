import { useContext, useEffect, useRef } from "react";
import { Context } from "../../utils/context/context";
import SnackBar from "../Snackbar";
import Navbar from "./common/Navbar";

const MainLayout: React.FunctionComponent = (props) => {
  const snackbarRef = useRef(null);
  const context = useContext(Context);
  useEffect(() => {
    if (!context.state.snackbarData) return;
    const {
      msg = "",
      err = false,
      openDuration = 3000,
    } = context.state.snackbarData;
    if (msg === "") return;
    snackbarRef.current?.openSnackBar(msg, err, openDuration);
  }, [context.state.snackbarData]);

  return (
    <>
      <div className="max-w-[1440px]  mx-auto w-full border border-opacity-50">
        <Navbar />
        <div className="flex w-full  ">{props.children}</div>
      </div>
      <SnackBar ref={snackbarRef} />
    </>
  );
};

export default MainLayout;
