import Image from "next/image";
import { IContent } from "./interfaces";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import GridButtons from "../grid-buttons";
import ProjectButton from "../project-button";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "../loading";

function ProjectContent(props: IContent) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  // const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef: any = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const img = document.createElement('img');
  //         img.src = props.assets ? props.assets[0] : "/ansel-halim-stg-recede.gif" ;
  //         img.onload = () => {
  //           setImageLoaded(true);
  //         };
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   });

  //   observer.observe(imageRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [props.assets]);

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
      <Suspense fallback={<Loading />}>
        <div
          ref={imageRef}
          style={{
            width: "100%",
            height: "30vh",
            backgroundImage: `url(${
              props.assets ? props.assets[0] : "/ansel-halim-stg-recede.gif"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Suspense>
      {/* <img
          src={props.assets ? props.assets[0] : "/ansel-halim-stg-recede.gif"}
          alt="/ansel-halim-stg-recede.gif"
          width= "100%"
          loading="lazy"
        /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "start",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: isMd ? "14px" : "22px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          <p>{props.title}</p>
          <ProjectButton
            func={() => {
              window.open(props.url);
            }}
          />
        </div>
        <div
          style={{
            textAlign: "justify",
            fontSize: isMd ? "8px" : "12px",
          }}
        >
          <p>{props.story}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
