import styled, { css } from 'styled-components'

export const StyledSvg = styled.svg<{
  $color?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  $isOpen?: boolean
}>`
  color: ${({ $color, theme }) => $color || theme.iconColor};
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.1s ease-in-out;
  position: ${({ position }) => position || 'relative'};
  top: ${({ top }) => top || '0'};
  bottom: ${({ bottom }) => bottom || '0'};
  left: ${({ left }) => left || '0'};
  right: ${({ right }) => right || '0'};
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(90deg); // Rotate to chevronDown position
    `}
`
