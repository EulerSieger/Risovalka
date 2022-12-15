import React from "react";
import toolState from "../store/toolState";

const SettingsBar = () =>{
  return (
    <div className="settingbar">
      <label htmlFor="line-width">line width</label>
        <input
        onChange={e => toolState.setLineWidth(e.target.value)}
          className="line-width"
          id="line-width"
          type="number" 
          defaultValue={1} min={1} max={50} />

<label htmlFor="stroke-color">stroke color</label>
        <input
        onChange={e => toolState.setStrokeColor(e.target.value)}
          className="stroke-color"
          id="stroke-color"
          type="color" />
    </div>
  );
};
export default SettingsBar;