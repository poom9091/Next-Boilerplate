import React from "react";
import style from './Center.module.css';

function Center(props) {
  return <div className={style.center}>{props.children}</div>;
}

export default Center;
