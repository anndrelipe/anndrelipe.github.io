import React from 'react'
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const element = <FontAwesomeIcon icon={faChevronDown} size="sm" style={{color: "#d00b0b",}} />
    
    return (
        <div className={style.header}>
            <div>{element}</div>
            <div><h5>SACOLA</h5></div>
            <div><a href='#' className={style.limpar}><h5>Limpar</h5></a></div>
        </div>
    )
}

export default Header