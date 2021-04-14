import React from 'react'
import Styles from './Director.module.css'
import Image from './../../assets/images/staff.png'

export const Director = () => {
    return (
        <div className={Styles.director}>
            <div className="container">
                <div className={Styles.block}>
                    <div className={Styles.left}>
                        <img src={ Image } alt="director"/>
                    </div>
                    <div className={Styles.right}>
                        <p>“Не бывает плохих детей, которые желают быть плохими, - плохими бывают только несчастные дети. Счастливые дети растут и вырастают хорошими.”</p>
                        <p>Алиева Гулайим Усеновна <br/>Директор</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
