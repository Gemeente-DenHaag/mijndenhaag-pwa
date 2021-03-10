import React from 'react'
import IIconProps from '@/components/Icons/common'

export const HambugerIcon: React.FC<IIconProps> = ({
  color,
  ariaLabel,
  ...props
}) => (
  <svg
    data-testid={`HamburgerIcon`}
    fill={color}
    stroke='none'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={ariaLabel}
    {...props}
  >
    <path
      d='M2.5 4.16671C2.5 3.70647 2.8731 3.33337 3.33333 3.33337H17.5C17.9602 3.33337 18.3333 3.70647 18.3333 4.16671C18.3333 4.62694 17.9602 5.00004 17.5 5.00004H3.33333C2.8731 5.00004 2.5 4.62694 2.5 4.16671Z'
      stroke-width='1'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M2.5 9.99996C2.5 9.53972 2.8731 9.16663 3.33333 9.16663H17.5C17.9602 9.16663 18.3333 9.53972 18.3333 9.99996C18.3333 10.4602 17.9602 10.8333 17.5 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 9.99996Z'
      stroke-width='1'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M2.5 15.8333C2.5 15.3731 2.8731 15 3.33333 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H3.33333C2.8731 16.6667 2.5 16.2936 2.5 15.8333Z'
      stroke-width='1'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)
