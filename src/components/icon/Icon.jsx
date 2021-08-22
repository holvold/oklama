import React from 'react'
import './Icon.css'

function Icon({ icon, type, text, textStyle }) {
  return (
    <div className="Icon">
      <header className="Icon-header">
        <img src={icon} className={ `Icon-${type}` } alt="icon" />
        <p className={ `Icon-text-${textStyle}` } >
          {text}
        </p>
      </header>
    </div>
  );
}

export default Icon
