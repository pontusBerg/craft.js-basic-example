"use client"
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
    <div className='toolbox'>
      <div
      >
        <div>
          <h3>Drag to add</h3>
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
            ref={(ref: HTMLButtonElement) =>
              connectors.create(ref, <Hero />)
            }
          >
            Hero
          </button>
        </div>
        <div>
          <button
            ref={(ref: HTMLButtonElement) => connectors.create(ref, <Text fontSize={24} text="Hi world" />)}
          >
            Text
          </button>
        </div>
        <div>
          <button
            ref={(ref: HTMLButtonElement) =>
              connectors.create(
                ref,
                <Element background='white' canvas is={Container} padding={"20px"} >
                </Element>
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
                <ThreeSection />
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
