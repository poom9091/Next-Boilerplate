import React from 'react'
import Personinput from './PersonInput/PersonInput'
import Personlist from './PersonList/PersonList'
import styles from  './RestAPI.module.css'
function RestAPI() {
    return (
        <div className={styles.border}>
            <h1 className={styles.header}>Test RestAPI</h1>
            <div className={`${styles.input_text} ${styles.space_x }`}> 
                <Personinput />
            </div>
            <div className={`${styles.space_x} ${styles.list_name}`}>
                <Personlist />
            </div>
        </div>
    )
}

export default RestAPI
