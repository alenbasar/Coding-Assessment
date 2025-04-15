import type { Preview } from '@storybook/react'
import { ThemeProvider, themes } from '../src/context/ThemeContext'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={themes.light}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
