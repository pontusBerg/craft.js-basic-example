import React from 'react';
import { useEditor, Element } from '@craftjs/core';
import { Container } from './DemoComponents/Container';
import { Text } from './DemoComponents/Text';
import Hero from './DemoComponents/Hero';
import { Button } from './DemoComponents/Button';
import ThreeSection from './DemoComponents/ThreeSection';

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
            ref={(ref: HTMLButtonElement) =>
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
            ref={(ref: HTMLButtonElement) => connectors.create(ref, <Text text="Hi world" />)}
          >
            Text
          </button>
        </div>
        <div>
          <button
            ref={(ref: HTMLButtonElement) =>
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
            ref={(ref: HTMLButtonElement) =>
              connectors.create(
                ref,
                <ThreeSection canvas is={Container} padding={20} />
              )
            }
            data-cy="toolbox-container"
          >
            Benefits
          </button>
        </div>
      </div>
    </div>
  );
};
