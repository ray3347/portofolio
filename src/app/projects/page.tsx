"use client";

import * as React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { proxy, useSnapshot } from "valtio";
import Canvas3D from "@/components/canvas";
import BackButton from "@/components/back-button";
import Layout from "@/components/layout";
import { Button, Card, Paper, Typography } from "@mui/material";

gsap.registerPlugin(useGSAP);
function Projects() {
  const appRef: any = useRef();
  const childRef: any = useRef();

  // other hooks
  const { contextSafe } = useGSAP({ scope: appRef });

  const changePos = contextSafe((back: boolean) => {
    if (!back) {
      gsap.to(".canvas3d", { left: 0, ease: "power1.inOut" });
    } else {
      gsap.to(".canvas3d", { left: -700, ease: "power1.inOut" });
    }
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          PROJECTS
        </Typography>
      </div>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien
        est, bibendum et tellus quis, iaculis efficitur nulla. Morbi facilisis
        feugiat lectus sagittis pharetra. Mauris finibus nulla et ligula rutrum
        tempus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Maecenas placerat felis nec quam
        convallis, vel porttitor lacus venenatis. Cras non massa ultricies velit
        sollicitudin vestibulum quis in eros. Pellentesque luctus nulla blandit
        eros molestie porttitor.
      </Typography>
    </div>
  );
}

export default Projects;
