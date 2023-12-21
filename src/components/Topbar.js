import { useEditor } from '@craftjs/core';
import copy from 'copy-to-clipboard';
import lz from 'lzutf8';
import React, { useState } from 'react';

export const Topbar = () => {
  const { actions, query, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: state.options.enabled && query.history.canUndo(),
      canRedo: state.options.enabled && query.history.canRedo(),
    })
  );

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();

  const [stateToLoad, setStateToLoad] = useState(null);

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
        <div item>
          <button
            onClick={() => {
              const json = query.serialize();
              copy(lz.encodeBase64(lz.compress(json)));
              setSnackbarMessage('State copied to clipboard');
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
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
          >
            <div>Load state</div>
            <div>
              <input
                placeholder='Paste the contents that was copied from the "Copy Current State" button'
                value={stateToLoad || ''}
                onChange={(e) => setStateToLoad(e.target.value)}
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
                  setSnackbarMessage('State loaded');
                }}
                color="primary"
              >
                Load
              </button>
            </div>
          </div>
          )}
          <button
            open={!!snackbarMessage}
            onClose={() => setSnackbarMessage(null)}
            message={<span>{snackbarMessage}</span>}
          >
            Snackbacr
          </button>
        </div>
      </div>
    </div>
  );
};
