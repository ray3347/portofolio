"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { ILayoutProps } from "./interfaces";
import { proxy, useSnapshot } from "valtio";
import Cursor from "../cursor";
import { useMouse } from "@uidotdev/usehooks";
import { useCanvasCamera, useMousePosition } from "@/utilities";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Canvas3D from "../canvas";
import BackButton from "../back-button";
import { usePathname, useRouter } from "next/navigation";
import { styles } from "./styles";
import { Paper, duration, useMediaQuery, useTheme } from "@mui/material";

gsap.registerPlugin(useGSAP);

function Layout(props: ILayoutProps) {
  // ref
  const appRef: any = useRef();
  const childRef: any = useRef();
  const pageRef: any = useRef();
  const contentRef: any = useRef();

  // other hooks
  const { contextSafe } = useGSAP({ scope: appRef });
  const pathname = usePathname();
  const router = useRouter();
  const { name, look, x, y, z } = useCanvasCamera();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const changePos = contextSafe((back: boolean) => {
    if (!back) {
      gsap.to(".canvas3d", { left: "-50vw", ease: "power1.inOut" });
      router.push("/");
    } else {
      gsap.to(".canvas3d", { left: "-80vw", ease: "power1.inOut" });
    }
  });

  useEffect(() => {
    if (pageRef.current && contentRef.current) {
      gsap.to(pageRef.current, {
        height: "0vh",
        opacity: "0%",
        duration: 0.0001,
        boxShadow: "none",
        transform: "none",
      });
      gsap.to(contentRef.current, {
        opacity: "0%",
        duration: 0.0001,
      });

      if (name !== pathname) {
        const tl = gsap.timeline();
        gsap.to(pageRef.current, { opacity: "100%", duration: 1.5 });
        tl.to(pageRef.current, {
          height: "70vh",
          ease: "expo.inOut",
          duration: 1,
        })
          .to(contentRef.current, {
            opacity: "100%",
          })
          .to(pageRef.current, {
            boxShadow:
              "8px 8px 0 rgba(255, 255, 255, 1), 16px 16px 0 rgba(255, 138, 0, 1), 24px 24px 0 rgba(229, 46, 113, 1)",
            transform: "translate(-24px,-24px)",
            duration: 0.3,
          });
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname != "/" && name !== pathname) {
      // look(x, y, z, null);
      if (pageRef.current && contentRef.current) {
        const tl = gsap.timeline();
        gsap.to(pageRef.current, { opacity: "100%", duration: 1.5 });
        tl.to(pageRef.current, {
          height: "70vh",
          ease: "expo.inOut",
          duration: 1,
        })
          .to(contentRef.current, {
            opacity: "100%",
          })
          .to(pageRef.current, {
            boxShadow:
              "8px 8px 0 rgba(255, 255, 255, 1), 16px 16px 0 rgba(255, 138, 0, 1), 24px 24px 0 rgba(229, 46, 113, 1)",
            transform: "translate(-24px,-24px)",
            duration: 0.3,
          });
      }
    }
  }, [pageRef.current || contentRef.current]);

  return (
    <div
      ref={appRef}
      style={{
        background: "var(--primary-glow)",
        width: "100vw",
        height: "100vh",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
        cursor: isMd ? "default" : "none",
        // pointerEvents: "none",
        zIndex: "auto",
      }}
    >
      {!isMd && <Cursor />}

      {name && (
        <BackButton
          callbackFunc={() => {
            // childRef.current?.func();
            look(0, -10, 80, null);
            changePos(false);
          }}
        />
      )}
      <div
        className="canvas3d"
        style={{
          zIndex: 0,
          position: "absolute",
          pointerEvents: "none",
          overflow: "hidden",
          left: "-50vw",
        }}
      >
        <Canvas3D
          currPath={pathname}
          callback={(e) => {
            changePos(e);
          }}
          ref={childRef}
        />
      </div>
      <Suspense>
        <main style={pathname === "/" ? styles.beforeStyle : styles.afterStyle}>
          {pathname === "/" ? (
            <>{props.children}</>
          ) : (
            <div
              className="paper"
              ref={pageRef}
              // elevation={24}
              style={{
                position: "absolute",
                padding: "2vw",
                width: "40vw",
                height: "0vh",
                opacity: "0%",
                // bottom: 0,
                display: "flex",
                margin: "auto",
                // zIndex: 10,
                backgroundColor: "black",
                borderRadius: 20,
                border: "solid 5px rgba(255, 0, 255, 1)",
              }}
            >
              <div
                ref={contentRef}
                style={{
                  opacity: "0%",
                  width: "100%",
                }}
              >
                {props.children}
              </div>
            </div>
          )}
        </main>
      </Suspense>

      {/* <main
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(10px + 2vmin)",
          color: "white",
        }}
      >
        {props.children}
      </main> */}
      <div
        style={{
          bottom: 0,
          width: "100%",
          zIndex: 99,
          height: "5%",
          backgroundColor: "#0C090A",
          position: "fixed",
          textAlign: "center",
          fontSize: "12px",
          color: "rgba(255,255,255,0.5)",
          paddingTop: "1vh",
          paddingBottom: "1vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>&copy; {new Date().getFullYear()} - Anselmus Raynard Halim</p>
      </div>
    </div>
  );
}

export default Layout;
