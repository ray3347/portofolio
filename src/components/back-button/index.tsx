import React, { useEffect, useRef, useState } from "react";
import { IBackButtonProps } from "./interfaces";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";
import { useMousePosition } from "@/utilities";

gsap.registerPlugin(useGSAP);

function BackButton(props: IBackButtonProps) {
  const buttonRef: any = useRef();
  const iconRef: any = useRef();
  const svgRef: any = useRef();
  //   const [tl, setTl] = useState<any>();

  //   useGSAP(() => {
  //     const tl = gsap.timeline();
  //     setTl(tl);
  //   });

  //   const { contextSafe } = useGSAP({ scope: buttonRef });

  //   const changeButton = contextSafe((e:boolean) => {
  //     gsap.to(".backButton", {ease: "elastic.inOut", background: "#03a9f4", border: "solid 2px"});
  //     // if(e){

  //     // }
  //   });

  const [hover, setHover] = useState(false);
  const { hovCheck, isHover } = useMousePosition();

  useEffect(() => {
    if (hover === true) {
      gsap.to(buttonRef.current, {
        boxShadow:
          "10px 10px 0px rgba(255, 138, 0, 1), -10px -10px 0px  rgba(229, 46, 113, 1), 0 0 20px rgba(255,255,255,1)",
        background: "rgba(255,255,255, 1)",
      });
      gsap.to(iconRef.current, {
        fill: "black",
      });
    } else {
      gsap.to(buttonRef.current, {
        boxShadow: "0px 0px 20px rgba(255,255,255,1)",

        background: "#0d0d0d",
      });
      gsap.to(iconRef.current, {
        fill: "white",
      });
    }
  }, [hover]);

  return (
    <button
      ref={buttonRef}
      // style={{...backgroundStyle}}
      style={{
        position: "fixed",
        top: 30,
        zIndex: 4,
        borderRadius: 50,
        padding: 25,
        left: 30,
        background: "#0d0d0d",
        border: "solid 2px white",
        cursor: "none",
        overflow: "hidden",
      }}
      onClick={props.callbackFunc}
      onMouseEnter={() => {
        hovCheck(true);
        setHover(true);
      }}
      onMouseLeave={() => {
        hovCheck(false);
        setHover(false);
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={iconRef}
          d="M18 4V10C18 11.103 17.104 12 16 12H2V9H15V5H4V7L0 3.5L4 0V2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default BackButton;
