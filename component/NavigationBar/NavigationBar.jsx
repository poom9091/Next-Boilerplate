import React from 'react'
import Menu from './Manu'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={`${this.props.NavbarColor} ${this.props.NavbarTextColor} text-white w-full h-12 flex place-content-between px-8 text-xl `}>
                <div className='flex items-center'>
                    <h1 className={`font-bold `}>{this.props.NavbarName}</h1>
                </div>
                <div className="flex space-x-4 items-center  ">
                    {this.props.children}
                </div>
            </div>
        )
    }
}