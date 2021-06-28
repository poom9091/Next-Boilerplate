import React from 'react'
import style from './Button.module.css'


function Button(props) {
    const { variant = 'primary',padding,bgcolor,width,height,color,boderrd, fontsize,children, ...rest} = props
    const mystyle = {
        backgroundColor: `${bgcolor}`,
        color: `${color}`,
        fontSize: `${fontsize}`,
        borderRadius: `${boderrd}`,
        width: `${width}` ,
        hight: `${height}`,
        padding: `${padding}`
    }
    return (
        <button 
            className={`${style.button} ${style.variant} button ${variant}`} 
            style={mystyle}
            {...rest} 
        >
            {children}
        </button>
    )
}

export default Button
