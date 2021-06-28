import React from 'react'
import style from './Buttontest.module.css'
function Buttontest({label}) {
    return (
        <button data-testid="button" className={style.button_style}>
            {label}
        </button>
    )
}

export default Buttontest
