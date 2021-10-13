import '../styles/globals.css'
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [withInfo],
  backgrounds: {
    default: 'bluetheam',
    values: [
      {
        name: 'write',
        value: '#fff',
      },
      {
        name: 'bluetheam',
        value: '#3482F6',
      },
    ],
  },
}