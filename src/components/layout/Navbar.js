import React, { } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Tabs, Tab, Typography, } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    // appBar: {
    //     zIndex: 
    // },
    link: {
        margin: 30,
        color: 'white'
    },
    activeLink: {
        margin: 30,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})

const Navbar = () => {
    const classes = useStyles()

    return (
        <AppBar position='static'>
            <Toolbar className='nav-container' variant='regular'>
                <NavLink exact to='/about' activeClassName={classes.activeLink} className={classes.link}>
                    <Typography variant='body1'>About</Typography>
                </NavLink>
                <NavLink exact to='/research-and-development' activeClassName={classes.activeLink} className={classes.link}>
                    <Typography variant='body1'>R&D</Typography>
                </NavLink>
                <NavLink exact to='/akr-001' activeClassName={classes.activeLink} className={classes.link}>
                    <Typography variant='body1'>AKR-001</Typography>
                </NavLink>
                <NavLink exact to='/investors' activeClassName={classes.activeLink} className={classes.link}>
                    <Typography variant='body1'>Investors</Typography>
                </NavLink>
                <NavLink exact to='/what-is-nash' activeClassName={classes.activeLink} className={classes.link}>
                    <Typography variant='body1'>NASH</Typography>
                </NavLink>
                <NavLink exact to='/contact' activeClassName={classes.activeLink} className={classes.link}>
                    <Typography variant='body1'>Contact</Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar