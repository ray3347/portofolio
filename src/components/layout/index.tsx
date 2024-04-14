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
import HoverPopup from "../hover-popup";
import Loading from "../loading";

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
      gsap.to(".canvas3d", {
        left: isMd ? "0" : "-50vw",
        ease: "power1.inOut",
      });
      router.push("/");
    } else {
      gsap.to(".canvas3d", {
        left: isMd ? "0" : "-80vw",
        ease: "power1.inOut",
      });
    }
  });

  useEffect(() => {
    if (pageRef.current && contentRef.current) {
      gsap.to(pageRef.current, {
        height: "0vh",
        opacity: "0%",
        duration: 0,
        boxShadow: "none",
        transform: "none",
      });
      gsap.to(contentRef.current, {
        opacity: "0%",
        duration: 0,
      });

      if (name !== pathname) {
        const tl = gsap.timeline();
        gsap.to(pageRef.current, { opacity: "100%", duration: 1.5 });
        if (isMd) {
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
                "8px -16px 0 rgba(255, 255, 255, 1), 16px 8px 0 rgba(255, 138, 0, 1), -8px -8px 0 rgba(229, 46, 113, 1)",
              // transform: "none",
              duration: 0.3,
            });
        } else {
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
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname != "/" && name !== pathname) {
      // look(x, y, z, null);
      if (pageRef.current && contentRef.current) {
        const tl = gsap.timeline();
        gsap.to(pageRef.current, { opacity: "100%", duration: 1.5 });
        if (isMd) {
          tl.to(pageRef.current, {
            height: isMd ? "80vh" : "70vh",
            ease: "expo.inOut",
            duration: 1,
          })
            .to(contentRef.current, {
              opacity: "100%",
            })
            .to(pageRef.current, {
              boxShadow:
                "8px -16px 0 rgba(255, 255, 255, 1), -16px 16px 0 rgba(255, 138, 0, 1), 16px 8px 0 rgba(229, 46, 113, 1)",
              // transform: isMd ? "none": "translate(-24px,-24px)",
              duration: 0.3,
            });
        } else {
          tl.to(pageRef.current, {
            height: isMd ? "80vh" : "70vh",
            ease: "expo.inOut",
            duration: 1,
          })
            .to(contentRef.current, {
              opacity: "100%",
            })
            .to(pageRef.current, {
              boxShadow:
                "8px 8px 0 rgba(255, 255, 255, 1), 16px 16px 0 rgba(255, 138, 0, 1), 24px 24px 0 rgba(229, 46, 113, 1)",
              transform: isMd ? "none" : "translate(-24px,-24px)",
              duration: 0.3,
            });
        }
      }
    }
  }, [pageRef.current || contentRef.current]);
  
  return (
    <Suspense fallback={<Loading />}>
      <div
        ref={appRef}
        style={{
          background: "var(--primary-glow)",
          // backgroundImage: "url('synth2.gif')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // filter: pathname != "/" ? "blur(8px)" : "none",
          // WebkitFilter: pathname != "/" ? "blur(8px)" : "none",
          width: "100vw",
          height: "100vh",
          fontSize: "calc(10px + 2vmin)",
          color: "white",
          cursor: isMd ? "default" : "none",
          // pointerEvents: "none",
          zIndex: "auto",
          overflow: "hidden",
        }}
      >
        <div style={{
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          backgroundImage: "url('synth2.gif')",
          // background: "var(--primary-glow)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: pathname != "/" ? "blur(8px)" : "none",
          WebkitFilter: pathname != "/" ? "blur(8px)" : "none",
          position: "fixed",
          left: 0,
          top: 0,
        }}>
          
        </div>
        {!isMd && <Cursor />}
        {!isMd && <HoverPopup />}

        {/* {name && (
        <BackButton
          callbackFunc={() => {
            // childRef.current?.func();
            look(0, -10, 80, null);
            changePos(false);
          }}
        />
      )} */}
        <div
          className="canvas3d"
          style={{
            zIndex: 1,
            position: "absolute",
            pointerEvents: "none",
            overflow: "hidden",
            left: isMd ? "0" : "-50vw",
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
        <main
          style={
            pathname === "/"
              ? styles.beforeStyle
              : isMd
              ? styles.afterStyleMd
              : styles.afterStyle
          }
        >
          {pathname === "/" ? (
            <>{props.children}</>
          ) : (
            <Suspense fallback={<Loading />}>
              <div
                className="paper"
                ref={pageRef}
                style={{
                  position: "absolute",
                  padding: "4vh",
                  width: isMd ? "80vw" : "40vw",
                  height: "0vh",
                  opacity: "0%",
                  display: "flex",
                  margin: "auto",
                  backgroundColor: "#0C090A",
                  borderRadius: 20,
                  border: "solid 5px rgba(255, 0, 255, 1)",
                  overflow: "auto",
                  scrollbarWidth: "none",
                }}
              >
                <div
                  ref={contentRef}
                  style={{
                    opacity: "0%",
                    width: "100%",
                  }}
                >
                  <Suspense fallback={<Loading/>}>{props.children}</Suspense>
                </div>
              </div>
            </Suspense>
          )}
        </main>
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
    </Suspense>
  );
}

export default Layout;
