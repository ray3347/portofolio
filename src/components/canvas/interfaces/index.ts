import { IRoutes } from "@/interfaces";
import { Vector3 } from "react-three-fiber";

export interface IProxyCurrentState{
    current: string | null;
    position: any;
}

export interface IModelProps{
    name: string;
    position: any;
    color: string;
    rotation?: any;
    scale?: number;    
    func?: (zoom: boolean) => void;
    url: IRoutes;
}

export interface IPageProps{
    width?: string;
    height?: string;
    cameraPos?: Vector3;
    callback?: (zoom: boolean) => void;
    currPath?: string;
}

export interface IControlProps{
    func?: (zoom: boolean) => void;
    currPath?: string;
}

export interface IControlRef{
    func: () => void;
}