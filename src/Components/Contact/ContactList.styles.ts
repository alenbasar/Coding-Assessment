import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`
export const SearchBar = styled.div`
  position: relative;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 8px 8px 36px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.textColor};

  &:focus {
    border-color: ${({ theme }) => theme.borderColorFocus};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textMuted};
  }
`

export const DropdownButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: none;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
  }
`

export const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: ${({ theme }) => theme.bgPrimary};
`

export const ContactItem = styled.li`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.borderColorLight};

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
  }

  &:last-child {
    border-bottom: none;
  }
`

export const AvatarContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.avatarBg};
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ima: image/png;
`

export const ContactInfo = styled.div`
  flex: 1;
  min-width: 0;
`

export const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Email = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
