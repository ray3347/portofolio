import Image from "next/image";
import { IContent } from "./interfaces";
import { Button } from "@mui/material";

function ProjectContent(props: IContent) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "start",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundImage: `url(${props.assets ? props.assets[0] : "/ansel-halim-stg-recede.gif"})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* <img
          src={props.assets ? props.assets[0] : "/ansel-halim-stg-recede.gif"}
          alt="/ansel-halim-stg-recede.gif"
          width= "100%"
        /> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "start",          
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "18px",
            fontWeight: "bold",
            width: "100%"
          }}
        >
          <p>{props.title}</p>
          <Button
            onClick={() => {
              window.open(props.url);
            }}
          >
            Github
          </Button>
        </div>
        <div
          style={{
            textAlign: "justify",
            fontSize: "12px",
          }}
        >
          <p>{props.story}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
