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
        outline: {
            description: 'outline кнопка, цвет меняется в зависимости от цвета текста'
        },
        defBtn: {
          description: 'включает кнопку по умолчанию'
        },
        color: {
            control: 'select',
            options: arrColor,
            description: "Цвет текста кнопки",
        },
        size: {
            control: 'select',
            options: ['small', 'large', 'big'],
            description: 'Размер кнопки',
            defaults: ['small', 'large', 'big']
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
    loader: false,
    outline: false,
    disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Кастомная кнопка',
    background: 'blue-400',
    size: 'large',
    color: 'white',
    defBtn: true,
    loader: false,
    outline: false,
    disabled: false
};

export const Loader = Template.bind({});
Loader.args = {
    label: 'Кастомная кнопка',
    background: 'beige-950',
    size: 'large',
    color: 'white',
    loader: true,
    outline: false,
    disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Кастомная кнопка',
    background: 'beige-950',
    size: 'large',
    color: 'white',
    loader: false,
    outline: false,
    disabled: true
};

export const Outline = Template.bind({});
Outline.args = {
    label: 'Кастомная кнопка',
    background: 'white',
    size: 'large',
    color: 'black-500',
    loader: false,
    outline: true,
    disabled: false
};