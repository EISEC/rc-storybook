import React from 'react';
import {ButtonDefault} from './ButtonDefault';
import {arrColor} from "../color";
import {RCButton} from "rc-fsc-ui-kit";

export default {
    title: 'Кнопки',
    component: ButtonDefault,
    argTypes: {
        background: {
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

const Template = (props) => <RCButton {...props}>{props.label}</RCButton>;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Стандартная кнопка',
    background: 'red-500',
    size: 'large',
    color: 'white',
};

export const Custom = Template.bind({});
Custom.args = {
    label: 'Кастомная кнопка',
    background: 'blue-400',
    size: 'large',
    color: 'white',
    loader: true,
};

export const Loader = Template.bind({});
Loader.args = {
    label: 'Кастомная кнопка',
    background: 'beige-950',
    size: 'large',
    color: 'white',
    loader: true,
};