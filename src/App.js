import React from 'react'
import { Route, Link } from 'react-router-dom'

import './App.css'
import Copyright from './components/copyright/Copyright'
import Icon from './components/icon/Icon'
import FolderIcon from './img/folder98.png'
import HtmlIcon from './img/html.png'


function App() {
  return (
    <div className="Start-page">
      <div className="Menu-wrapper" >
        <Link to="/openfolder" className="Link-tag">
          <Route exact={true} path='/' 
            render={(props) => (<Icon {...props} icon={FolderIcon} type={'tilt'} text={'folder_18'} textStyle={'old'} isAuthed={true} />)}
          />
        </Link>
        <a href="https://github.com/holvold" target="_blank" rel="noreferrer" className="Link-tag" >        
          <Route exact={true} path='/openfolder' 
            render={(props) => (<Icon {...props} icon={HtmlIcon} type={'still'} text={'github.html'} textStyle={'windows'} isAuthed={true} />)}
          />
        </a>
          <a href="https://www.linkedin.com/in/emil-hölvold-1678a0170/" target="_blank" rel="noreferrer" className="Link-tag" >        
          <Route exact={true} path='/openfolder' 
            render={(props) => (<Icon {...props} icon={HtmlIcon} type={'still'} text={'linkedin.html'} textStyle={'windows'} isAuthed={true} />)}
          />
        </a> 
      </div>
      <div className="Copyright-component">
        <Copyright />
      </div>
    </div>
  );
}

export default App
