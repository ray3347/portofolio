"use client";
import HomeButton from "@/components/home-button";
import { useMousePosition, useSocials } from "@/utilities";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { fetchSocials } from "./utilities";
import { ISocials } from "@/interfaces";
import GridButtons from "@/components/grid-buttons";
import Loading from "@/components/loading";

function Contacts() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const { socials, fetch } = useSocials();
  const { hovCheck } = useMousePosition();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    if (socials.length <= 0) {
      setLoading(true);
      const data = fetchSocials().then((x: ISocials[]) => {
        fetch(x);
        setLoading(false);
      });
    }
  }, []);

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
            Social Media
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: isMd ? "1.7vw" : "0.7vw",
          }}
        >
          For business inquiries, or if you just want to chat, feel
          free to contact me on my socials listed below!
        </Typography>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              {socials.map((soc) => (
                <div
                  key={soc.type}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <GridButtons
                    image={soc.icon}
                    desc={null}
                    isLarge={false}
                    title={soc.type}
                    setActive={(e) => {
                      if (soc.url) {
                        window.open(soc.url);
                      }
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: isMd ? "1.7vw" : "0.7vw",
                    }}
                  >
                    {soc.id}
                  </Typography>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {/* <Typography sx={{
        fontSize: isMd ? "10px" : "14px",
      }}>
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

export default Contacts;
