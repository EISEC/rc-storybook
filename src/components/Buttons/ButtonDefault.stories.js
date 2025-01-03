import React from 'react';
import { ButtonDefault } from './ButtonDefault';

export default {
    title: 'Кнопки',
    component: ButtonDefault,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <ButtonDefault {...args} />;

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