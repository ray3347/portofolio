import { Typography } from "@mui/material";

function Credits(){
    return(
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
         SPECIAL THANKS
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

export default Credits;