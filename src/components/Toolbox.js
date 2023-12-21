import { useEditor, Element } from '@craftjs/core';
import React from 'react';
import { Card } from './user/Card';
import { Container } from './user/Container';
import { Text } from './user/Text';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div px={2} py={2}>
      <div
      >
        <div pb={2}>
          <div>Drag to add</div>
        </div>
        <div container direction="column" item>
          <button
            ref={(ref) =>
              connectors.create(ref, <button>Click me</button>)
            }
            variant="contained"
            data-cy="toolbox-button"
          >
            Button
          </button>
        </div>
        <div container direction="column" item>
          <button
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
            data-cy="toolbox-text"
          >
            Text
          </button>
        </div>
        <div container direction="column" item>
          <button
            ref={(ref) =>
              connectors.create(
                ref,
                <Element canvas is={Container} padding={20} />
              )
            }
            variant="contained"
            data-cy="toolbox-container"
          >
            Container
          </button>
        </div>
        <div container direction="column" item>
          <button
            ref={(ref) => connectors.create(ref, <Card />)}
            variant="contained"
            data-cy="toolbox-card"
          >
            Card
          </button>
        </div>
      </div>
    </div>
  );
};
