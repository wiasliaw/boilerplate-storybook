import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { viewport } from '../config';
import Layout from '../src/layout/basicLayout';

const DemoDiv = styled.div<{colors: string}>`
  background-color: ${props => props.colors};
  width: 100%;
  height: 200px;
`;

storiesOf('Layout', module)
  .addParameters({
    viewport,
  })
  .add(
    'Basic',
    () => (
      <Layout>
        <DemoDiv colors="green"/>
        <DemoDiv colors="blue"/>
      </Layout>
    ),
  );
