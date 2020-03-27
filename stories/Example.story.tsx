import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from '../src/components/Example';

storiesOf('Components', module)
  .add(
    'Example',
    () => <Example />
  );
