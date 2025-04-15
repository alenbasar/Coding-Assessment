import { Contact } from './types.ts'

export const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch('/api/data.json')
  if (!response.ok) throw new Error('Failed to fetch contacts')
  return (await response.json()).contacts
}
