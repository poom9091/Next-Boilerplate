import React from 'react'
import Menu from './Manu'
import NavBar from './NavigationBar'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-knobs'

export default {
    title: 'NavigationBar/NavBar_Menu',
    component: Menu,
    parameters: {
        backgrounds: {
            default: 'write',
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
    },
}

const Template = (args) =>
<div className=" bg-blue-500 h-14 max-w-max">
    <Menu {...args}/>
</div>
export const Main= Template.bind({});
Main.args = {
  Path: "/",
  Text:"CSR", 
  TextColor:"text-white", 
  ColorHover:"bg-gray-400"
};