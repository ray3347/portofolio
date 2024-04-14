import { IArticle } from "../interfaces";

export const aboutContent:IArticle[] = [
  {
    title: "Summary",
    content: [
      {
        subContent:
          "Hey there, I'm Ansel, a Software Developer with a Passion for Innovation!",
      },
      {
        subContent:
          " I'm all about turning ideas into reality through the magic of code. With a knack for problem-solving and a love for learning, I dive into projects headfirst, crafting elegant solutions that make a difference.",
      },
      {
        subContent:
          "In this fast-paced world of tech, I'm always up for a challenge and eager to stay ahead of the curve. So whether it's building apps, optimizing systems, or exploring the latest tech trends, count me in!",
      },
      {
        subContent:
          "Let's connect and create something amazing together!",
      },
    ],
  },
  {
    title: "Experience",
    content: [
      {
        subTitle: "Junior Programmer at IT Division BINUS",
        subContent:
          "Full-Stack Software Developer, tasked to develop application for BINUS Corporate, predominantly implements React for front-end development and .NET Core for Back-End Development , alongside with managing SQL Server Databases",
        subContentList: [
          "Developing Student Activity Web Application, an application used for registering and managing SAT and Development points for BINUS University Students and Staff which is used by approx. 6000+ users.",
          "Developing GA Connect Application, an internal tool used for assets and employee data management by the General Affairs division at BINUS Corporate.",
          "Developing One Stop Recruitment Web Application, an application used for managing employee recruitment for Bina Nusantara IT Division.",
        ],
      },
    ],
  },
];
