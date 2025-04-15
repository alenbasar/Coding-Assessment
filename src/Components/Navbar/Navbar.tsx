import type React from 'react'
import { NavbarContainer } from './Navbar.styles'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import Icon from '../Icon'

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Icon name={'lightningFill'} />
            <ThemeSwitch />
        </NavbarContainer>
    )
}

export default Navbar
