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
import GridButtons from "@/components/grid-buttons";
import GridContent from "@/components/grid-content";
import { projectList, typeList } from "./constants";
import { gridTypes } from "@/constants";
import { useProjects } from "@/utilities";

gsap.registerPlugin(useGSAP);
function Projects() {
  const appRef: any = useRef();
  const childRef: any = useRef();

  //state
  const [viewMode, setViewMode] = useState<string | null>(gridTypes.grid);

  // other hooks
  const { active, activate } = useProjects();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "2vw",
            fontWeight: "bold",
          }}
        >
          PROJECTS
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          {typeList.map((obj) => (
            <GridButtons
              image={obj.icon}
              title={obj.name}
              desc={obj.desc}
              isLarge={false}
              activeComponent={viewMode}
              setActive={setViewMode}
            />
          ))}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          {projectList.map((obj) => (
            <GridButtons
              image={obj.icon}
              title={obj.title}
              desc={obj.desc}
              isLarge={true}
              activeComponent={active}
              setActive={activate}
            />
          ))}
        </div>
      </div>
      {/* <GridContent/> */}
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien
        est, bibendum et tellus quis, iaculis efficitur nulla. Morbi facilisis
        feugiat lectus sagittis pharetra. Mauris finibus nulla et ligula rutrum
        tempus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Maecenas placerat felis nec quam
        convallis, vel porttitor lacus venenatis. Cras non massa ultricies velit
        sollicitudin vestibulum quis in eros. Pellentesque luctus nulla blandit
        eros molestie porttitor.
      </Typography> */}
    </div>
  );
}

export default Projects;
