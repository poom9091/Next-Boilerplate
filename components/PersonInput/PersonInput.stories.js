import React from 'react'
import Personinput from './PersonInput'


export default {
    title: 'RESTAPI/Personinput',
    component: Personinput,
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

export const main = () => <Personinput/>
