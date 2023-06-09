import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}
