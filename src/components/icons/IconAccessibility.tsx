import React from 'react';
import IIconProps from "@/components/icons/common";

export const AccessibilityIcon: React.FC<IIconProps> = ({ color, ...props }) => (
  <svg data-testid={`AccessibilityIcon`} fill={color} stroke='none' viewBox='0 0 16 18' xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66668 2.33335C9.66668 3.25002 8.91668 4.00002 8.00001 4.00002C7.08334 4.00002 6.33334 3.25002 6.33334 2.33335C6.33334 1.41669 7.08334 0.666687 8.00001 0.666687C8.91668 0.666687 9.66668 1.41669 9.66668 2.33335ZM8 4.83335C10.3583 4.83335 12.9083 4.58335 15.0833 4.00002L15.5 5.66668C13.95 6.08335 12.1667 6.35835 10.5 6.50002V17.3334H8.83333V12.3334H7.16667V17.3334H5.5V6.50002C3.83333 6.35835 2.05 6.08335 0.5 5.66668L0.916667 4.00002C3.09167 4.58335 5.64167 4.83335 8 4.83335Z" />
  </svg>
);
