import React from 'react'
import style from "./Continue.module.css"
import { useState } from 'react'

const Continue = ({quantidade, aPagar, entrega}) => {
    return (
        <div>
            <hr></hr>
            <div className={style.container}>
                <div className={style.paragraphdivpreset}>
                    <p className={style.pgraphone}>
                        Total com <span className={style.spanpreset}>{entrega}</span>
                    </p>
                    <p>
                        <span className={style.spanpreset}>R$ {aPagar}</span> / {quantidade} item 
                    </p>
                </div>
                <button className={style.continuebtn}>Continuar</button>
            </div>
        </div>
    )
}

export default Continue