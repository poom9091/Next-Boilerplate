import React from 'react'

export default class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <a 
                href={this.props.Path} 
                className={`flex items-center font-bold h-full px-4  max-w-max
                ${this.props.TextColor} 
                hover:${this.props.ColorHover}`}
            >
            {this.props.Text}
            </a>
        )
    }
}