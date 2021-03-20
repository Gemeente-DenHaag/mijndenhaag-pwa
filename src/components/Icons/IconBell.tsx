import React from 'react'
import IIconProps from '@/components/Icons/common'

export const BellIcon: React.FC<IIconProps> = ({
  color,
  ariaLabel,
  ...props
}) => (
  <svg
    data-testid={`BellIcon`}
    fill='none'
    stroke={color}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={ariaLabel}
    {...props}
  >
    <path
      d='M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M22 17H2C2.79565 17 3.55871 16.6839 4.12132 16.1213C4.68393 15.5587 5 14.7956 5 14V9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9V14C19 14.7956 19.3161 15.5587 19.8787 16.1213C20.4413 16.6839 21.2044 17 22 17Z'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
