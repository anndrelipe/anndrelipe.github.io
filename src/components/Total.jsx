import React from 'react'
import style from './Total.module.css'

const Total = ({aPagar}) => {
    return (
        <div className={style.container}>
            <div className={style.reviewrow}>
                <h2 className={style.marginpgraph}>Total</h2>
                <h2 className={style.marginpgraph}>R$ {aPagar}</h2>
            </div>
        </div>
    )
}

export default Total