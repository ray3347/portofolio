import { useMousePosition } from "@/utilities";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function HoverPopup() {
  const { x, y, title, desc } = useMousePosition();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const [currTitle, setCurrTitle] = useState<string | null>(null);

  const boxRef: any = useRef();
  const contentRef: any = useRef();

  useEffect(() => {
    if (title != currTitle) {
      setCurrTitle(title);
      const tl = gsap.timeline();
      if (boxRef.current) {
        tl.to(boxRef.current, { width: "auto", ease: "power3.inOut" });
      }
    }
  }, [title]);

  return (
    <>
      {title && (
        <div
          ref={boxRef}
          style={{
            borderRadius: "1.5vh",
            padding: "2vh",
            display: "flex",
            boxShadow: "0 0 10px rgba(229, 46, 113, 0.5)",
            background: "#0C090A",
            position: "fixed",
            top: `${y - 82}px`,
            left: `${x + 3}px`,
            pointerEvents: "none",
            zIndex: 9999,
            borderBottomLeftRadius: "0",
            width: "0vh",
          }}
        >
          <div
            ref={contentRef}
            style={{
              gap: "10px",
              overflow: "hidden",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              display: "flex",
              textAlign: "left",
            }}
          >
            {title && (
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                  backgroundImage:
                    "linear-gradient(to right, #ff8a00, #e52e71)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {title}
              </p>
            )}
            {desc && (
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                {desc}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default HoverPopup;
