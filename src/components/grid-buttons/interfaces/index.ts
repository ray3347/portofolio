export interface IGridButtonsProps{
    image: any;
    title: string;
    desc: string | null;
    isLarge: boolean;
    activeComponent: string | null;
    setActive: (e: string | null) => void;
}