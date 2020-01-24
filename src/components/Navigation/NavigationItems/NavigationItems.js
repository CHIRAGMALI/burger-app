import React from 'react'
import NavigationItem from './NavigationItem'
import './NavigationItems.css'

const NavigationItems = () => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='/' exact={true}>Burger Builder</NavigationItem>
            <NavigationItem link='/orders'>Checkout</NavigationItem>
        </ul>
    )
}
export default NavigationItems