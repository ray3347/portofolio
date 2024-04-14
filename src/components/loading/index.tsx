import { MutatingDots } from "react-loader-spinner";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MutatingDots 
        visible={true}
        height="100"
        width="100"
        color="#ff8a00"
        secondaryColor="#e52e71"
        radius="11"
        />
      </div>
    </div>
  );
}

export default Loading;
