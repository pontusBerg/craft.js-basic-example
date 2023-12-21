import React from 'react';
import { useEditor } from '@craftjs/core';

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId && state.nodes[currentNodeId]) {
      const currentNode = state.nodes[currentNodeId];

      if (!currentNode) {
        return
      }

      selected = {
        id: currentNodeId,
        name: currentNode.data && currentNode.data.name,
        settings:
          currentNode.related && currentNode.related["settings"],
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return isEnabled && selected ? (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <h1>Selected</h1>
              </div>
              <div>
                <div
                >
                  {selected.name}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          <button
            color="default"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ) : null;
};
