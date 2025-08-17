import React from 'react';

import './index.css';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children, className, ...remainingProps }) => {
  return (
    <div className={`${className} card`} {...remainingProps}>{children}</div>
  );
};