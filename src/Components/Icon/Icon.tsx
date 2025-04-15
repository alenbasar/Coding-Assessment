import type React from 'react'
import { StyledSvg } from './Icon.styles.ts'
import { IIconProps } from './types.ts'
import { icons } from './icons.ts'

const Icon: React.FC<IIconProps> = ({
  ...props
}) => {
  const { mode } = useTheme()
  return (
    <StyledSvg
      {...props}
    >
      {title && <title>{title}</title>}
      <path d={icons[name].path} />
    </StyledSvg>
  )
}

export default Icon
