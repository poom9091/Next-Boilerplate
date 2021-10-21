import React from 'react'
import ListLayout from '../ListLayout/LiatLayout'
import Testgraphql from '../Graphql/Testgraphql'


export default {
    title: 'GraphQL/main',
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
<ListLayout side="w-1/3">
    <h1>Test GraphQl</h1>
    <div className="text-center">
    <h1 className="text-center"> Rick and Morty </h1>
    <h1 className="text-center">-- Episodes : 1 --</h1>
    </div>
    <Testgraphql ep="1"/>
</ListLayout>
