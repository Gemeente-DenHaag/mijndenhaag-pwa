import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import IIconProps from "@/components/icons/common";

interface IIconWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, IIconProps {
  icon: React.FC<IIconProps>;
}

export const Icon: React.FC<IIconWrapperProps> = (props) => {
  const { size, color, icon, style: styleArg, ...svgProps } = props;
  let svgExtraProps: any = {};

  svgExtraProps.width = size ? `${size}px` : '20px';
  svgExtraProps.height = size ? `${size}px` : '20px';
  svgExtraProps.color = color ? color : '#4B4B4B';

  const IconComp: React.FC = icon
  return (
    <IconComp {...svgProps} {...svgExtraProps} />
  )
}