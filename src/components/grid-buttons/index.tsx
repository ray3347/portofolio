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
          backgroundColor:
            props.title === props.activeComponent
              ? "rgba(128, 128, 128, 1)"
              : "rgba(46, 46, 46, 0.8)",
          borderRadius: props.isLarge ? 30 : 15,
          padding: props.isLarge ? "1vw" : "1vw",
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
          width: props.isLarge ? "5vw" : "3vw",
          height: props.isLarge ? "5vw" : "3vw",
          transition:
            "box-shadow 0.3s ease-in-out, background-color 1s ease-out, transform 0.3s ease-in-out",
          transform:
            props.title === props.activeComponent
              ? "translate(-3px, -3px)"
              : hover
              ? "translate(-3px, -3px)"
              : "none",
        }}
      >
        <img
          src={props.image}
          style={{
            width: props.isLarge ? "1.5vw" : "1vw",
            height: props.isLarge ? "1.5vw" : "1vw",
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
          fontSize: "12px",
          textAlign: "center",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 7,
        }}
      >
        <p>{props.desc.length > 10 ? props.desc.substring(0,10) + "..." : props.desc}</p>
      </div>
      )}
      
    </div>
  );
}

export default GridButtons;
