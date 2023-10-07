import { Meta, StoryFn } from '@storybook/react'

import { Card } from '.'

export default {
  title: 'Card',
  component: Card,
} as Meta

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})