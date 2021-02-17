import React from 'react';
import IIconProps from "@/components/icons/common";

export const SearchIcon: React.FC<IIconProps> = ({ color, ...props }) => (
  <svg data-testid={`SearchIcon`} fill='none' stroke={color} viewBox='0 0 14 14' xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.26667 9.53333C7.62308 9.53333 9.53333 7.62308 9.53333 5.26667C9.53333 2.91025 7.62308 1 5.26667 1C2.91025 1 1 2.91025 1 5.26667C1 7.62308 2.91025 9.53333 5.26667 9.53333Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.9996 13.0001L8.59961 8.6001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
