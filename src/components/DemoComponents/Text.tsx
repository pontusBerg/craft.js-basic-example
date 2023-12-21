"use client"
import React, { useState, useEffect } from 'react';
import { useNode } from '@craftjs/core';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';


type Props = {
  text: string
  fontSize: number;
}

export const Text = ({ text, fontSize, ...props }: Props) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
    >
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(event: ContentEditableEvent) =>
          setProp(
            (props: any) =>
              (props.text = event.currentTarget.value.replace(/<\/?[^>]+(>|$)/g, '')),
            500
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    text: node.data.props["text"],
    fontSize: node.data.props["fontSize"],
  }));

  return (
    <>
      <form>
        <label>Font size</label>
        <input
          type="range"
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setProp((props: any) => (props.fontSize = event.currentTarget.value), 1000);
          }}
        />
      </form>
    </>
  );
};

export const TextDefaultProps = {
  text: 'Hi',
  fontSize: 20,
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
