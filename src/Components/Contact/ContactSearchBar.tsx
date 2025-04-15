import React from 'react'
import { ISearchBarProps } from './types.ts'
import { SearchBar, SearchInput } from './ContactList.styles.ts'
import Icon from '../Icon'

const ContactSearchBar: React.FC<ISearchBarProps> = ({ value, onChange }) => (
  <SearchBar>
    <Icon name="search" position="absolute" top="5px" left="8px" width={20} />
    <SearchInput
    />
  </SearchBar>
)

export default ContactSearchBar
