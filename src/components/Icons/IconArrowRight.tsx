import React from 'react'
import IIconProps from '@/components/Icons/common'

export const ArrowRightIcon: React.FC<IIconProps> = ({
  color,
  ariaLabel,
  ...props
}) => (
  <svg
    data-testid={`ArrowRightIcon`}
    fill={color}
    stroke='none'
    viewBox='0 0 22 22'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={ariaLabel}
    {...props}
  >
    <path d='M11.2543 5.21339C11.5912 4.87646 12.1374 4.87646 12.4744 5.21339L17.6508 10.3899C17.8126 10.5517 17.9035 10.7711 17.9035 10.9999C17.9035 11.2287 17.8126 11.4482 17.6508 11.61L12.4744 16.7864C12.1374 17.1234 11.5912 17.1234 11.2543 16.7864C10.9173 16.4495 10.9173 15.9033 11.2543 15.5663L14.9579 11.8627L4.96235 11.8627C4.48587 11.8627 4.09961 11.4764 4.09961 10.9999C4.09961 10.5234 4.48587 10.1372 4.96235 10.1372L14.9579 10.1372L11.2543 6.43349C10.9173 6.09657 10.9173 5.55031 11.2543 5.21339Z' />
  </svg>
)
