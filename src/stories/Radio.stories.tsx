import {Meta, Story} from '@storybook/react';
import React from 'react';

import Radio from '../components/Radio';

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    toggleColor: {
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
      control: {type: 'select'},
    },
  },
} as Meta;

const Template: Story = args => <Radio {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
