// mouse pos
export interface IMousePosition{
    x: number;
    y: number;
    isHover: boolean;
    
}

export interface IMouseMove{
    mov: (x:IMousePosition['x'], y:IMousePosition['y']) => void;
    hovCheck : ( isHover:IMousePosition['isHover']) => void;
}

// camera management
export interface ICanvasCameraState{
    x: any;
    y: any;
    z: any;
    isZoom: boolean;
    name: string | null;
}

export interface ICanvasCameraAction{
    look: (x:ICanvasCameraState['x'], y:ICanvasCameraState['y'], z:ICanvasCameraState['z'], name: ICanvasCameraState['name']) => void;
    zoom: (isZoom: ICanvasCameraState['isZoom']) => void;
}

// project page
export interface IGridState{
    active: string | null;
    mode: string;
}

export interface IGridAction{
    activate: (project: IGridState['active']) => void;
    switchMode: (mode: IGridState['mode'])=> void;
}