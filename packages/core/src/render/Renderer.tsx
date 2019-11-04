import React, { useState, useMemo, useLayoutEffect } from "react";
import { NodeElement, Canvas } from "../nodes";
import { ROOT_NODE } from "craftjs-utils";
import { useInternalManager } from "../manager/useInternalManager";
import { useRef } from "react";

const invariant = require("invariant");

export type Renderer = {
  is: string
} & any;

export const Renderer: React.FC<Renderer> = ({
  is = 'span',
  children,
  ...props
}) => {
  const { handlers: {internal}, actions: { add, replaceNodes, setNodeEvent }, query: {getNode, getOptions, transformJSXToNode, deserialize } } = useInternalManager();
  const { nodes } = getOptions();
  const [rootNode, setRootNode] = useState();
  
 
  useLayoutEffect(() => {
    if (!nodes) {
      const rootCanvas = React.Children.only(children) as React.ReactElement;
      invariant(rootCanvas.type && rootCanvas.type == Canvas, "The immediate child of <Renderer /> has to be a Canvas");
      let node = transformJSXToNode(rootCanvas, {
        id: ROOT_NODE
      })
      add(node);
    } else {
      const rehydratedNodes = deserialize(nodes);
      replaceNodes(rehydratedNodes);
    }
    setRootNode(getNode(ROOT_NODE))

  }, []);

  const dom = useRef<HTMLElement>(null);

  return useMemo(() => (
    <>
      {
        rootNode ? (
          React.createElement(is, props, <NodeElement id={ROOT_NODE} />)
        ) : null
      }  
    </>
  ), [rootNode])
}
