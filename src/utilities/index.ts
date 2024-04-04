import { gridTypes } from "@/constants";
import { ICanvasCameraAction, ICanvasCameraState, IGridAction, IGridState, IMouseMove, IMousePosition } from "@/interfaces";
import { create } from "zustand";

export const useMousePosition = create<IMousePosition & IMouseMove>()((set)=>({
    x: 0,
    y: 0,
    isHover: false,
    mov: (x,y) => set(()=>({
        x: x,
        y: y
    })),
    hovCheck: (isHover) => set(()=>({
        isHover: isHover
    }))
}))

export const useCanvasCamera = create<ICanvasCameraState & ICanvasCameraAction>()((set)=>({
    x: 0,
    y: -10,
    z: 80,
    isZoom: false,
    name: null,
    look: (x,y,z, name)=> set(()=>({
        x:x,
        y:y,
        z:z,
        name: name
    })),
    zoom: (isZoom) => set(()=>({
        isZoom: isZoom
    }))
}))

export const useProjects =  create<IGridState & IGridAction>()((set)=>({
    active: null,
    mode: gridTypes.grid,
    activate: (active)=> set(()=>({
        active: active
    })),
    switchMode: (mode)=> set(()=>({
        mode: mode
    }))
}))

