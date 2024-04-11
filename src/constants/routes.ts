import { IRoutes } from "@/interfaces";

const routes: IRoutes[]=[
    {
        path: "/",
        title: "",
        description: ""
    },
    {
        path: "/projects",
        title: "Projects",
        description: "Check out my project collection here!"
    },
    {
        path: "/about",
        title: "About Me",
        description: "Get to know more about the developer!"
    },
    {
        path: "/contacts",
        title: "Socials",
        description: "See how to get in touch with me!"
    },
    {
        path: "/sandbox",
        title: "Sandbox",
        description: "Interesting experimental things I'm working on (coming soon)"
    },
    {
        path: "/credits",
        title: "Special Thanks",
        description: "Without these people, this project wouldn't be what it is, do check them out!"
    }
]

export const defaultRoute={
    homeRoute: routes[0],
    projectsRoute: routes[1],
    aboutRoute: routes[2],
    contactsRoute: routes[3],
    sandboxRoute: routes[4],
    creditsRoute: routes[5]
}