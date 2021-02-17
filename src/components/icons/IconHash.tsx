import React from 'react';
import IIconProps from "@/components/icons/common";

export const HashIcon: React.FC<IIconProps> = ({ color, ...props }) => (
  <svg data-testid={`HashIcon`} fill='none' stroke={color} viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 9H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 15H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 3L8 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 3L14 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
