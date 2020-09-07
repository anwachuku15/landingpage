import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import AKR from './pages/AKR'
import Nash from './pages/Nash'
import Research from './pages/Research'
import Investors from './pages/Investors'
import Contact from './pages/Contact'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/research-and-development' component={Research} />
        <Route exact path='/akr-001' component={AKR} />
        <Route exact path='/investors' component={Investors} />
        <Route exact path='/what-is-nash' component={Nash} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
)

export default Routes