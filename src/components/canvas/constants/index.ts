import { Vector3 } from "react-three-fiber";
import { IModelProps } from "../interfaces";

export const objects: IModelProps[] = [
  {
    name: "Curly",
    color: "#B47B82",
    position: [1, -11, -20],
    rotation: [2, 0, -0],
  },
  {
    name: "DNA",
    color: "#C6878F",
    position: [20, -10, -17],
    rotation: [1, 1, -2],
    scale: 2,
    url: "/credits"
  },
  {
    name: "Headphones",
    color: "#BF9292",
    position: [20, 2, 4],
    rotation: [2, 0, 1],
    url: "/about"
  },
  {
    name: "Notebook",
    color: "#B79D94",
    position: [-15, -2, -15],
    rotation: [10, 2, 0],
    url: "/"
  },
  {
    name: "Rocket003",
    color: "#A79A95",
    position: [18, 15, -25],
    rotation: [2, 0, -0],
    url: "/sandbox"
  },
  {
    name: "Roundcube001",
    color: "#969696",
    position: [-25, -4, 5],
    rotation: [1, 10, 0],
    scale: 0.5,
    url: "/"
  },
  {
    name: "Table",
    color: "#7F8089",
    position: [1, -4, -28],
    rotation: [1, 0, -1],
    scale: 0.5,
    url: "/"
  },
  {
    name: "VR_Headset",
    color: "#4B5F78",
    position: [7, -15, 28],
    rotation: [1, 0, -1],
    scale: 5,
    url: "/projects"
  },
  {
    name: "Zeppelin",
    color: "#C38D91",
    position: [-20, 10, 10],
    rotation: [3, -1, 3],
    scale: 0.005,
    url: "/contacts"
  },
];

const EPSILON = 1e-5;
export function approxZero( number: number, error: number = EPSILON ): boolean {

	return Math.abs( number ) < error;

}

export function approxEquals( a: number, b: number, error: number = EPSILON ): boolean {

	return approxZero( a - b, error );

}