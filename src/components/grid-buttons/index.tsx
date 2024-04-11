import { useMousePosition, useProjects } from "@/utilities";
import { IGridButtonsProps } from "./interfaces";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

function GridButtons(props: IGridButtonsProps) {
  const buttonRef: any = useRef();

  const { hovCheck } = useMousePosition();
  const [hover, setHover] = useState(false);
  //   const { active, activate } = useProjects();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    setHover(false);
  }, []);

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
        if(props.setActive){

          props.setActive(props.title);
        }
      }}
    >
      <div
        ref={buttonRef}
        style={{
          background:
            props.title === props.activeComponent || hover
              // ? "rgba(128, 128, 128, 1)"
              ? "linear-gradient(to right, #ff8a00, #e52e71)"
              : props.background ?? "rgba(46, 46, 46, 0.8)",
          borderRadius: props.isLarge ? "2.5vh" : "1.5vh",
          padding: props.isLarge ? isMd ? "2.8vh" : "3vh" : isMd ? "1.5vh" : "2vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow:
            props.title === props.activeComponent
              ? "3px 3px 0 rgba(128, 128, 128, 0.5)"
              : hover
              ? "5px 5px 0 rgba(46, 46, 46, 0.6)"
              : "none",
          position: "relative",
          // width: props.isLarge ? "9vh" : "6vh",
          // height: props.isLarge ? "9vh" : "6vh",
          transition:
            "box-shadow 0.3s ease-in-out, background 0.5s ease-in-out, transform 0.3s ease-in-out",
          transform:
            props.title === props.activeComponent
              ? "translate(-3px, -3px)"
              : hover
              ? "translate(-5px, -5px)"
              : "none",
        }}
      >
        <img
          src={props.image}
          style={{
            width: props.isLarge ? isMd ? "2vh" :"3vh" : isMd ? "1vh" :"2vh",
            height: props.isLarge ? isMd ? "2vh" :"3vh" : isMd ? "1vh" :"2vh",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            // position: "absolute",
          }}
        />
        {/* <div  style={{
          width: "30px",
          height: "30px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        }}>
            {props.image}
      </div> */}
        {/* <span
        style={{
          fontSize: "0.7vw",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          textAlign: "center"
        }}
      >
        <p>{props.desc}</p>
      </span> */}
      </div>
      {props.desc && (
        <div
        style={{
          fontSize: isMd ? "8px": "12px",
          textAlign: "center",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // padding: 7,
          paddingTop: 7,
          paddingBottom: 7
        }}
      >
        <p>{props.desc.length > 9 ? props.desc.substring(0,9) + "..." : props.desc}</p>
      </div>
      )}
      
    </div>
  );
}

export default GridButtons;
