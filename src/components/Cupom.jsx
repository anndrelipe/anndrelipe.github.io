import React from 'react'
import style from './Cupom.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Cupom = () => {

    const element = <FontAwesomeIcon icon={faTag} size="xl" style={{ color: "#616161", }} />
    return (
        <div className={style.container}>
            <div className={style.mainchildcontainer}>
                <div>{element}</div>
                <div className={style.subcontainer}>
                    <h4 className={style.restname}>Cupom</h4>
                    <p className={style.text}>Nenhum cupom disponível</p>
                </div>
            </div>
            <h4 className={style.complement}>Adicionar</h4>
        </div>
    )
}

export default Cupom