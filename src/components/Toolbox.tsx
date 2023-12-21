import { useEditor, Element } from '@craftjs/core';
import React from 'react';
import { Card } from './user/Card';
import { Container } from './user/Container';
import { Text } from './user/Text';
import Hero from './DemoComponents/Hero';
import { Button } from './user/Button';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div>
      <div
      >
        <div>
          <div>Drag to add</div>
        </div>
        <div>
          <button
            ref={(ref) =>
              connectors.create(ref, <Button>Hey there</Button>)
            }
          >
            Button
          </button>
        </div>
        <div>
          <button
            ref={(ref) =>
              connectors.create(ref, <Hero />)
            }
          >
            Hero
          </button>
        </div>
        <div>
          <button
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          >
            Text
          </button>
        </div>
        <div>
          <button
            ref={(ref) =>
              connectors.create(
                ref,
                <Element canvas is={Container} padding={20} />
              )
            }
            data-cy="toolbox-container"
          >
            Container
          </button>
        </div>
        <div>
          <button
            ref={(ref) => connectors.create(ref, <Card />)}
            data-cy="toolbox-card"
          >
            Card
          </button>
        </div>
      </div>
    </div>
  );
};
