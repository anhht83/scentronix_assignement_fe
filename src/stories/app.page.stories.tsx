import type { Meta, StoryObj } from '@storybook/react';
import App from '../pages/App';

const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const ToggleCartApp: Story = {
  args: {
    products: [
      {text: '50ml', price: 80.00},
      {text: '30ml', price: 30.00},
      {text: '20ml', price: 20.00, tags: ['3 x 5ml for €40.00']}
    ]
  }
};
