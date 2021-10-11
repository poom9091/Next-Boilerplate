import React from 'react'
import Personinput from './PersonInput/PersonInput'
import Personlist from './PersonList/PersonList'
function RestAPI(props) {
    return (
        <div className="bg-white rounded-2xl thadow-2xl py-10 px-5 w-2/3 space-y-8 overflow-auto overscroll-auto  h-screen">
            <h1 className=" text-3xl font-bold text-center">Test RestAPI</h1>
            {props.children[0]}
            <div className="">
                {props.children[1]}
            </div>
        </div>
    )
}

export default RestAPI
