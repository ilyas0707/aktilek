import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Topline.module.css'

export const Topline = () => {
    return (
        <div className={Styles.topline}>
            <div className="container">
                <div className={Styles.block}>
                    <div className={Styles.left}>
                        <NavLink to="/main">Напиши нам</NavLink>
                        <NavLink to="/timetable">Расписание</NavLink>
                    </div>
                    <div className={Styles.right}>
                        <h2>Начните строить <br/> счастливое будущее <br/> прямо сейчас</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
