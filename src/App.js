import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './routes'
import { Link, useHistory, BrowserRouter as Router} from 'react-router-dom'
import appTheme from './util/appTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Navbar from './components/layout/Navbar';

// CONSIDER SEO

function App() {

  const theme = createMuiTheme(appTheme)

  // const history = useHistory()
  // const [path, setPath] = useState('')

  // window.addEventListener('load', () => {
  //   if (window.location.pathname === '/contact') {
  //     setPath(window.location.pathname)
  //   }
  // })

  // const checkPath = () => {
  //   history.listen((location) => {
  //     setPath(location)
  //   })
  // }

  // useEffect(() => {
  //   checkPath()
  // }, [])

  // const showContact = path
  // let _contact
  // if (showContact !== '/contact') {
  //   _contact = (<li><Link to='/contact'>Contact Me</Link></li>)
  // }

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
