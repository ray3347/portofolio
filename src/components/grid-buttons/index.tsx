import { useMousePosition, useProjects } from "@/utilities";
import { IGridButtonsProps } from "./interfaces";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function GridButtons(props: IGridButtonsProps) {
  const buttonRef: any = useRef();

  const { hovCheck } = useMousePosition();
  const [hover, setHover] = useState(false);
//   const { active, activate } = useProjects();

  useEffect(() => {
    setHover(false);
  }, []);

  //   useEffect(() => {

  //     if (hover === true) {
  //       gsap.to(buttonRef.current, {
  //         boxShadow: "5px 5px 0 rgba(46, 46, 46, 0.6)",
  //         duration: 0.5,
  //       });
  //     }else{
  //         gsap.to(buttonRef.current, { boxShadow: "none", duration: 0.0001 });
  //     }
  //   }, [hover]);
  return (
    <div
      ref={buttonRef}
      style={{
        backgroundColor:
          props.title === props.activeComponent
            ? "rgba(128, 128, 128, 1)"
            : "rgba(46, 46, 46, 0.8)",
        borderRadius: props.isLarge ? 30 : 15,
        padding: props.isLarge ? "30px" : "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow:
          props.title === props.activeComponent
            ? "3px 3px 0 rgba(128, 128, 128, 0.5)"
            : hover
            ? "3px 3px 0 rgba(46, 46, 46, 0.6)"
            : "none",
        position: "relative",
        width: props.isLarge ? "120px" : "60px",
        height: props.isLarge ? "120px" : "60px",
        transition: "box-shadow 0.5s ease-in-out, background-color 1s ease-out, transform 0.5s ease-in-out",
        transform: props.title === props.activeComponent ? "translate(-3px, -3px)" : hover ? "translate(-3px, -3px)" : "none"
      }}
      onMouseEnter={() => {
        hovCheck(true);
        setHover(true);
      }}
      onMouseLeave={() => {
        hovCheck(false);
        setHover(false);
      }}
      onClick={() => {
        props.setActive(props.title);
      }}
    >
      <img
        src={props.image}
        style={{
          width: props.isLarge ? "40px" : "20px",
          height: props.isLarge ? "40px" : "20px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
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
      <span
        style={{
          fontSize: "1vh",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          textAlign: "center"
        }}
      >
        <p>{props.desc}</p>
      </span>
    </div>
  );
}

export default GridButtons;
