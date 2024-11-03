import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from './ToggleButton';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Buy',
    startIcon: <MdOutlineAddShoppingCart />,
  },
};
