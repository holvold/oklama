import React from 'react'
import { Route, Link } from 'react-router-dom'

import './App.css'
import Copyright from './components/copyright/Copyright'
import Icon from './components/icon/Icon'
import ReturnButton from './components/returnButton/ReturnButton'
import FolderIcon from './img/folder98.png'
import HtmlIcon from './img/html.png'
import TxtIcon from './img/txtIcon.png'


function App() {
  return (
    <div className="Start-page">
      <div className="Menu-wrapper" >
        <Link to="/" className="Link-tag ReturnButton-component">
          <Route exact={true} path='/openfolder'>
            <ReturnButton />
          </Route>  
        </Link>
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
        <Route exact={true} path='/openfolder' 
          render={(props) => (<Icon {...props} icon={TxtIcon} type={'still'} text={'about_me.txt'} textStyle={'windows'} isAuthed={true} />)}
        />
      </div>
      <div className="Copyright-component">
        <Copyright />
      </div>
    </div>
  );
}

export default App
