import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useGet } from '../../hooks/get.hook';
import Styles from "./Staff.module.css";

import Face5 from './../../assets/staff/face1.png'
import Face6 from './../../assets/staff/face2.png'
import Face7 from './../../assets/staff/face3.png'

export const Staff = () => {
    // const { data, loading } = useGet('/api/staff')
    const staff = [
        { imageUrl: Face5, fullname: 'Елисеева Елена Владимировна', position: 'Учитель математики и информатики высшей квалификационной категории', administration: false },
        { imageUrl: Face6, fullname: 'Эсенбаев Анарбек Исмаилович', position: 'Учитель физики высшей квалификационной категории', administration: false },
        { imageUrl: Face7, fullname: 'Четвертных Нина Петровна', position: 'Учитель начальных классов высшей квалификационной категории, отличник образования', administration: false }
    ]

    return (
        <div className={Styles.staff}>
            <div className="container">
                <h3 className={Styles.heading}>Наши учителя</h3>
                {
                    <div className={Styles.block}>
                        {
                            staff.map(({ imageUrl, fullname, position }, i) => {
                                return (
                                    <div key={ i } className={Styles.item}>
                                        <img src={ imageUrl } alt={ fullname } />
                                        <p className={Styles.fullname}>{ fullname }</p>
                                        <p className={Styles.position}>{ position }</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className={Styles.button}>
                    <NavLink to="/teachers">Посмотреть все</NavLink>
                </div>
            </div>
        </div>
    )
}
