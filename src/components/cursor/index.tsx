"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ICursorProps } from "./interfaces";
import { useMousePosition } from "@/utilities";
import _ from "lodash";

function Cursor() {
  const { x, y, isHover, mov, hovCheck } = useMousePosition();

  useEffect(() => {
    const mouseMove = (e: any) => {
      mov(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      {x > 0 && y > 0 && (
        <div
          style={{
            backgroundColor: `rgba(255, 255, 255, ${isHover ? 0.1 : 0.5})`,
            borderRadius: 50,
            border: "solid 2px white",
            padding: isHover ? 30 : 10,
            position: "fixed",
            top: `${isHover ?  y-45: y-15}px`,
            left: `${isHover ? x-45 :x-15}px`,
            // top: 0+y,
            // left: 0+x,
            // bottom: `${window.innerHeight - y }px`,
            // right: `${window.innerWidth - x}px`,
            transition: "padding 0.1s ease-in-out",
            zIndex: 9998,
            boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
            margin: 0,
            pointerEvents: "none",
            // transitionDelay: "100ms",
          }}
        >
          {isHover ? (
            <div
              style={{
                // width: "5px",
                // height: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="M220 128a4 4 0 0 1-4 4h-84v84a4 4 0 0 1-8 0v-84H40a4 4 0 0 1 0-8h84V40a4 4 0 0 1 8 0v84h84a4 4 0 0 1 4 4"
                />
              </svg>
            </div>
          ) : (
            <div
              style={{
                height: "5px",
                width: "5px",
                borderRadius: 50,
                backgroundColor: "white",
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Cursor;
