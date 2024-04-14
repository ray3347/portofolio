import { aboutTypes, gridTypes } from "@/constants";
import {
  IAboutAction,
  IAboutState,
  ICanvasCameraAction,
  ICanvasCameraState,
  IContactsAction,
  IContactsState,
  IGridAction,
  IGridState,
  IHomeAction,
  IHomeState,
  IMouseMove,
  IMousePosition,
  IProjectAction,
  IProjectState,
} from "@/interfaces";
import { create } from "zustand";

export const useMousePosition = create<IMousePosition & IMouseMove>()(
  (set) => ({
    x: 0,
    y: 0,
    isHover: false,
    title: null,
    desc: null,
    mov: (x, y) =>
      set(() => ({
        x: x,
        y: y,
      })),
    hovCheck: (isHover) =>
      set(() => ({
        isHover: isHover,
      })),
    showInfo: (title, desc) =>
      set(() => ({
        title: title,
        desc: desc,
      })),
  })
);

export const useCanvasCamera = create<
  ICanvasCameraState & ICanvasCameraAction
>()((set) => ({
  x: 0,
  y: -10,
  z: 100,
  isZoom: false,
  name: null,
  look: (x, y, z, name) =>
    set(() => ({
      x: x,
      y: y,
      z: z,
      name: name,
    })),
  zoom: (isZoom) =>
    set(() => ({
      isZoom: isZoom,
    })),
}));

export const useProjects = create<
  IGridState & IGridAction & IProjectState & IProjectAction
>()((set) => ({
  active: null,
  mode: gridTypes.grid,
  activate: (active) =>
    set(() => ({
      active: active,
    })),
  switchMode: (mode) =>
    set(() => ({
      mode: mode,
    })),
  projects: [],
  fetch: (projects) =>
    set(() => ({
      projects: projects,
    })),
}));

export const useAbout = create<IAboutState & IAboutAction>()((set) => ({
  active: aboutTypes.summary,
  activate: (active) =>
    set(() => ({
      active: active,
    })),
}));

export const useSocials = create<IContactsState & IContactsAction>()((set) => ({
  socials: [],
  fetch: (socials) =>
    set(() => ({
      socials: socials,
    })),
}));

export const useHome = create<IHomeState & IHomeAction>()((set)=>({
  activeTitle: "Website",
  updateTitle: (activeTitle)=> set(()=>({
    activeTitle: activeTitle
  }))
}))