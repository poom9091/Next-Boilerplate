import React from 'react'
import Menu from './Manu'
import NavBar from './NavigationBar'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-knobs'

export default {
    title: 'NavigationBar/Navbar',
    component: NavBar,
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

const MainTemplate = (args) => 
<NavBar {...args.NavigationBar}>
    <Menu {...args.Menu}/>
</NavBar>

export const Main= MainTemplate.bind({});
Main.args = {
    NavigationBar:{
        NavbarName:"Boilerplate Next",
        NavbarTextColor:"text-white",
        NavbarColor:"bg-blue-500",
    },
    Menu:{
        Path: "/",
        Text:"SSR", 
        TextColor:"text-white", 
        ColorHover:"bg-gray-400"
    }
};

const Template = (args) => <NavBar {...args}/>;
export const MainWithMenu= Template.bind({});
MainWithMenu.args = {
        NavbarName:"Boilerplate Next",
        NavbarTextColor:"text-white",
        NavbarColor:"bg-blue-500"
};


export const NavigationBar = () =>  
    <NavBar
        NavbarName="Boilerplate Next"
        NavBarTextColor="text-white"
        NavbarColor="bg-blue-500"
    >
        <Menu Path="/" Text="CSR" TextColor="text-white" ColorHover="bg-gray-400"/>
        <Menu Path="/ssr" Text="SSR" TextColor="text-white" ColorHover="bg-gray-400"/>
        <Menu Path="/ssg" Text="CSR" TextColor="text-white" ColorHover="bg-gray-400"/>
    </NavBar>