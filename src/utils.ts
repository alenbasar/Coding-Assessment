import type { Contact } from './api/types'

export function searchContacts(contacts: Contact[], query: string): Contact[] {
  if (!query.trim()) return contacts

  const normalizedQuery = query.toLowerCase()

  return contacts.filter(
    ({ firstName, lastName, email }) =>
      firstName.toLowerCase().includes(normalizedQuery) ||
      lastName.toLowerCase().includes(normalizedQuery) ||
      (email && email.toLowerCase().includes(normalizedQuery))
  )
}

export function groupBy<T, K extends keyof T>(
  items: T[],
  property: K
): Record<string, T[]> {
  const result: Record<string, T[]> = {}

  items?.forEach((item) => {
    const key = String(item[property])
    if (!result[key]) {
      result[key] = []
    }

    result[key].push(item)
  })

  return result
}
