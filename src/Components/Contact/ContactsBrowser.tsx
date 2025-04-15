'use client'

import type React from 'react'
import { useEffect, useState } from 'react'
import { fetchContacts } from '../../api'
import ContactGroup from './ContactGroup.tsx'
import { groupBy, searchContacts } from '../../utils.ts'
import type { Contact } from '../../api/types.ts'
import type { IContactsProps } from './types.ts'
import { Container } from './ContactList.styles.ts'
import ContactSearchBar from './ContactSearchBar.tsx'

const ContactsBrowser: React.FC<IContactsProps> = ({ titleBy }) => {
  const [contactsData, setContactsData] = useState<Contact[] | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchContacts().then(setContactsData).catch(console.error)
  }, [])

  return !contactsData ? (
    'Failed to fetch contacts'
  ) : (
    <Container>
      <ContactSearchBar value={search} onChange={setSearch} />
      {Object.entries(
        groupBy(searchContacts(contactsData, search), titleBy)
      ).map(([status, contacts], i) => (
        <ContactGroup title={status} key={i + status} contacts={contacts} />
      ))}
    </Container>
  )
}

export default ContactsBrowser
