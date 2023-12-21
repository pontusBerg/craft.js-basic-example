"use client"
import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';

import { SettingsPanel } from '../components/SettingsPanel';
import { Toolbox } from '../components/Toolbox';
import { Topbar } from '../components/Topbar';
import { Button } from '../components/DemoComponents/Button';
import { Container } from '../components/DemoComponents/Container';
import { Text } from '../components/DemoComponents/Text';
import Hero from '../components/DemoComponents/Hero';
import ThreeSection from '../components/DemoComponents/ThreeSection';
import '../components/DemoComponents/demo-styles.css'



export default function App() {

  return (
    <div>
      <h1>
        Basic Page Editor
      </h1>
      <Editor
        resolver={{
          Button,
          Text,
          Container,
          Hero,
          ThreeSection,
        }}
      >
        <Topbar />
        <Toolbox />
        <Frame>
          <Element is="div" canvas>

            <Hero />
            <Text fontSize={48} text='jafjjsjsjs' />
          </Element>
        </Frame>
        <div>
          <SettingsPanel />
        </div>
      </Editor>
    </div>
  );
}
