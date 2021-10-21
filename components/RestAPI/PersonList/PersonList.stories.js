import React from 'react'
import PersonList from './PersonList'

export default {
    title: 'RESTAPI/PersonList',
    component: PersonList,
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

export const main = () => <PersonList/>