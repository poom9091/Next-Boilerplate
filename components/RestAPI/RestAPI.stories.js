import React from 'react'
import Personlist from './PersonList/PersonList' 
import Personinput from '../PersonInput/PersonInput'
import ListLayout from '../ListLayout/LiatLayout'


export default {
    title: 'RESTAPI/main',
    component: ListLayout,
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

export const main = () => 
<ListLayout side="w-2/3">
    <h1>Test RestAPI</h1>
    <Personinput />
    <Personlist />
</ListLayout> 