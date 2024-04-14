import { useState } from "react";
import { IProjectButtonProps } from "./interfaces";
import { useMousePosition } from "@/utilities";

function ProjectButton(props: IProjectButtonProps) {
  const [hover, setHover] = useState(false);
  const { hovCheck } = useMousePosition();
  return (
    <div
      style={{
        background: hover
          ? // ? "rgba(128, 128, 128, 1)"
            "linear-gradient(to right, #ff8a00, #e52e71)"
          : "rgba(46, 46, 46, 0.8)",
        borderRadius: "1.5vh",
        padding: "2vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        boxShadow: hover ? "5px 5px 0 rgba(46, 46, 46, 0.6)" : "none",
        transform: hover ? "translate(-5px, -5px)" : "none",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        gap: "5px",
      }}
      onMouseEnter={() => {
        setHover(true);
        hovCheck(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        hovCheck(false);
      }}
      onClick={() => {
        props.func();
        setHover(false);
        hovCheck(false);
      }}
    >
      <img
        src={"/github-icon.svg"}
        style={{
          width: "2vh",
          height: "2vh",
        }}
      />
      <img
        src={"/arrow-up-right-icon.svg"}
        style={{
          width: "2vh",
          height: "2vh",
        }}
      />
    </div>
  );
}

export default ProjectButton;
