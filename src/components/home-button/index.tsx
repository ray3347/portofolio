import { useCanvasCamera } from "@/utilities";
import GridButtons from "../grid-buttons";
import { useRouter } from "next/navigation";

function HomeButton(){
    const {look} = useCanvasCamera();
    const router = useRouter();
    
    return(
        <GridButtons
        image={"/home-icon.svg"}
        isLarge={false}
        title="home"
        desc={null}
        setActive={(e) => {
          look(0, -10, 80, null);
          router.push("/")
        }}
        background="linear-gradient(to left, #191C27, #e52e71)"
      />
    );
}

export default HomeButton;