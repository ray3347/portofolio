export interface IProjects{
    title: string;
    icon: string;
    desc: string;
    url?: string;
    story?:string;
    assets?: string[];
}

export interface IProjectsProps{
    projects: IProjects[];
}