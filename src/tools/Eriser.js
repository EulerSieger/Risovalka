import Brush from "./Brush"

export default class Eriser extends Brush {

    constructor(canvas){super(canvas)};
 

    draw(x,y){
        this.ctx.lineTo(x,y)
        this.ctx.strokeStyle = "white"
        this.ctx.stroke();
    }

}