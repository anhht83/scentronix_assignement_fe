import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popper } from './Popper';
import { Paper, styled } from '@mui/material';

const StyledWrapped = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 400,
  width: '100%',
}));

const meta: Meta<typeof Popper> = {
  component: Popper,
  render: (args) => {
    const ref = useRef(null);

    return (
      <StyledWrapped>
        <div ref={ref}>anchorEl</div>
        <Popper anchorRef={ref} {...args} />
      </StyledWrapped>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Popper>;

export const Default: Story = {
  args: {
    children: () => (
      <Paper
        sx={{
          padding: (theme) => theme.spacing(3),
          margin: (theme) => theme.spacing(2),
        }}
      >
        This is poper content
      </Paper>
    ),
  },
};
