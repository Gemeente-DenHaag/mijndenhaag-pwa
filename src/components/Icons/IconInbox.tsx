import React from 'react'
import IIconProps from '@/components/Icons/common'

export const InboxIcon: React.FC<IIconProps> = ({
  color,
  ariaLabel,
  ...props
}) => (
  <svg
    data-testid={`InboxIcon`}
    fill='none'
    stroke={color}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={ariaLabel}
    {...props}
  >
    <path
      d='M18.3327 10H13.3327L11.666 12.5H8.33268L6.66602 10H1.66602'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.54102 4.25837L1.66602 10V15C1.66602 15.4421 1.84161 15.866 2.15417 16.1786C2.46673 16.4911 2.89065 16.6667 3.33268 16.6667H16.666C17.108 16.6667 17.532 16.4911 17.8445 16.1786C18.1571 15.866 18.3327 15.4421 18.3327 15V10L15.4577 4.25837C15.3197 3.9807 15.107 3.74702 14.8435 3.58361C14.58 3.4202 14.2761 3.33354 13.966 3.33337H6.03268C5.72261 3.33354 5.41874 3.4202 5.15522 3.58361C4.8917 3.74702 4.679 3.9807 4.54102 4.25837V4.25837Z'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
