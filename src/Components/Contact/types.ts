import { Contact } from '../../api/types.ts'

export interface IContactsProps {
  titleBy: keyof Contact
}

export interface IContactGroupProps {
  title: string
  contacts: Contact[]
}

export interface ISearchBarProps {
  value: string
  onChange: (val: string) => void
}

export interface IAvatarProps {
  contact: Contact
}
