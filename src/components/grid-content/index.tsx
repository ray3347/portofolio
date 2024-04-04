import { useProjects } from "@/utilities";
import { typeList } from "./constants";
import GridButtons from "../grid-buttons";

function GridContent() {
  const { active, mode, activate, switchMode } = useProjects();

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            flexDirection: "row",
            gap: "10px"
          }}
        >
          {/* {typeList.map((obj) => (
            <GridButtons image={obj.icon} title={obj.name} desc={obj.desc} isLarge={false}/>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default GridContent;
