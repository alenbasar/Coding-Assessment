import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        bgPrimary: string
        bgSecondary: string
        textColor: string
        textMuted: string
        borderColor: string
        borderColorLight: string
        borderColorFocus: string
        hoverBg: string
        inputBg: string
        iconColor: string
        avatarBg: string
    }
}
