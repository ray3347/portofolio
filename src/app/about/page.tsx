"use client";
import HomeButton from "@/components/home-button";
import WordButton from "@/components/word-button";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAbout } from "@/utilities";
import { aboutContent } from "./constants";

function About() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const { active, activate } = useAbout();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
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
            About Me
          </Typography>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "40%",
            //   borderRadius: "3vh",
            //   background: "black",
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/ansel-portofolio.appspot.com/o/ansel-halim-stg-recede.gif?alt=media&token=cfe943a5-e197-4374-9634-127770893043)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            //   border: "solid 2px #e52e71",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "55%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {aboutContent.map((obj) => (
                <WordButton
                  idx={obj.title}
                  key={obj.title}
                  content={obj.title}
                  componentGroup={active}
                  func={activate}
                />
              ))}
            </div>
            <WordButton
              key={"download"}
              idx="download"
              componentGroup={null}
              content={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <>{isMd ? "CV" : "Download CV"}</>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.2023 12L3.2023 7L4.6023 5.55L7.2023 8.15V0H9.2023V8.15L11.8023 5.55L13.2023 7L8.2023 12ZM2.2023 16C1.6523 16 1.18163 15.8043 0.790301 15.413C0.398968 15.0217 0.202968 14.5507 0.202301 14V11H2.2023V14H14.2023V11H16.2023V14C16.2023 14.55 16.0066 15.021 15.6153 15.413C15.224 15.805 14.753 16.0007 14.2023 16H2.2023Z"
                      fill="white"
                    />
                  </svg>
                </div>
              }
              func={(e) => {
                window.open(
                  "https://firebasestorage.googleapis.com/v0/b/ansel-portofolio.appspot.com/o/CV%20ATS.pdf?alt=media&token=d7d269ae-58be-4d41-8ccf-4969b2946629"
                );
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              gap: "10px",
              overflow: "auto",
              scrollbarWidth: "thin",
              fontSize: isMd ? "1.7vw" : "0.7vw",
              color: "white",
              textAlign: "justify",
              paddingRight: isMd ? "1.7vw" : "0.7vw",
            }}
          >
            <Typography
              sx={{
                fontSize: isMd ? "2.5vw" : "1.5vw",
                backgroundImage: "linear-gradient(to left, #ff8a00, #e52e71)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bolder",
                textAlign: "left",
              }}
            >
              {active}
            </Typography>
            <div>
              {aboutContent
                .find((x) => x.title === active)
                ?.content.map((obj) => (
                  <>
                    {obj.subTitle && (
                      <Typography
                        sx={{
                          fontSize: isMd ? "2vw" : "1vw",
                        }}
                      >
                        {obj.subTitle}
                        
                    <br />
                      </Typography>
                    )}
                    {obj.subContent && <>{obj.subContent}<br/><br/></>}
                    
                    {obj.subContentList && (
                      <>
                        {obj.subContentList.map((list) => (
                          <>
                            <li key={list}>{list}</li>
                          </>
                        ))}
                        <br/><br/>
                      </>
                    )}
                  </>
                ))}
            </div>

            {/* Hey there, I'm Ansel, a Software Developer with a Passion for
              Innovation!
              {<><br/><br/></>}
              I'm all about turning ideas into reality through
              the magic of code. With a knack for problem-solving and a love for
              learning, I dive into projects headfirst, crafting elegant
              solutions that make a difference. 
              {<><br/><br/></>}
              But it's not just about the
              code for me. I thrive on collaboration, working closely with teams
              to bring ideas to life and create memorable user experiences.
              {<><br/><br/></>}
              In this fast-paced world of tech, I'm always up for a challenge
              and eager to stay ahead of the curve. So whether it's building
              apps, optimizing systems, or exploring the latest tech trends,
              count me in! 
              {<><br/><br/></>}
              Let's connect and create something amazing
              together! */}
          </div>
        </div>
      </div>
      {/* <AboutContent/> */}
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

export default About;
