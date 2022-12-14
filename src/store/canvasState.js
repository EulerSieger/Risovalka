import { makeAutoObservable } from "mobx";

class CanvasState {
    canvas = this.canvas
    constructor(){
        makeAutoObservable(this)
    }
    
    setCanvas(canvas){
        this.canvas=canvas
    }
}

export default new CanvasState()