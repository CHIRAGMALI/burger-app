import React from 'react'
import NavigationItem from './NavigationItem'
import './NavigationItems.css'

const NavigationItems = () => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
            <NavigationItem link='/' active={false}>Checkout</NavigationItem>
        </ul>
    )
}
export default NavigationItems