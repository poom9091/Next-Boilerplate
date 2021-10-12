import React from 'react'
import Navbar from './NavigationBar'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-knobs'

export default {
    title: 'NavigationBar/Navbar',
    component: Navbar 
}

export const main = () => <Navbar/>

