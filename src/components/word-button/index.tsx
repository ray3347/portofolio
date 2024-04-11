import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { IWordButtonProps } from "./interfaces";
import { useMousePosition } from "@/utilities";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function WordButton(props: IWordButtonProps) {
  const buttonRef: any = useRef();
  const { hovCheck } = useMousePosition();
  const [hover, setHover] = useState(false);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setHover(false);
  }, []);

  //   useEffect(() => {
  //     const tl = gsap.timeline();
  //     if (hover) {
  //       gsap.to(buttonRef.current, {
  //         boxShadow:
  //           "2px 2px 0 rgba(255, 255, 255, 1), 4px 4px 0 rgba(255, 138, 0, 1), 6px 6px 0 rgba(229, 46, 113, 1)",
  //         transform: "translate(-6px, -6px)",
  //         duration: 0.3,
  //       });
  //     } else {
  //       gsap.to(buttonRef.current, { boxShadow: "none", transform: "none" });
  //     }
  //   }, [hover]);

  //   useEffect(() => {
  //     gsap.to(buttonRef.current, {
  //       boxShadow:
  //         "2px 2px 0 rgba(255, 255, 255, 1), 4px 4px 0 rgba(255, 138, 0, 1), 6px 6px 0 rgba(229, 46, 113, 1)",
  //       transform: "translate(-6px, -6px)",
  //       duration: 0.3,
  //     });
  //   }, [props.content === props.componentGroup]);

  return (
    <div
      onMouseEnter={() => {
        hovCheck(true);
        setHover(true);
      }}
      onMouseLeave={() => {
        hovCheck(false);
        setHover(false);
      }}
      onClick={() => {
        if (props.func) {
          props.func(props.idx);
        }
      }}
    >
      <div
        ref={buttonRef}
        style={{
          borderRadius: "1vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2vh",

          background:
            props.idx === props.componentGroup || hover
              ? "linear-gradient(to left, #ff8a00, #e52e71)"
              : "rgba(46, 46, 46, 0.8)",
          boxShadow:
            props.idx === props.componentGroup
              ? "3px 3px 0 rgba(128, 128, 128, 0.5)"
              : hover
              ? "5px 5px 0 rgba(46, 46, 46, 0.6)"
              : "none",
          transform:
            props.idx === props.componentGroup
              ? "translate(-3px, -3px)"
              : hover
              ? "translate(-5px, -5px)"
              : "none",
          position: "relative",
          transition:
            "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, background 0.5s ease-in-out",
          //   background: "rgba(46, 46, 46, 0.8)",
        }}
      >
        <div
          style={{
            fontSize: isMd ? "8px" : "12px",
          }}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
}

export default WordButton;
