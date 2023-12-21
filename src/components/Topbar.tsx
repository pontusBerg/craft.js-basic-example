"use client"
import React, { useState } from 'react';
import { useEditor } from '@craftjs/core';
import copy from 'copy-to-clipboard';
import lz from 'lzutf8';

export const Topbar = () => {
  const { actions, query, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: state.options.enabled && query.history.canUndo(),
      canRedo: state.options.enabled && query.history.canRedo(),
    })
  );

  const [dialogOpen, setDialogOpen] = useState(false);

  const [stateToLoad, setStateToLoad] = useState<string>("");

  return (
    <div>
      <div>
        <div>


          <div>
            Enable dragging
            <input checked={enabled}
              onChange={(event) =>
                actions.setOptions((options) => (options.enabled = event.currentTarget.checked))
              }
              type="checkbox" />
          </div>

          <button
            disabled={!canUndo}
            onClick={() => actions.history.undo()}
          >
            Undo
          </button>
          <button
            disabled={!canRedo}
            onClick={() => actions.history.redo()}
            style={{ marginRight: '10px' }}
          >
            Redo
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const json = query.serialize();
              copy(lz.encodeBase64(lz.compress(json)));
            }}
            style={{ marginRight: '10px' }}
          >
            Copy current state
          </button>
          <button
            onClick={() => setDialogOpen(true)}
          >
            Load
          </button>

          {dialogOpen && (

            <div
              onClick={() => setDialogOpen(false)}
            >
              <div>Load state</div>
              <div>
                <input
                  placeholder='Paste the contents that was copied from the "Copy Current State" button'
                  value={stateToLoad || ''}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStateToLoad(event.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={() => setDialogOpen(false)}
                  color="primary"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setDialogOpen(false);
                    const json = lz.decompress(lz.decodeBase64(stateToLoad));
                    actions.deserialize(json);
                  }}
                  color="primary"
                >
                  Load
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
