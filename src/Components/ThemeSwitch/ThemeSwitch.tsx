'use client'

import type React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { ThemeSwitchButton } from '../Navbar/Navbar.styles'
import Icon from '../Icon'

const ThemeSwitch: React.FC = () => {
    const { mode, toggleTheme } = useTheme()

    return (
        <ThemeSwitchButton onClick={toggleTheme}>
            <Icon
                name={mode === 'light' ? 'lightbulbOffFill' : 'lightbulbFill'}
            />
        </ThemeSwitchButton>
    )
}

export default ThemeSwitch
