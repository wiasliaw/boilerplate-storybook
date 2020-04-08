import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Example from '../src/components/Example';
import Button from './wrapper/Button';

storiesOf('Components', module)
  .add(
    'Example',
    () => <Example />
  );

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    () => <Button />
  );