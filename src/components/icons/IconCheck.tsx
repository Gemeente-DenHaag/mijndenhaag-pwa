import React from 'react';
import IIconProps from "@/components/icons/common";

export const CheckIcon: React.FC<IIconProps> = ({ color, ...props }) => (
  <svg data-testid={`CheckIcon`} fill={color} stroke='none' viewBox='0 0 20 20' xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.1174 4.23702C15.4088 4.49602 15.435 4.94219 15.176 5.23357L7.64662 13.7042C7.51266 13.8549 7.32066 13.9411 7.11903 13.9411C6.91741 13.9411 6.7254 13.8549 6.59145 13.7042L2.82674 9.46886C2.56774 9.17749 2.59399 8.73132 2.88536 8.47232C3.17674 8.21332 3.62291 8.23956 3.88191 8.53094L7.11903 12.1727L14.1209 4.29564C14.3799 4.00427 14.826 3.97802 15.1174 4.23702Z" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);