import React from 'react'
import IIconProps from '@/components/Icons/common'

export const MapIcon: React.FC<IIconProps> = ({ color, ...props }) => (
  <svg
    data-testid={`MapIcon`}
    fill='none'
    stroke={color}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0.833984 4.99996V18.3333L6.66732 15L13.334 18.3333L19.1673 15V1.66663L13.334 4.99996L6.66732 1.66663L0.833984 4.99996Z'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M6.66602 1.66663V15'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M13.334 5V18.3333'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)
