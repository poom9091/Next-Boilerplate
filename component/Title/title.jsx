import React from  "react"

export default class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className=" max-w-max rounded-lg p-4 space-y-3">
                <h1 className={`${this.props.TitleColor} ${this.props.TitleSize} font-bold`} >{this.props.title}</h1>
                <h1 className={`${this.props.SubTitleColor} ${this.props.SubTitleSize} text-right font-semibold `}>{this.props.subtitle}</h1>
            </div>
        )
    }
}