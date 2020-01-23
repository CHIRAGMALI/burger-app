import React from 'react'
import './Toolbar.css'
import Logo from '../../LOGO/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import { DrawerToggle } from '../SideBar/DrawerToggle'


const Toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className='ToolbarLogo'><Logo /></div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)
export default Toolbar