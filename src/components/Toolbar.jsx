import React from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/toolbar.scss"
import Brush from "../tools/Brush";
import Circle from "../tools/Circle";
import Eriser from "../tools/Eriser";
import Line from "../tools/Line";
import Rect from "../tools/Rect";

const Toolbar= () =>{

  const changeColor = e =>{
    toolState.setFillColor(e.target.value)
    toolState.setStrokeColor(e.target.value)
  }

  return (
    <div className="toolbar">
      <button className="toolbar__btn brush" onClick={()=> toolState.setTool(new Brush(canvasState.canvas))} />
      <button className="toolbar__btn rect" onClick={()=> toolState.setTool(new Rect(canvasState.canvas))} />
      <button className="toolbar__btn circle" onClick={()=> toolState.setTool(new Circle(canvasState.canvas))} />
      <button className="toolbar__btn eraser" onClick={()=> toolState.setTool(new Eriser(canvasState.canvas))} />
      <button className="toolbar__btn line" onClick={()=> toolState.setTool(new Line(canvasState.canvas))}/>
      <input onChange={e => changeColor(e)} type="color" className="toolbar__btn color"/>
      <button className="toolbar__btn undo"  onClick={()=> canvasState.undo()} />
      <button className="toolbar__btn redo" onClick={()=> canvasState.redo()}  />
      <button className="toolbar__btn save" />
    </div>
  );
};
export default Toolbar;