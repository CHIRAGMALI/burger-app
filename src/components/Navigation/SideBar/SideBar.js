import React from 'react'
import Logo from '../../LOGO/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideBar.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const SideBar = (props) => {

    const classes = ['SideBar', props.show ? 'Open' : 'Close'].join(' ');
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closeSideBar} />
            <div className={classes}>
                <div className='SideBarLogo'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideBar
