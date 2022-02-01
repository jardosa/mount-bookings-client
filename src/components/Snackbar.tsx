import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-unresolved
// import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Context } from "../utils/context/context";

const SnackBar = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [duration, setDuration] = useState(3000);
  //   const { theme } = useTheme();
  const [displayAnimation, setdisplayAnimation] = useState(false);
  const context = useContext(Context);

  const variants = {
    initial: {
      opacity: 0,
      x: 200,
    },
    entrance: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 400,
    },
  };

  const open = () => {
    setdisplayAnimation(true);
    setDisplay(true);
  };

  const close = () => {
    setdisplayAnimation(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setdisplayAnimation(false);
    }, duration);
    const timer2 = setTimeout(() => {
      if (!displayAnimation) {
        setDisplay(false);
      }
    }, duration + 300);
    context.clearSnackbar();
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayAnimation, duration]);

  useImperativeHandle(ref, () => {
    return {
      openSnackBar: (msg = "", err = false, openDuration = 2000) => {
        setMessage(msg);
        setError(err);
        setDuration(openDuration);
        return open();
      },
      closeSnackBar: () => close(),
    };
  });
  const clipPath = "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)";

  if (display) {
    return ReactDOM.createPortal(
      <>
        <motion.div
          variants={variants}
          initial="initial"
          animate={displayAnimation ? "entrance" : "exit"}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 1.5,
          }}
          style={{
            clipPath,
          }}
          className={[
            "rounded-[4px]",
            "h-20 p-[2px]",
            "text-base",
            message.length >= 20 && "!text-sm",
            message.length >= 40 && "!text-xs",
            "z-50 font-open-sans font-medium",
            error ? "bg-red-400" : "bg-custom-india-green",
            "fixed bottom-[62px] right-[60px]",
            "flex items-center justify-center text-left",
          ].join(" ")}
        >
          <div
            style={{
              clipPath,
            }}
            className={[
              "relative  flex items-center justify-center h-full",
              //   theme === "light" && "theme-light",
              "bg-skin-fill",
            ].join(" ")}
          >
            <button type="button" onClick={() => close()}>
              <AiOutlineCloseCircle className="w-5 h-5 m-1 fill-current duration-200 hover:text-custom-taurus-forest-fern absolute top-1 right-1" />
            </button>
            <p className=" whitespace-pre-wrap font-semibold text-skin-base px-4 mr-6">
              {message || "SNACKBAR"}
            </p>
          </div>
        </motion.div>
      </>,
      document.getElementById("snackbar")
    );
  }
  return null;
});

export default SnackBar;
