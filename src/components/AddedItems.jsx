import React from 'react'
import style from './AddedItems.module.css'

const AddedItems = ({precoTotal, soma, subtracao, valor, quantidade}) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Itens adicionados</h2>
            <div className={style.maininfos}>
                <img className={style.logo2} src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$ksXb0fyM/200/200/original?country=br" alt="" />
                <div className={style.moreinfos}>
                    <h5 className={style.ordername}>Méqui Box Clássica</h5>
                    <p className={style.spec}>São 4 Mcofertas para você compar...</p>
                    <h5>R$ {precoTotal}</h5>
                </div>
                <div className={style.addorders}>
                    {/* <button className={style.lessbtn}>-</button> */}
                    <button className={style.addbtn} onClick={subtracao}>{valor}</button>
                    <input className={style.numoforder} type="number" placeholder={quantidade} disabled/>
                    <button className={style.addbtn} onClick={soma}>+</button>
                </div>
            </div>
            <h3 className={style.lastxt}>Adicionar mais itens</h3>
        </div>
    )
}

export default AddedItems