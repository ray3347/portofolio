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
  },
];

export const projectList: IProjects[] = [
  {
    title: "greenmate",
    desc: "GreenMate",
    icon: "flutter-icon.svg",
    url: "https://github.com/v-chns/greenmate",
    story:
      "A home gardening app that utilizes artificial intelligence (AI) to raise awareness towards gardening and air pollution. Made by Team GoodWaffle using Flutter for GDSC Indonesia's 2024 HackFest.",
  },
  {
    title: "greenmate-api",
    desc: "API GreenMate",
    icon: "nestjs-icon.svg",
    url: "https://github.com/ray3347/api-greenmate",
    story:
      "Back-End Repository for GreenMate Mobile Application, made with NestJS",
  },
  {
    title: "quoteful",
    desc: "Quoteful",
    icon: "android-icon.svg",
    url: "https://github.com/ray3347/quoteful",
    story:
      "Java-Based Android Application, implementing Web APIs to generate random quotes and store them using SQLLite",
  },
  {
    title: "mystic-grills",
    desc: "Mystic Grills",
    icon: "java-icon.svg",
    url: "https://github.com/ray3347/mysticGrills",
    story:
      "Native Full-Stack Desktop Application, made with JavaFX and MySQL",
  },
  {
      title: "research-ai",
      desc: "Deep Learning Research",
      icon: "research-icon.svg",
      url: "https://ieeexplore.ieee.org/document/10352209",
      story: "Research paper about deep learning on image classification, titled \"The Impact of Hyperparameter Tuning in Convolutional Neural Network on Image Classification Model: A Case Study of Plant Disease Detection\", available on IEEE Xplore ",
  },
  // {
  //     title: "greenmate-api",
  //     desc: "API GreenMate",
  //     icon: "nestjs-icon.svg",
  // },
  // {
  //     title: "greenmate-api",
  //     desc: "API GreenMate",
  //     icon: "nestjs-icon.svg",
  // },
  // {
  //     title: "greenmate-api",
  //     desc: "API GreenMate",
  //     icon: "nestjs-icon.svg",
  // },
  // {
  //     title: "greenmate-api",
  //     desc: "API GreenMate",
  //     icon: "nestjs-icon.svg",
  // },
  // {
  //     title: "greenmate-api",
  //     desc: "API GreenMate",
  //     icon: "nestjs-icon.svg",
  // },
];
