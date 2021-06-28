import React from 'react'
import style from './Input.module.css'
function Input(props) {
    const {size ='medium', ...rest} = props
    return (
       <input className={`${style.input} ${style.size} input ${size}`} {...rest} />
    )
}

export default Input
