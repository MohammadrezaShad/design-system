import {Meta, Story} from '@storybook/react';
import React from 'react';

import {LinearProgress as Linear} from '../components/ProgressIndicators';

export default {
  title: 'Progress/Linear',
  component: Linear,
  argTypes: {
    progressColor: {
      options: [
        'primary',
        'secondary',
        'danger',
        'success',
        'warning',
        'info',
        'link',
      ],
      defaultValue: 'primary',
      control: {type: 'select'},
    },
    value: {
      defaultValue: 0,
      control: {type: 'number'},
    },
    highlightColor: {
      control: {type: 'color'},
    },
    hasLabel: {
      control: {type: 'boolean'},
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      control: {type: 'radio'},
    },
  },
} as Meta;

const Template: Story = args => <Linear {...args} />;

export const LinearProgress = Template.bind({});
