import type React from 'react'
import { StyledSvg } from './Icon.styles.ts'
import { IIconProps } from './types.ts'
import { icons } from './icons.ts'
import { useTheme } from '../../context/ThemeContext.tsx'

const Icon: React.FC<IIconProps> = ({
  name,
  width = 24,
  height = 24,
  color,
  className,
  title,
  ...props
}) => {
  const { mode } = useTheme()

  return (
    <StyledSvg
      width={width}
      height={height}
      fill={color || icons[name].theme[mode]}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
      $color={color || icons[name].theme[mode]}
      aria-hidden={!title}
      $isOpen={props.isOpen}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d={icons[name].path} />
    </StyledSvg>
  )
}

export default Icon
