import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 60px;
    background-color: ${({ theme }) => theme.bgPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ThemeSwitchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.textColor};
    border: 0px solid ${({ theme }) => theme.borderColor};
    border-radius: 50%;
    padding: 8px 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.hoverBg};
    }

    &:focus {
        outline: none;
    }
`
