"use client";

import * as React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { proxy, useSnapshot } from "valtio";
import Canvas3D from "@/components/canvas";
import BackButton from "@/components/back-button";
import Layout from "@/components/layout";
import {
  Button,
  Card,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GridButtons from "@/components/grid-buttons";
import GridContent from "@/components/grid-content";
import { projectList, typeList } from "./constants";
import { gridTypes } from "@/constants";
import { useCanvasCamera, useProjects } from "@/utilities";
import ListButtons from "@/components/list-buttons";
import ProjectContent from "@/components/project-content";
import { IProjects } from "./interfaces";
import { useRouter } from "next/navigation";
import HomeButton from "@/components/home-button";

gsap.registerPlugin(useGSAP);
function Projects() {
  const appRef: any = useRef();
  const childRef: any = useRef();

  //state

  // other hooks
  const { active, activate, mode, switchMode } = useProjects();
  const { look } = useCanvasCamera();
  const [activeProject, setActiveProject] = useState<IProjects | null>(null);
  const router = useRouter();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (active != null) {
      const proj = projectList.find((x) => x.title === active);
      if (proj) {
        setActiveProject(proj);
      }
    } else {
      setActiveProject(null);
    }
  }, [active]);

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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "3vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: isMd ? "10px" : "20px",
          }}
        >
          <HomeButton />
          <Typography
            sx={{
              fontSize: isMd ? "14px" : "24px",
              fontWeight: "bold",
            }}
          >
            PROJECTS
          </Typography>
        </div>
        {active ? (
          <GridButtons
            image={"/back-icon.svg"}
            isLarge={false}
            title="back"
            desc={null}
            setActive={(e) => {
              activate(null);
            }}
          />
        ) : (
          <div
            style={{
              // width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            {typeList.map((obj, idx: number) => (
              <GridButtons
                key={obj.name}
                image={obj.icon}
                title={obj.name}
                desc={obj.desc}
                isLarge={false}
                activeComponent={mode}
                setActive={switchMode}
              />
            ))}
          </div>
        )}
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
            maxHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // padding:"5%"
          }}
        >
          {active ? (
            <ProjectContent
              key={activeProject?.title}
              title={activeProject?.desc ?? ""}
              story={activeProject?.story ?? ""}
              assets={activeProject?.assets}
              url={activeProject?.url}
            />
          ) : (
            <>
              {mode === gridTypes.grid && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    // flexWrap: "wrap",
                    alignItems: "center",
                    flexDirection: "column",
                    // gap: "15px",
                    maxHeight: "50vh",
                    overflow: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      flexDirection: "row",
                      gap: isMd ? "5px": "15px",
                      padding: "5px",
                    }}
                  >
                    {projectList.map((obj) => (
                      <GridButtons
                        key={obj.title}
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
              )}
              {mode === gridTypes.list && (
                <div
                  style={{
                    width: "100%",
                    maxHeight: "50vh",
                    overflow: "auto",
                    // marginRight: "-15px",
                    // paddingRight: "15px",
                    // scrollbarWidth: "none",

                    justifyContent: "center",
                    display: "flex",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "5px",
                    }}
                  >
                    {projectList.map((obj) => (
                      <ListButtons
                        key={obj.title}
                        image={obj.icon}
                        title={obj.title}
                        desc={obj.desc}
                        activeComponent={active}
                        setActive={activate}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
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
