// @flow
import React from "react"

import Button from "."
import { action } from '@storybook/addon-actions';

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: {
      inline: true
    }
  }
}

export const defaultButton = () => <Button onClick={action('button-click')} >Click aquí</Button>

export const mediumButton = () => <Button onClick={action('button-click')} size="medium">Click aquí</Button>

export const underlineButton = () => (
  <Button onClick={action('button-click')} size="medium" underline>
    Click aquí
  </Button>
)
