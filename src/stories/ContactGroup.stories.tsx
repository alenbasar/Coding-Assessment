import type { Meta, StoryObj } from '@storybook/react'
import mockData from '../../public/api/data.json'
import ContactGroup from '../Components/Contact/ContactGroup.tsx'
import { Contact, CONTACT_STATUS } from '../api/types.ts'

const meta: Meta<typeof ContactGroup> = {
  title: 'Components/ContactGroup',
  component: ContactGroup,
  argTypes: {
    title: { control: 'text' },
  },
}
export default meta

type Story = StoryObj<typeof ContactGroup>

export const Default: Story = {
  args: {
    title: CONTACT_STATUS[0],
    contacts: mockData.contacts as Contact[],
  },
}
