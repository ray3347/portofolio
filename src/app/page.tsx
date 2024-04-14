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
import { useHome } from "@/utilities";

gsap.registerPlugin(useGSAP);

function Home() {
  const titleRef: any = useRef();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const definition = ["Website", "Portofolio", "Showroom"];
  const [activeDef, setActiveDef] = useState("Website");
  // const {activeTitle, updateTitle} = useHome();

  const typingAnimation = (value: string, interval?: number) => {
    const typingInterval = interval ?? 50;
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      if (currentIndex < value.length) {
        setActiveDef(value.substring(0, currentIndex + 1));
        // updateTitle(value.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, typingInterval);

    return () => clearInterval(typingTimer);
  };

  useEffect(() => {
    let idx = 1;
    const change = setInterval(() => {
      typingAnimation(definition[idx]);
      if (idx >= definition.length - 1) {
        idx = 0;
      } else {
        idx++;
      }
    }, 2000);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <div
        ref={titleRef}
        style={{
          position: "absolute",
          zIndex: 0,
          fontSize: isMd ? 30 : 60,
          fontWeight: "bold",
          top: isMd ? 40: 20,
          backgroundImage: `linear-gradient(to right, #ff8a00, #e52e71)`,
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {/* Ansel's Website */}
        <p>Hi, I'm Ansel</p>
        <div
          style={{
            fontSize: isMd ? 15 : 30,
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: isMd ? "5px" : "10px"
          }}
        >
          <p>Welcome to my</p>
          <p
            style={{
              backgroundImage: "linear-gradient(to left, #ff8a00, #e52e71)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {activeDef}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
