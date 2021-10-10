import React from 'react'
import Testgraphql from "../Graphql/Testgraphql";
import Buttontest from "../../tests/Buttontest/Buttontest";
import RestAPI from "../RestAPI/RestAPI";
import styles from './Boilerplate.module.css'
function Boilerplate(props) {
    return (
        <div className={styles.example}>
            <h1 className={styles.header}>{props.children[0]}</h1>
            <div className={styles.centent_plate}>
                <div className={styles.text_jest}>
                    <div className={styles.flex_inline}>
                        <h1>Test Jest</h1>
                        {props.children[1]}
                        {/* <Buttontest  label="click me plase"></Buttontest> */}
                    </div>
                </div>
                <div className={styles.flex_inline}>
                    {props.children[2]}
                    {props.children[3]}
                    {/* <RestAPI  restAPI={props.restAPI} />
                    <Testgraphql  graphQL={props.graphQL}/> */}
                </div>
            </div>
        </div>
    )
}

export default Boilerplate
