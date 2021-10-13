import React from 'react'
import faker from 'faker'

export default class Carduser extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={` max-w-max bg-white  rounded-lg shadow-lg my-3 relative border-b-4 border-${this.props.colortheme}`}>
                <img className={` rounded-t-lg ${this.props.imageHight} ${this.props.imageWidht}  "`} alt="avater" src={this.props.image}  />
                <div className=" text-left px-2 text-base font-semibold pt-2 pb-4">{this.props.name}</div>
                <div className=" text-gray-500 italic text-xs absolute bottom-1 right-1">{this.props.species}</div>
            </div>
        )
    }
}