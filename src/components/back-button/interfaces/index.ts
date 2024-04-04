export interface IBackButtonProps{
    callbackFunc: () => void;
    position?: string;
    top?: number;
    bottom? : number;
    left?: number;
    right?: number;
    zIndex?: number;
}