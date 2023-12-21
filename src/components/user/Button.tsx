import React from 'react';
import { useNode } from '@craftjs/core';

type Props = {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button
      ref={(ref) => connect(drag(ref))}
    >
      {children}
    </button>
  );
};


