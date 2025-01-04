import React from 'react';
import Currency from "./Currency";

export default {
    title: 'Валюта',
    component: Currency,
    argTypes: {
        fill: {
            control: 'color',
        },
        bg: {
            control: 'color',
        }
    },
};

const Template = (args) => <Currency {...args} />;

export const Wallet = Template.bind({});
Wallet.args = {
    title: 'Валюта',
    name: 'RUB',
    fill: '#151515',
    width: '20',
};