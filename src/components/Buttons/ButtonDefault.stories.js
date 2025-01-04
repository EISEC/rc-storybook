import React from 'react';
import { ButtonDefault } from './ButtonDefault';
import {arrColor} from "../color";

export default {
    title: 'Кнопки',
    component: ButtonDefault,
    argTypes: {
        bg: {
            control: 'select',
            options: arrColor,
            description: "Цвет фона кнопки",
        },
        color: {
            control: 'select',
            options: arrColor,
            description: "Цвет текста кнопки",
        },
        size: {
            control: 'select',
            options: ['small', 'large', 'big'],
            description: 'Размер кнопки'
        }
    },
};

const Template = (args) => <ButtonDefault {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Стандартная кнопка',
    bg: 'red-500',
    size: 'large',
    color: 'white'
};

export const Custom = Template.bind({});
Custom.args = {
    label: 'Кастомная кнопка',
    bg: 'blue-400',
    size: 'large',
    color: 'white'
};