import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  size?: number;
  stroke?: string;
  icon: React.FC;
}

export const Icon: React.FC<IIconProps> = (props) => {
  const { size, stroke, icon, style: styleArg, ...svgProps } = props;
  let svgExtraProps: any = {};

  svgExtraProps.width = size ? `${size}px` : '20px';
  svgExtraProps.height = size ? `${size}px` : '20px';

  svgExtraProps.style = stroke ? { stroke, ...styleArg } : undefined;

  const IconComp: React.FC = icon
  return (
    <IconComp {...svgProps} {...svgExtraProps} />
  )
}