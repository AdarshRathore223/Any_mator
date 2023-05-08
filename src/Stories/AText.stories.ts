import type { Meta, StoryObj } from '@storybook/react';

import AText  from '../components/AText/AText';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Anymator/AText',
  component: AText,
  tags: ['autodocs'],
} satisfies Meta<typeof AText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const animtion: Story = {
  args: {
    label: 'Hello world',
  },
};

export const ClickMe: Story = {
  args: {
    label: 'Click me!',
  },
};

export const Large: Story = {
  args: {
    label: 'AText',
  },
};

export const Small: Story = {
  args: {
    label: 'AText',
  },
};
