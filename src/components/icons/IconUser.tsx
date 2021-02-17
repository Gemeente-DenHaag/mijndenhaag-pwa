import React from 'react';
import IIconProps from "@/components/icons/common";

export const UserIcon: React.FC<IIconProps> = ({ color, ...props }) => (
  <svg data-testid={`UserIcon`} fill='none' stroke={color} viewBox='0 0 14 15' xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.6673 12.75V11.5833C11.6673 10.9645 11.4215 10.371 10.9839 9.93342C10.5463 9.49583 9.95282 9.25 9.33398 9.25H4.66732C4.04848 9.25 3.45499 9.49583 3.0174 9.93342C2.57982 10.371 2.33398 10.9645 2.33398 11.5833V12.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.99935 6.91667C8.28801 6.91667 9.33268 5.872 9.33268 4.58333C9.33268 3.29467 8.28801 2.25 6.99935 2.25C5.71068 2.25 4.66602 3.29467 4.66602 4.58333C4.66602 5.872 5.71068 6.91667 6.99935 6.91667Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);