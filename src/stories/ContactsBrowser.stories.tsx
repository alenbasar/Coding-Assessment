import type { Meta, StoryObj } from '@storybook/react'
import ContactsBrowser from '../Components/Contact/ContactsBrowser.tsx'

const meta: Meta<typeof ContactsBrowser> = {
  title: 'Components/ContactsBrowser',
  component: ContactsBrowser,
  argTypes: {
    titleBy: { control: 'select', options: ['status'] },
  },
}

export default meta

type Story = StoryObj<typeof ContactsBrowser>

export const Default: Story = {
  args: {
    titleBy: 'status',
  },
  parameters: {
    mockServiceWorkers: {
      msw: [
        {
          path: '/api/contacts',
          method: 'GET',
          status: 200,
          response: [
            {
              id: 1,
              firstName: 'Alice',
              lastName: 'Johnson',
              status: 'Attended',
            },
            { id: 2, firstName: 'Bob', lastName: 'Williams', status: 'Absent' },
          ],
        },
      ],
    },
  },
}

export const Error: Story = {
  args: {
    titleBy: 'status',
  },
  parameters: {
    mockServiceWorkers: {
      msw: [
        {
          path: '/api/contacts',
          method: 'GET',
          status: 500,
          response: 'Internal Server Error',
        },
      ],
    },
  },
}
