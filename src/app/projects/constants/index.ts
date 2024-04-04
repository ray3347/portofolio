import { gridTypes } from "@/constants";
import { IProjects } from "../interfaces";

export const typeList = [
    {
      name: gridTypes.grid,    
      desc: null,
      icon: "grid-icon.svg",
    },
    {
        name: gridTypes.list,
        icon: "list-icon.svg",
        desc: null,
    }
  ];

export const projectList: IProjects[] = [
    {
        title: "greenmate",
        desc: "GreenMate",
        icon: "flutter-icon.svg",
    },
    {
        title: "greenmate-api",
        desc: "API GreenMate",
        icon: "nestjs-icon.svg",
    },
]