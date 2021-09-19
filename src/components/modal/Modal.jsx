import React from 'react'
import './Modal.scss'

function Modal({ show, setShow }) {
  if (!show) {
    return null
  } else {
    return (
      <div className="modal" >
        <div className="content">Hello Modal</div>
        <div className="actions" >
          <button className="toggle-button" onClick={() => setShow(false)}> CLOSE </button>
        </div>
      </div>
    )
  }
}

export default Modal
