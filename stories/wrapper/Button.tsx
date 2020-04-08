import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Button from '../../src/components/Button';

export default (() => {
  return (
    <Button
      style={{
        width: '300px',
        height: '30px',
      }}
      disable={boolean('disable', false)}
    >
      {text('Text', 'Click Me')}
    </Button>
  )
}) as React.FC;