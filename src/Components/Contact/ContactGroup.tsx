import type React from 'react'
import { useState } from 'react'
import type { IContactGroupProps } from './types.ts'
import {
  ContactInfo,
  ContactItem,
  DropdownButton,
  DropdownMenu,
  Email,
  Name,
} from './ContactList.styles.ts'
import Avatar from './Avatar.tsx'
import Icon from '../Icon'

const ContactGroup: React.FC<IContactGroupProps> = ({ title, contacts }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <DropdownButton onClick={toggle}>
        {title}
        <Icon name={'chevronRight'} width={14} isOpen={isOpen} />
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {contacts.map((contact) => (
          <ContactItem key={contact.id}>
            <Avatar contact={contact} />
            <ContactInfo>
              <Name>{`${contact.firstName} ${contact.lastName}`}</Name>
              {contact.email && <Email>{contact.email}</Email>}
            </ContactInfo>
          </ContactItem>
        ))}
      </DropdownMenu>
    </>
  )
}

export default ContactGroup
