import { observer } from "mobx-react-lite";
import React from "react";
import {useRef, useEffect, useState} from 'react'
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/canvas.scss";
import {Modal, Button} from "react-bootstrap"
import Brush from "../tools/Brush";
import { useParams } from "react-router-dom";

const Canvas = observer(() =>{
  const canvasRef = useRef()
  const usernameRef = useRef()
  const [modal, setModal] = useState(true)

  const params = useParams()
  console.log(params)

  useEffect( ()=>{
    canvasState.setCanvas(canvasRef.current)
    toolState.setTool(new Brush(canvasRef.current))
  },[])


  useEffect( ()=>{
    if(canvasState.username){
      const socket =  new WebSocket(`ws://localhost:5000/`)
      socket.onopen = () =>{
        console.log("conection sucseed")
        socket.send(JSON.stringify( {
          id:params.id,
          username: canvasState.username,
          method: "connection "
        } ))
      }

      socket.onmessage = (event) =>{
        console.log(event.data)
      }
    }
    
  },[canvasState.username])
 
  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  const connectHandler = () => {
    canvasState.setUsername(usernameRef.current.value)
    setModal(false)
  }

  return (
    <div className="canvas">
       <Modal show={modal} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" ref={usernameRef}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => connectHandler()}>
            Enter
          </Button>
        </Modal.Footer>
      </Modal>

        <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400} />
    </div>
  );
});
export default Canvas;