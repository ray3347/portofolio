"use client";
import HomeButton from "@/components/home-button";
import Loading from "@/components/loading";
import UnderConstruction from "@/components/under-construction";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

function Sandbox() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
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
            gap: "2vw",
          }}
        >
          <HomeButton />
          <Typography
            sx={{
              fontSize: isMd ? "2.5vw" : "1.5vw",
              fontWeight: "bold",
            }}
          >
            Sandbox
          </Typography>
        </div>
      </div>
      <UnderConstruction/>
          {/* <Loading/> */}
     
    </div>
  );
}

export default Sandbox;
