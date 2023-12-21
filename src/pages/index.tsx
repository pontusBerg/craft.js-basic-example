import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { SettingsPanel } from '../components/SettingsPanel';
import { Toolbox } from '../components/Toolbox';
import { Topbar } from '../components/Topbar';
import { Button } from '../components/DemoComponents/Button';
import { Container } from '../components/DemoComponents/Container';
import { Text } from '../components/DemoComponents/Text';
import Hero from '../components/DemoComponents/Hero';
import ThreeSection from '../components/DemoComponents/ThreeSection';

export default function App() {

  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography style={{ margin: '20px 0' }} variant="h5" align="center">
        Basic Page Editor
      </Typography>
      <Editor
        resolver={{
          Button,
          Text,
          Container,
          Hero,
          ThreeSection
        }}
      >
        <Topbar />
        <Toolbox />
        <Frame>
          <Element
            canvas
            is={Container}
            padding={"16px"}
            background="#eeeeee"
            data-cy="root-container"
          >
            <Hero />
          </Element>
        </Frame>
        <Paper>
          <SettingsPanel />
        </Paper>
      </Editor>
    </div>
  );
}
