import type { DefaultTheme } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

type GlobalStylesProps = {
    theme?: DefaultTheme
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${({ theme }) => theme?.bgSecondary || '#f5f5f5'};
        color: ${({ theme }) => theme?.textColor || '#333333'};
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    * {
        box-sizing: border-box;
    }
`
