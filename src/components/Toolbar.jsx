import React from "react";
import "../styles/toolbar.scss"

const Toolbar= () =>{
  return (
    <div className="toolbar">
      <button className="toolbar__btn brush" />
      <button className="toolbar__btn rect" />
      <button className="toolbar__btn circle" />
      <button className="toolbar__btn eraser" />
      <button className="toolbar__btn line" />
      <button className="toolbar__btn colors" />
    </div>
  );
};
export default Toolbar;