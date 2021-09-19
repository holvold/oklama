import React, { useState } from 'react'
import './TxtIcon.css'
import Modal from '../modal/Modal'

function TxtIcon({ icon, type, text, textStyle }) {
  const [show, setShow] = useState(false)

  return (
    <div className="Icon">
      <Modal setShow={setShow} show={show} />
      <div className="Icon-header" onClick={() => setShow(true)}>
        <img src={icon} className={`Icon-${type}`} alt="icon" />
        <p className={`Icon-text-${textStyle}`}>{text}</p>
      </div>
    </div>
  )
}

export default TxtIcon
