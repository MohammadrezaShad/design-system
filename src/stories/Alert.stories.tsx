import {Meta, Story} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import Alert from '../components/Alert';

const Wrap = styled.div`
  width: 900px;
`;

export default {
  title: 'Elements/Alert',
  component: Alert,
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <Wrap>
    <Alert {...args} />
  </Wrap>
);

export const Default = Template.bind({});

Default.args = {
  title: 'عنوان ',
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  action: 'دکمه تایید',
};
