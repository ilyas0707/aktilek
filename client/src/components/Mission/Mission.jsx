import React from 'react'
import Styles from './Mission.module.css'
import Image from '../../assets/images/mission.png'
import { NavLink } from 'react-router-dom'

export const Mission = () => {
    return (
        <div className={Styles.mission}>
            <div className="container">
                <h3 className={Styles.heading}>Наша миссия</h3>
                <div className={Styles.block}>
                    <div className={Styles.left}>
                        <p>Миссия школы - раскрыть творческий потенциал, найти уникальный дар каждого ученика, обеспечить его успешное личностное, интеллектуальное, духовное, социальное, эмоциональное и физическое развитие на основе достижений общечеловеской культуры и национальных особенностей. </p>
                        <NavLink to="/schoolHistory">Читать больше...</NavLink>
                    </div>
                    <div className={Styles.right}>
                        <img src={ Image } alt="mission"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
