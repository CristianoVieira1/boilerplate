import type { Meta, StoryFn } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: StoryFn = (args) => <Main {...args} />
Basic.args = {
  title: 'Boilerplate',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
}

export const Default: StoryFn = (args) => <Main {...args} />
