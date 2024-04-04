import { IGridButtonsProps } from "@/components/grid-buttons/interfaces";
import { gridTypes } from "@/constants";
import { Button } from "@mui/material";
import React from "react";

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