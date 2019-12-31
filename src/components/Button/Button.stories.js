import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

export const Basic = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const WithWidth = () => <Button onClick={action('clicked')} width='200px'>Sized</Button>;
