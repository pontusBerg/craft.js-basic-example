"use client"
import { useNode } from '@craftjs/core';
import React from 'react';


type Props = {
  background: string;
  padding: string;
  children: React.ReactNode;
}

export const Container = ({ background, padding, children }: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
      style={{ border: "1px solid black", minHeight: 200,background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props['background'],
    padding: node.data.props['padding'],
  }));

  return (
    <div>
      <form>
        <label>Background</label>
        <input
          type="color"
          name="background-color"
          value={background}
          onChange={(event) => {
            setProp((props: any) => (props.background = event.currentTarget.value), 500);
          }}
        />
      </form>
      <form>
        <label>Padding</label>
        <input
          type="range"
          defaultValue={padding}
          onChange={(event) =>
            setProp((props: any) => (props.padding = event.currentTarget.value), 500)
          }
        />
      </form>
    </div>
  );
};


