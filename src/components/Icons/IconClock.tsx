import React from 'react'
import IIconProps from '@/components/Icons/common'

export const ClockIcon: React.FC<IIconProps> = ({
  color,
  ariaLabel,
  ...props
}) => (
  <svg
    data-testid={`ClockIcon`}
    fill='none'
    stroke={color}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={ariaLabel}
    {...props}
  >
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12 6V12L16 14'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)
