import React from 'react'
import style from './ValueReview.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

const ValueReview = ({taxaServico, taxaEntrega, precoTotal}) => {

    const element = <FontAwesomeIcon icon={faQuestion}  size="sm" style={{ color: "#616161", }} />
    return (
        <div>
            <h2 className={style.margintitle} >Resumo de valores</h2>
            <div className={style.reviewrow}>
                <p className={style.marginpgraph}>Subtotal</p>
                <p className={style.marginpgraph}>R$ {precoTotal}</p>
            </div>
            <div className={style.reviewrow}>
                <p className={style.marginpgraph}>Taxa de entrega</p>
                <p className={style.marginpgraph}>R$ {taxaEntrega}</p>
            </div>
            <div className={style.reviewrow}>
                <p className={style.marginpgraph}>Taxa de Serviço {element}</p>
                <p className={style.marginpgraph}>R$ {taxaServico}</p>
            </div>
            <hr className={style.bar}></hr>
        </div>
    )
}

export default ValueReview