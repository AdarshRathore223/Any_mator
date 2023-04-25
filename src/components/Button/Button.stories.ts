import type { Meta, StoryObj } from '@storybook/react';

import Button from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Anymator/Button',
  component: Button,
  tags: ['autodocs'],
  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const hello: Story = {
  args: {
    label: 'hello',
  },
};

