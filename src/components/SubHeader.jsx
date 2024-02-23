import React from 'react'
import style from './SubHeader.module.css'

const SubHeader = () => {
    return (
        <div className={style.container}>
            <img className={style.logo} src="https://cdn.freelogovectors.net/wp-content/uploads/2023/03/mc-donalds-logo-freelogovectors.net_.png" alt="" />
            <div className={style.subcontainer}>
                <h4 className={style.restname}>McDonald's</h4>
                <h4 className={style.complement}>Adicionar mais itens</h4>
            </div>
        </div>
    )
}

export default SubHeader