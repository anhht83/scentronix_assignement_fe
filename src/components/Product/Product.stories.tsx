
import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './Product';

const meta: Meta<typeof Product> = {
  component: Product,
};

export default meta;
type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: {
    text: 'Button text',
    price: 20,
  }
};

export const DescriptionWithTags: Story = {
  args: {
    ...Default.args,
    description: 'An optional description',
    tags: ['Optional tag'],
  }
};

export const DescriptionOnly: Story = {
  args: {
    ...Default.args,
    description: 'Description only',
  }
};

export const TagsOnly: Story = {
  args: {
    ...Default.args,
    tags: ['Tag','Only'],
  }
};
