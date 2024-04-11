"use client";

import * as React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BackButton from "../components/back-button";
import Layout from "../components/layout";
import Cursor from "../components/cursor";
import { proxy, useSnapshot } from "valtio";
import Canvas3D from "@/components/canvas";
import { useMediaQuery, useTheme } from "@mui/material";

gsap.registerPlugin(useGSAP);

function Home() {
  const titleRef: any = useRef();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <p
        ref={titleRef}
        style={{
          position: "absolute",
          zIndex: -1,
          fontSize: isMd ? 60 : 120,
          fontWeight: "bold",
          top: 20,
          backgroundImage:
            "linear-gradient(to right, #ff8a00, #e52e71)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          // maxWidth: "30vw"
          // clipPath: "polygon(0 0, 100% 0, 10% 25%, 0 100%)",
          // transition: "0.3s cubic-bezier(0.38, 1.15, 0.7, 1.12)"
        }}
      >
        Ansel's Website
      </p>
    </div>
    // <Suspense>
    //   <Layout>
    //     <RenderChildren />
    //   </Layout>
    // </Suspense>
  );
}

export default Home;
