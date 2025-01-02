import React from 'react';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    backgroundColor: '#007bff',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    backgroundColor: '#6c757d',
};