import React from 'react'
import IIconProps from '@/components/Icons/common'

export const ArchiveIcon: React.FC<IIconProps> = ({
  color,
  ariaLabel,
  ...props
}) => (
  <svg
    data-testid={`ArchiveIcon`}
    fill='none'
    stroke={color}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={ariaLabel}
    {...props}
  >
    <path
      d='M17.5 6.66663V17.5H2.5V6.66663 M19.1673 2.5H0.833984V6.66667H19.1673V2.5Z M8.33398 10H11.6673'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
