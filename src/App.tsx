import type React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import Navbar from './Components/Navbar/Navbar.tsx'
import ContactsBrowser from './Components/Contact/ContactsBrowser.tsx'

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <Navbar />
            <div
                style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ContactsBrowser titleBy="status" />
            </div>
        </ThemeProvider>
    )
}

export default App
