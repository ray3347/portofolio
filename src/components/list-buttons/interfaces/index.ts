export interface IListButtonsProps{
    image: any;
    title: string;
    desc: string;
    // isLarge: boolean;
    activeComponent: string | null;
    setActive: (e: any) => void;
}