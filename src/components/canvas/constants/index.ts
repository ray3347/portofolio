import { Vector3 } from "react-three-fiber";
import { IModelProps } from "../interfaces";
import { defaultRoute } from "@/constants/routes";

// export const objects: IModelProps[] = [
//   // {
//   //   name: "Curly",
//   //   color: "#B47B82",
//   //   position: [1, -11, -20],
//   //   rotation: [2, 0, -0],
//   // },
//   {
//     name: "DNA",
//     color: "#C6878F",
//     position: [20, -10, -17],
//     rotation: [1, 1, -2],
//     scale: 2,
//     url: defaultRoute.creditsRoute
//   },
//   {
//     name: "Headphones",
//     color: "#BF9292",
//     position: [20, 2, 4],
//     rotation: [2, 0, 1],
//     url: defaultRoute.aboutRoute
//   },
//   {
//     name: "Notebook",
//     color: "#B79D94",
//     position: [-15, -2, -15],
//     rotation: [10, 2, 0],
//     url: defaultRoute.homeRoute
//   },
//   {
//     name: "Rocket003",
//     color: "#A79A95",
//     position: [18, 15, -25],
//     rotation: [2, 0, -0],
//     url: defaultRoute.sandboxRoute
//   },
//   {
//     name: "Roundcube001",
//     color: "#969696",
//     position: [-25, -4, 5],
//     rotation: [1, 10, 0],
//     scale: 0.5,
//     url: defaultRoute.homeRoute
//   },
//   {
//     name: "Table",
//     color: "#7F8089",
//     position: [1, -4, -28],
//     rotation: [1, 0, -1],
//     scale: 0.5,
//     url: defaultRoute.homeRoute
//   },
//   {
//     name: "VR_Headset",
//     color: "#4B5F78",
//     position: [7, -15, 28],
//     rotation: [1, 0, -1],
//     scale: 5,
//     url: defaultRoute.projectsRoute
//   },
//   {
//     name: "Zeppelin",
//     color: "#C38D91",
//     position: [-20, 10, 10],
//     rotation: [3, -1, 3],
//     scale: 0.005,
//     url: defaultRoute.contactsRoute
//   },
// ];

export const objects: IModelProps[] = [
  {
    name: "AwardsPage",
    color: "#ffbc70",
    position: [10, 30, -38],
    rotation: [1, 2, -1],
    scale: 25,
    url: defaultRoute.creditsRoute
  },
  {
    name: "ProfilePage",
    color: "#ffaadb",
    position: [40, -5, -10],
    rotation: [0, 2, 1],
    scale: 25,
    url: defaultRoute.aboutRoute
  },
  {
    name: "Controller",
    color: "#7f7f7f",
    position: [-25, 5, -40],
    rotation: [1, -2, -0],
    scale: 20,
    url: defaultRoute.sandboxRoute
  },
  {
    name: "ProjectPage",
    color: "#fc9fae",
    position: [7, -10, 20],
    rotation: [0.3, 0.5, -0],
    scale: 14,
    url: defaultRoute.projectsRoute
  },
  {
    name: "SocialsPage",
    color: "#bffff2",
    position: [-20, 10, 10],
    rotation: [3, -1, 3],
    scale: 20,
    url: defaultRoute.contactsRoute
  },  
  {
    name: "Gear",
    color: "#7F8089",
    position: [-50, -30, -20],
    rotation: [-1, 0, -1],
    scale: 25,
    url: defaultRoute.homeRoute
  },
];

const EPSILON = 1e-5;
export function approxZero( number: number, error: number = EPSILON ): boolean {

	return Math.abs( number ) < error;

}

export function approxEquals( a: number, b: number, error: number = EPSILON ): boolean {

	return approxZero( a - b, error );

}