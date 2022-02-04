import React from 'react'
import './Modal.scss'
// import '../../../node_modules/font-awesome/css/font-awesome.min.css'


function Modal({ show, setShow }) {
  if (!show)
    return null

  return (
    <div className="modal" >
      <div className="modal-wrapper">
        <header className="modal-header" >
          <button className='btn' onClick={() => setShow(false)}>X</button>
        </header>
        <div className="modal-content">
          <span>This is a work in progress project</span>
        </div>
      </div>
    </div>
  )
}

export default Modal
