import React from "react"

export default class ListLayout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="bg-white rounded-2xl thadow-2xl py-10 px-5 w-1/3 space-y-8 overflow-auto overscroll-auto  h-screen">
                <h1 className=" text-3xl font-bold text-center">{this.props.children[0]}</h1>
                {this.props.children[1]}
            </div>
        )
    }
}