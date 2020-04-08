import React, { PropsWithChildren } from 'react';

interface IProps {
  style: React.CSSProperties;
  disable?: boolean;
}

export default ((props: PropsWithChildren<IProps>) => (
  <button style={props.style}>
    {props.children}
  </button>
)) as React.FC<PropsWithChildren<IProps>>;
