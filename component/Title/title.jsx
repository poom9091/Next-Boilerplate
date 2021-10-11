import React from  "react"

export default class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className=" max-w-max rounded-lg p-4 space-y-3">
                <h1 className=" text-white font-bold text-9xl">{this.props.title}</h1>
                <h1 className=" text-gray-600 text-right font-semibold text-6xl">{this.props.subtitle}</h1>
            </div>
        )
    }
}